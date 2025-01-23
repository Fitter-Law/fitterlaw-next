const fs = require('fs').promises;
const path = require('path');

async function updateLayouts() {
 const pagesDir = path.join(process.cwd(), 'src', 'pages');
 const files = await fs.readdir(pagesDir);
 
 for (const file of files) {
   if (!file.endsWith('.tsx')) continue;
   const filePath = path.join(pagesDir, file);
   let content = await fs.readFile(filePath, 'utf8');

   // Determine layout based on folder
   const isPost = file.includes('post') || file.includes('blog');
   const layoutPath = isPost ? 'post-layout' : 'page-layout';

   // Replace DefaultLayout with new layout
   content = content.replace(
     /import DefaultLayout from ['"]@\/components\/layouts\/DefaultLayout['"];/,
     `import Layout from '@/components/layouts/${layoutPath}';`
   );
   content = content.replace(/<DefaultLayout>/g, '<Layout>');
   content = content.replace(/<\/DefaultLayout>/g, '</Layout>');

   await fs.writeFile(filePath, content);
   console.log(`Updated ${file} to use ${layoutPath}`);
 }
}

updateLayouts();