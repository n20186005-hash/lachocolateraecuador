const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'src/i18n/translations.ts');
let content = fs.readFileSync(tsFilePath, 'utf8');

// I will parse the JS object from the string, or I can just rewrite the whole file since I have the exact content.
