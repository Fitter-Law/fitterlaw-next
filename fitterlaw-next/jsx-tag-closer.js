const fs = require('fs');
const path = require('path');

function fixJsxTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unclosed DefaultLayout and div tags
    const unclosedLayoutRegex = /return\s*\(\s*<DefaultLayout>(.+?)(<div[^>]*>.*?)<\/div>\s*\);/gs;
    content = content.replace(unclosedLayoutRegex, (match, layoutContent, divContent) => {
      modified = true;
      return `return (
  <DefaultLayout>
    ${divContent}
    </div>
  </DefaultLayout>
);`;
    });

    // Ensure proper component nesting and imports
    if (!content.includes('import DefaultLayout') && content.includes('<DefaultLayout>')) {
      content = `import DefaultLayout from '@/components/Layouts/DefaultLayout';\n${content}`;
      modified = true;
    }

    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Corrected: ${filePath}`);
    }
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
    } else if ((file.endsWith('.tsx') || file.endsWith('.jsx')) && 
               fs.readFileSync(fullPath, 'utf8').includes('<DefaultLayout>')) {
      fixJsxTags(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(process.cwd(), 'src');
traverseAndFix(srcDir);

console.log('JSX tag closing complete.');
