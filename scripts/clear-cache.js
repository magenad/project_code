const fs = require('fs');
fs.exists('./node_modules/.cache', (exists) => {
    if (exists) fs.rmdirSync('./node_modules/.cache', { recursive: true });
});
