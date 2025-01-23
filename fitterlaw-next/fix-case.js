const fs = require('fs').promises;
const path = require('path');

async function fixImports() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const files = await fs.readdir(pagesDir);
  
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    const filePath = path.join(pagesDir, file);
    let content = await fs.readFile(filePath, 'utf8');
    content = content.replace("@/components/Layouts/DefaultLayout", "@/components/layouts/DefaultLayout");
    await fs.writeFile(filePath, content);
  }
}

fixImports();