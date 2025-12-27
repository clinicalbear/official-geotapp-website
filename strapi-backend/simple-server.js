const http = require('http');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.join(__dirname, '.tmp', 'data.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.log('Database error:', err);
  else console.log('Database opened');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS pages (
    id INTEGER PRIMARY KEY,
    title TEXT,
    slug TEXT UNIQUE,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY,
    title TEXT,
    slug TEXT UNIQUE,
    content TEXT,
    author TEXT,
    published_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

function getBodyData(req, callback) {
  let body = '';
  req.on('data', chunk => body += chunk.toString());
  req.on('end', () => {
    try { callback(JSON.parse(body || '{}')); } catch(e) { callback({}); }
  });
}

const loginHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GeoTapp Admin</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:white;padding:40px;border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,0.2);width:100%;max-width:400px}h1{color:#333;margin-bottom:30px;text-align:center}.form-group{margin-bottom:20px}label{display:block;margin-bottom:8px;color:#555}input{width:100%;padding:12px;border:1px solid #ddd;border-radius:5px}button{width:100%;padding:12px;background:#667eea;color:white;border:none;border-radius:5px;cursor:pointer}.info{background:#f0f4ff;padding:15px;border-radius:5px;margin-top:20px;font-size:12px}</style></head><body><div class="container"><h1>🌍 GeoTapp Admin</h1><form onsubmit="handleLogin(event)"><div class="form-group"><label>Email</label><input type="email" id="email" placeholder="admin@geotapp.com" required></div><div class="form-group"><label>Password</label><input type="password" id="password" placeholder="demo123" required></div><button type="submit">Login</button></form><div class="info"><strong>Demo:</strong><br>admin@geotapp.com / demo123</div></div><script>function handleLogin(e){e.preventDefault();if(document.getElementById('email').value==='admin@geotapp.com'&&document.getElementById('password').value==='demo123'){localStorage.setItem('token','1');window.location='/admin/dashboard'}else{alert('Invalid')}}</script></body></html>`;

const dashboardHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GeoTapp Dashboard</title><style>*{margin:0;padding:0}body{font-family:sans-serif;background:#f5f5f5}.header{background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:20px 40px;display:flex;justify-content:space-between}.logout{background:#ff6b6b;color:white;padding:10px 20px;border:none;cursor:pointer}.container{max-width:1200px;margin:0 auto;padding:40px 20px}.card{background:white;padding:20px;border-radius:5px;margin-bottom:20px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.stat{padding:20px;background:white;border-radius:5px;text-align:center}.number{font-size:32px;font-weight:bold;color:#667eea}</style></head><body><div class="header"><h1>🌍 GeoTapp Admin</h1><button class="logout" onclick="logout()">Logout</button></div><div class="container"><div class="card"><h2>Benvenuto!</h2><p>Pannello amministrativo GeoTapp</p></div><div class="stats"><div class="stat"><h3>Pagine</h3><div class="number" id="pc">0</div></div><div class="stat"><h3>Blog</h3><div class="number" id="bc">0</div></div><div class="stat"><h3>API</h3><div class="number" id="api">✓</div></div></div><div class="card"><h3>API Endpoints</h3><pre>GET /api/health
GET /api/pages
POST /api/pages
GET /api/blog-posts
POST /api/blog-posts
GET /api/settings
POST /api/contact</pre></div></div><script>async function load(){try{let p=await fetch('http://localhost:1337/api/pages').then(r=>r.json());document.getElementById('pc').textContent=(p.data||[]).length;let b=await fetch('http://localhost:1337/api/blog-posts').then(r=>r.json());document.getElementById('bc').textContent=(b.data||[]).length}catch(e){document.getElementById('api').textContent='✗';document.getElementById('api').style.color='#ff6b6b'}}function logout(){localStorage.clear();window.location='/admin/login'}load()</script></body></html>`;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  const pathname = new URL(req.url, `http://${req.headers.host}`).pathname;

  // Admin
  if ((pathname === '/admin' || pathname === '/admin/' || pathname === '/admin/login') && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(loginHTML);
  }
  else if (pathname === '/admin/dashboard' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(dashboardHTML);
  }
  // API
  else if (pathname === '/api/health') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'ok' }));
  }
  else if (pathname === '/api/pages' && req.method === 'GET') {
    db.all('SELECT * FROM pages ORDER BY created_at DESC', (err, rows) => {
      res.writeHead(200);
      res.end(JSON.stringify({ data: rows || [] }));
    });
  }
  else if (pathname === '/api/pages' && req.method === 'POST') {
    getBodyData(req, (data) => {
      db.run('INSERT INTO pages (title, slug, content) VALUES (?, ?, ?)', [data.title, data.slug, data.content], function(err) {
        if (err) { res.writeHead(400); res.end(JSON.stringify({ error: err.message })); }
        else { res.writeHead(201); res.end(JSON.stringify({ id: this.lastID, ...data })); }
      });
    });
  }
  else if (pathname.match(/^\/api\/pages\//) && req.method === 'GET') {
    const slug = pathname.split('/')[3];
    db.get('SELECT * FROM pages WHERE slug = ?', [slug], (err, row) => {
      res.writeHead(200);
      res.end(JSON.stringify({ data: row || null }));
    });
  }
  else if (pathname === '/api/blog-posts' && req.method === 'GET') {
    db.all('SELECT * FROM blog_posts ORDER BY created_at DESC', (err, rows) => {
      res.writeHead(200);
      res.end(JSON.stringify({ data: rows || [] }));
    });
  }
  else if (pathname === '/api/blog-posts' && req.method === 'POST') {
    getBodyData(req, (data) => {
      db.run('INSERT INTO blog_posts (title, slug, content, author) VALUES (?, ?, ?, ?)', [data.title, data.slug, data.content, data.author], function(err) {
        if (err) { res.writeHead(400); res.end(JSON.stringify({ error: err.message })); }
        else { res.writeHead(201); res.end(JSON.stringify({ id: this.lastID, ...data })); }
      });
    });
  }
  else if (pathname.match(/^\/api\/blog-posts\//) && req.method === 'GET') {
    const slug = pathname.split('/')[3];
    db.get('SELECT * FROM blog_posts WHERE slug = ?', [slug], (err, row) => {
      res.writeHead(200);
      res.end(JSON.stringify({ data: row || null }));
    });
  }
  else if (pathname === '/api/settings') {
    res.writeHead(200);
    res.end(JSON.stringify({ data: {} }));
  }
  else if (pathname === '/api/contact' && req.method === 'POST') {
    getBodyData(req, (data) => {
      console.log('Contact:', data);
      res.writeHead(200);
      res.end(JSON.stringify({ success: true }));
    });
  }
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = 1337;
server.listen(PORT, () => {
  console.log(`\n✓ GeoTapp API on http://localhost:${PORT}`);
  console.log(`✓ Admin: http://localhost:${PORT}/admin\n`);
});

process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});
