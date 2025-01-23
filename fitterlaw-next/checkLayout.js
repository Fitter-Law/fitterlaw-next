const fs = require('fs').promises;
const path = require('path');

async function fixAllPages() {
 const pagesDir = path.join(process.cwd(), 'src', 'pages');
 const files = await fs.readdir(pagesDir);

 for (const file of files) {
   if (!file.endsWith('.tsx')) continue;
   const filePath = path.join(pagesDir, file);
   let content = await fs.readFile(filePath, 'utf8');

   // Extract content and filename for the page
   const fileName = file.replace('.tsx', '');
   const pageName = fileName.replace(/-/g, '_');
   const htmlContent = content.includes('post_content=') ? 
     content.split('post_content=')[1].split('; post_title=')[0] :
     '';

   // Create new page content
   content = `import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function ${pageName}Page() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">${pageName.replace(/_/g, ' ')}</h1>
       <div dangerouslySetInnerHTML={{ __html: \`${htmlContent}\` }} />
     </div>
   </DefaultLayout>
 );
}`;

   await fs.writeFile(filePath, content);
   console.log(`Fixed ${file}`);
 }
}

fixAllPages();