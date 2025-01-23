const fs = require('fs').promises;
const path = require('path');

async function convertToDefaultLayout() {
 const pagesDir = path.join(process.cwd(), 'src', 'pages');
 const files = await fs.readdir(pagesDir);
 
 for (const file of files) {
   if (!file.endsWith('.tsx')) continue;
   const filePath = path.join(pagesDir, file);
   let content = await fs.readFile(filePath, 'utf8');

   content = content.replace(
     /import Layout from ['"]@\/components\/Layouts\/(post|page)-layout['"];/,
     `import DefaultLayout from '@/components/Layouts/DefaultLayout';`
   );
   content = content.replace(/<Layout>/g, '<DefaultLayout>');
   content = content.replace(/<\/Layout>/g, '</DefaultLayout>');

   await fs.writeFile(filePath, content);
   console.log(`Updated ${file} to use DefaultLayout`);
 }
}

convertToDefaultLayout();