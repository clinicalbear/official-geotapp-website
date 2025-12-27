const http = require('http');
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '.tmp', 'data.json');

// Init DB
if (!fs.existsSync(path.dirname(DB_FILE))) {
    fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
}
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ pages: [], blog_posts: [] }));
}

function readDB() {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function writeDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function getBodyData(req, callback) {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
        try { callback(JSON.parse(body || '{}')); } catch (e) { callback({}); }
    });
}

const loginHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GeoTapp Admin</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:sans-serif;background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);min-height:100vh;display:flex;align-items:center;justify-content:center}.container{background:white;padding:40px;border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,0.2);width:100%;max-width:400px}h1{color:#333;margin-bottom:30px;text-align:center}.form-group{margin-bottom:20px}label{display:block;margin-bottom:8px;color:#555}input{width:100%;padding:12px;border:1px solid #ddd;border-radius:5px}button{width:100%;padding:12px;background:#8FC436;color:white;border:none;border-radius:5px;cursor:pointer;font-weight:bold;font-size:16px}.info{background:#f0f4ff;padding:15px;border-radius:5px;margin-top:20px;font-size:12px}</style></head><body><div class="container"><h1>🌍 GeoTapp Admin</h1><form onsubmit="handleLogin(event)"><div class="form-group"><label>Email</label><input type="email" id="email" placeholder="admin@geotapp.com" required></div><div class="form-group"><label>Password</label><input type="password" id="password" placeholder="demo123" required></div><button type="submit">Login</button></form><div class="info"><strong>Accesso Rapido:</strong><br>admin@geotapp.com / demo123 (o qualsiasi credenziale valida)</div></div><script>function handleLogin(e){e.preventDefault();const e_val=document.getElementById('email').value;const p_val=document.getElementById('password').value;if(e_val && p_val){localStorage.setItem('token','1');window.location='/admin/dashboard'}else{alert('Inserisci credenziali')}}</script></body></html>`;

const dashboardHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>GeoTapp Dashboard</title><style>*{margin:0;padding:0}body{font-family:sans-serif;background:#f8fafc}.header{background:#1e293b;color:white;padding:20px 40px;display:flex;justify-content:space-between;align-items:center}.logout{background:#ef4444;color:white;padding:8px 16px;border:none;border-radius:4px;cursor:pointer}.container{max-width:1200px;margin:0 auto;padding:40px 20px}.card{background:white;padding:20px;border-radius:8px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1)}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.stat{padding:24px;background:white;border-radius:8px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.1)}.number{font-size:36px;font-weight:bold;color:#8FC436;margin-top:10px}</style></head><body><div class="header"><h1>🌍 GeoTapp Backend</h1><button class="logout" onclick="logout()">Logout</button></div><div class="container"><div class="card"><h2>Pannello di Controllo</h2><p>Gestione contenuti e impostazioni API.</p></div><div class="stats"><div class="stat"><h3>Pagine Attive</h3><div class="number" id="pc">0</div></div><div class="stat"><h3>Articoli Blog</h3><div class="number" id="bc">0</div></div><div class="stat"><h3>Stato API</h3><div class="number" id="api" style="color:#22c55e">Online</div></div></div><div class="card"><h3>Risorse Disponibili</h3><pre style="background:#f1f5f9;padding:15px;border-radius:4px">GET  /api/pages
POST /api/pages
GET  /api/blog-posts
POST /api/blog-posts
POST /api/contact</pre></div></div><script>async function load(){try{let p=await fetch('http://localhost:1337/api/pages').then(r=>r.json());document.getElementById('pc').textContent=(p.data||[]).length;let b=await fetch('http://localhost:1337/api/blog-posts').then(r=>r.json());document.getElementById('bc').textContent=(b.data||[]).length}catch(e){document.getElementById('api').textContent='Offline';document.getElementById('api').style.color='#ef4444'}}function logout(){localStorage.clear();window.location='/admin'}</script></body></html>`;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

    const pathname = new URL(req.url, `http://${req.headers.host}`).pathname;

    // Admin UI
    if ((pathname === '/admin' || pathname === '/admin/' || pathname === '/admin/login') && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(loginHTML);
        return;
    }
    if (pathname === '/admin/dashboard' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(dashboardHTML);
        return;
    }

    // APIs
    const db = readDB();

    if (pathname === '/api/pages') {
        if (req.method === 'GET') {
            res.writeHead(200);
            res.end(JSON.stringify({ data: db.pages }));
        } else if (req.method === 'POST') {
            getBodyData(req, (data) => {
                const newItem = { id: Date.now(), ...data, created_at: new Date() };
                db.pages.push(newItem);
                writeDB(db);
                res.writeHead(201);
                res.end(JSON.stringify(newItem));
            });
        }
    } else if (pathname === '/api/blog-posts') {
        if (req.method === 'GET') {
            res.writeHead(200);
            res.end(JSON.stringify({ data: db.blog_posts }));
        } else if (req.method === 'POST') {
            getBodyData(req, (data) => {
                const newItem = { id: Date.now(), ...data, created_at: new Date() };
                db.blog_posts.push(newItem);
                writeDB(db);
                res.writeHead(201);
                res.end(JSON.stringify(newItem));
            });
        }
    } else if (pathname === '/api/contact' && req.method === 'POST') {
        getBodyData(req, (data) => {
            console.log('API Contact received:', data);
            res.writeHead(200);
            res.end(JSON.stringify({ success: true }));
        });
    } else {
        // 404 or Welcome JSON
        if (pathname === '/') {
            res.writeHead(200);
            res.end(JSON.stringify({ message: "Welcome to GeoTapp API", admin: "/admin" }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Not found' }));
        }
    }
});

const PORT = 1337;
server.listen(PORT, () => {
    console.log(`\n✓ GeoTapp JSON Server running on http://localhost:${PORT}`);
    console.log(`✓ Admin Panel: http://localhost:${PORT}/admin\n`);
});
