const fs = require('fs');
const path = require('path');

function correctTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Correct DefaultLayout syntax
    const defaultLayoutRegex = /return\s*\(\s*<DefaultLayout>(.+?)<\/DefaultLayout>\s*\);/gs;
    content = content.replace(defaultLayoutRegex, (match, inner) => {
      modified = true;
      return `return (
  <DefaultLayout>
    ${inner.trim()}
  </DefaultLayout>
);`;
    });

    // Remove dangerouslySetInnerHTML extra attributes
    const dangerousHtmlRegex = /dangerouslySetInnerHTML=\{\{[^}]+\}\}=""/g;
    content = content.replace(dangerousHtmlRegex, 'dangerouslySetInnerHTML={{ __html: `` }}');

    // Ensure proper import for DefaultLayout
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

function traversePagesFolder(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traversePagesFolder(fullPath);
    } else if (file.endsWith('.tsx') && 
               fs.readFileSync(fullPath, 'utf8').includes('<DefaultLayout>')) {
      correctTsxFile(fullPath);
    }
  });
}

// Specific path to pages folder
const pagesDir = 'C:\\Users\\jawad\\OneDrive\\Documents\\GitHub\\fitterlaw-next\\fitterlaw-next\\src\\pages';
traversePagesFolder(pagesDir);

console.log('Pages TSX files correction complete.');
