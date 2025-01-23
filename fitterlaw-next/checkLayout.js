const fs = require('fs').promises;
const path = require('path');

async function fixBlogPage() {
 const pagePath = path.join(process.cwd(), 'src', 'pages', 'blog', 'page.tsx');
 const content = await fs.readFile(pagePath, 'utf8');
 
 // Fix the string escaping in the content
 const fixedContent = content.replace(
   /<h2>(.*?)<\/h2>\s*<p>(.*?)<\/p>/g,
   (_, h2, p) => `"<h2>${h2}</h2><p>${p}</p>"`
 );

 await fs.writeFile(pagePath, fixedContent);
 console.log('Fixed blog/page.tsx');
}

fixBlogPage();