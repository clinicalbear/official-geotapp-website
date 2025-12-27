const fs = require('fs');
const path = require('path');

['.tmp', '.cache', 'build', 'dist'].forEach(dir => {
    const p = path.join(__dirname, dir);
    if (fs.existsSync(p)) {
        console.log(`Deleting ${dir}...`);
        try {
            fs.rmSync(p, { recursive: true, force: true });
        } catch (e) {
            console.error(`Failed to delete ${dir}: ${e.message}`);
        }
    }
});
console.log('Clean complete');
