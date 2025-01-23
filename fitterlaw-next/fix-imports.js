const fs = require('fs').promises;
const path = require('path');

async function checkImports() {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const files = await fs.readdir(pagesDir);
  
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    const content = await fs.readFile(path.join(pagesDir, file), 'utf8');
    console.log(`\n${file} first 10 lines:`);
    console.log(content.split('\n').slice(0, 10).join('\n'));
  }
}

checkImports();