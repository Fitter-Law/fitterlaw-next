const fs = require('fs');
const path = require('path');

function sanitizeCode(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the return statement
    const returnMatch = content.match(/return\s*\((.+)\);/s);
    
    if (returnMatch) {
      // Remove line breaks, extra spaces, and trim
      let sanitizedReturn = returnMatch[1]
        .replace(/\s+/g, ' ')  // Replace multiple spaces with single space
        .replace(/>\s+</g, '><')  // Remove spaces between tags
        .trim();
      
      // Reconstruct the file content
      content = content.replace(
        /return\s*\((.+)\);/s, 
        `return (${sanitizedReturn});`
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Sanitized: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function traverseAndSanitize(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseAndSanitize(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      sanitizeCode(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(process.cwd(), 'src');
traverseAndSanitize(srcDir);

console.log('Code sanitization complete.');
