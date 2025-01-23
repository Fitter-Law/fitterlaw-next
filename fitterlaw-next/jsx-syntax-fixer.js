const fs = require('fs');
const path = require('path');

function fixJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix dangerouslySetInnerHTML
    content = content.replace(
      /dangerouslysetinnerhtml="{{"\s*__html:=""?\s*`(.*?)`\s*=""?\s*}}/g, 
      'dangerouslySetInnerHTML={{ __html: `$1` }}'
    );

    // Correct className
    content = content.replace(/classname=/g, 'className=');

    // Remove extra closing tags and ensure proper nesting
    content = content.replace(/\}<\/div><\/DefaultLayout>/, '}');

    fs.writeFileSync(filePath, content);
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function traverseAndFix(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseAndFix(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fixJsxSyntax(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(process.cwd(), 'src');
traverseAndFix(srcDir);

console.log('JSX syntax fixing complete.');
