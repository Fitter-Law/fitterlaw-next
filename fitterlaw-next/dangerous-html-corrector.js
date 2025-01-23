const fs = require('fs');
const path = require('path');

function correctDangerousHtmlSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Correct dangerouslySetInnerHTML syntax
    const dangerousHtmlRegex = /dangerouslysetinnerhtml="{{"\s*__html:=""?\s*`(.*?)`\s*=""?\s*}}/gs;
    content = content.replace(dangerousHtmlRegex, (match, htmlContent) => {
      modified = true;
      return `dangerouslySetInnerHTML={{ __html: \`${htmlContent}\` }}`;
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

function traverseFolders(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively search these specific subfolders
      if (['pages', 'blog', 'posts'].includes(file)) {
        traverseFolders(fullPath);
      }
    } else if (
      (file.endsWith('.tsx') || file.endsWith('.jsx')) && 
      fs.readFileSync(fullPath, 'utf8').includes('dangerouslysetinnerhtml')
    ) {
      correctDangerousHtmlSyntax(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(process.cwd(), 'src');
traverseFolders(srcDir);

console.log('Dangerous HTML syntax correction complete.');
