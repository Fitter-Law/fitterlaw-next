import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function copyright_claim_formPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">copyright claim form</h1>
       <div dangerouslySetInnerHTML={{ __html: `[fluentform type="conversational" id="35"]` }} />
     </div>
   </DefaultLayout>
 );
}