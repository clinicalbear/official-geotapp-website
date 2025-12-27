
const { GEOTAPP_SYSTEMS } = require('./src/app/products/geotapp-flow/systems-data.ts');
console.log("Systems loaded:", GEOTAPP_SYSTEMS.length);
GEOTAPP_SYSTEMS.forEach(s => console.log(s.id, s.color));
