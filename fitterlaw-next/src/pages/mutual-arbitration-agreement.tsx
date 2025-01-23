import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function mutual_arbitration_agreementPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">mutual arbitration agreement</h1>
       <div dangerouslySetInnerHTML={{ __html: `<p>[wp_e_signature_sad doc="4"]</p><p><!-- wp:paragraph --></p><p><!-- /wp:paragraph --></p>` }} />
     </div>
   </DefaultLayout>
 );
}