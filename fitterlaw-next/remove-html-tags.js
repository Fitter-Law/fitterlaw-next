const fs = require('fs');
const path = require('path');

function removeHtmlTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove HTML, head, and body tags from the start of the file
    content = content.replace(/^<html>.*?<head>.*?<\/head>\s*<body>/, '')
                     .replace(/<\/body>\s*<\/html>$/, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function traverseAndClean(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseAndClean(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      removeHtmlTags(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(process.cwd(), 'src');
traverseAndClean(srcDir);

console.log('HTML tag removal complete.');
