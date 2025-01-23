const fs = require('fs').promises;
const path = require('path');

async function fixPageContent() {
  const pagePath = path.join(process.cwd(), 'src', 'pages', 'about.tsx');
  let content = await fs.readFile(pagePath, 'utf8');

  content = `import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function aboutPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <div dangerouslySetInnerHTML={{ __html: \`${content.split('post_content=')[1].split('; post_title=')[0]}\` }} />
      </div>
    </DefaultLayout>
  );
}`;

  await fs.writeFile(pagePath, content);
}

fixPageContent();