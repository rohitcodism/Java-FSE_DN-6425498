const fs = require('fs');
const path = require('path');

function removeComments(content) {
  // Remove single-line comments (// ...)
  content = content.replace(/\/\/.*$/gm, '');
  
  // Remove multi-line comments (/* ... */)
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove empty lines that may have been left after comment removal
  content = content.replace(/^\s*\n/gm, '');
  
  // Remove trailing whitespace from lines
  content = content.replace(/[ \t]+$/gm, '');
  
  return content;
}

const srcDir = path.join(__dirname, 'src');
const jsFiles = [
  'App.js',
  'App.test.js', 
  'index.js',
  'IndianPlayers.js',
  'ListofPlayers.js',
  'reportWebVitals.js',
  'setupTests.js'
];

jsFiles.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanContent = removeComments(content);
    fs.writeFileSync(filePath, cleanContent, 'utf8');
    console.log(`Removed comments from: ${file}`);
  }
});

console.log('Comment removal completed!');
