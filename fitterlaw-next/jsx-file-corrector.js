const fs = require('fs');
const path = require('path');

function correctJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Correct JSX syntax for components using DefaultLayout
    const correctedContent = content.replace(
      /return\s*\(\s*<DefaultLayout>(.+?)<\/DefaultLayout>\s*\);/gs,
      (match) => {
        // Remove unnecessary attributes and ensure proper nesting
        return `return (
  <DefaultLayout>
    ${match.replace(/<DefaultLayout>/, '').replace(/<\/DefaultLayout>/, '').trim()}
  </DefaultLayout>
);`;
      }
    );

    // Write back if modified
    if (correctedContent !== content) {
      fs.writeFileSync(filePath, correctedContent);
      console.log(`Corrected: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function traverseAndCorrect(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseAndCorrect(fullPath);
    } else if ((file.endsWith('.tsx') || file.endsWith('.jsx')) && 
               fs.readFileSync(fullPath, 'utf8').includes('<DefaultLayout>')) {
      correctJsxSyntax(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(process.cwd(), 'src');
traverseAndCorrect(srcDir);

console.log('JSX syntax correction complete.');
