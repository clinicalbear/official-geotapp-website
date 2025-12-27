const fs = require('fs');
const path = require('path');

const filePath = 'd:/xampp/htdocs/GeoTapp EcoSystem/geotapp-site/.open-next/server-functions/default/handler.mjs';
try {
    let content = fs.readFileSync(filePath, 'utf8');
    const target = 'let{inspect}=require("node:util"),{writeFileSync}=require("node:fs")';
    const replacement = 'let{inspect}=require("node:util"),{writeFileSync}={writeFileSync:()=>{}}';

    if (content.includes(target)) {
        const count = content.split(target).length - 1;
        console.log(`Found ${count} occurrences.`);
        content = content.replaceAll(target, replacement);
        fs.writeFileSync(filePath, content);
        console.log('File patched successfully.');
    } else {
        console.error('Target string not found!');
        process.exit(1);
    }
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
