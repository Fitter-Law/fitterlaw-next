const fs = require('fs').promises;
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const importStatement = "import DefaultLayout from '../components/layouts/DefaultLayout';\n\n";

async function addImports() {
  try {
    const files = await fs.readdir(pagesDir);
    const tsxFiles = files.filter(file => file.endsWith('.tsx'));

    for (const file of tsxFiles) {
      const filePath = path.join(pagesDir, file);
      let content = await fs.readFile(filePath, 'utf8');
      
      if (!content.includes('DefaultLayout')) {
        continue;
      }
      
      if (!content.includes("import DefaultLayout")) {
        content = importStatement + content;
        await fs.writeFile(filePath, content);
        console.log(`Added import to ${file}`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

addImports();