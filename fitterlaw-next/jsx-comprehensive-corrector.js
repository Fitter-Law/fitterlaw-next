const fs = require('fs');
const path = require('path');

function correctJsxSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Correct DefaultLayout syntax
    const defaultLayoutRegex = /return\s*\(\s*<DefaultLayout>(.+?)<\/DefaultLayout>\s*\);/gs;
    content = content.replace(defaultLayoutRegex, (match, inner) => {
      modified = true;
      // Remove extra attributes and ensure proper formatting
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

function traverseAndCorrect(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !fullPath.includes('node_modules')) {
      traverseAndCorrect(fullPath);
    } else if ((file.endsWith('.tsx') || file.endsWith('.jsx')) && 
               fs.readFileSync(fullPath, 'utf8').includes('<DefaultLayout>')) {
      correctJsxSyntax(fullPath);
    }
  });
}

// Start from project root
const projectRoot = process.cwd();
traverseAndCorrect(projectRoot);

console.log('Comprehensive JSX syntax correction complete.');
