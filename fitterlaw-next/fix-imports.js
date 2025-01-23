const fs = require('fs').promises;
const path = require('path');

async function addImports() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const importLine = `import DefaultLayout from '@/components/layouts/DefaultLayout';\n\n`;

  try {
    const files = await fs.readdir(pagesDir);
    for (const file of files) {
      if (!file.endsWith('.tsx')) continue;
      
      const filePath = path.join(pagesDir, file);
      let content = await fs.readFile(filePath, 'utf8');
      
      if (!content.includes('import DefaultLayout')) {
        content = importLine + content;
        await fs.writeFile(filePath, content);
        console.log(`Updated ${file}`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

addImports();