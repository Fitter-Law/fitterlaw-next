import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function _appPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4"> app</h1>
       <div dangerouslySetInnerHTML={{ __html: `` }} />
     </div>
   </DefaultLayout>
 );
}