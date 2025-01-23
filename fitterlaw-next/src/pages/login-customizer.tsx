import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function login_customizerPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">login customizer</h1>
       <div dangerouslySetInnerHTML={{ __html: `This page is used for Login Customizer plugin. It will not be visible to your readers. Do not delete it.` }} />
     </div>
   </DefaultLayout>
 );
}