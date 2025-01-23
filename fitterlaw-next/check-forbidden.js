const fs = require('fs').promises;
const path = require('path');

async function checkFiles() {
 const rootDir = process.cwd();
 
 // Files/folders that shouldn't exist
 const forbidden = [
   'src/pages/api', // if using app router
   'app/api/hello.ts',
   '.next/cache',
   'src/components/layouts', // should be Layouts
   'pages', // if using src/pages
   'app/page.tsx', // if using pages router
 ];

 for (const item of forbidden) {
   const itemPath = path.join(rootDir, item);
   try {
     await fs.access(itemPath);
     console.log(`❌ Should remove: ${item}`);
   } catch {
     console.log(`✅ Not found (good): ${item}`);
   }
 }
}

checkFiles();