const fs = require('fs');
const filePath = 'd:/xampp/htdocs/GeoTapp EcoSystem/geotapp-site/.open-next/middleware/handler.mjs';
try {
    if (!fs.existsSync(filePath)) {
        console.log('Middleware file does not exist.');
        process.exit(0);
    }
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.indexOf('node:fs') === -1) {
        console.log('CLEAN: node:fs not found in middleware.');
    } else {
        console.log('DIRTY: node:fs FOUND in middleware.');
    }
} catch (err) {
    console.error(err);
}
