const fs = require('fs');
const path = require('path');

function replaceLayoutTag(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <defaultlayout> with <DefaultLayout>
    content = content.replace(/<defaultlayout>/g, '<DefaultLayout>')
                     .replace(/<\/defaultlayout>/g, '</DefaultLayout>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function traverseAndReplace(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseAndReplace(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      replaceLayoutTag(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(process.cwd(), 'src');
traverseAndReplace(srcDir);

console.log('Layout tag replacement complete.');
