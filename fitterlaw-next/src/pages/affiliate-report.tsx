import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function affiliate_reportPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">affiliate report</h1>
       <div dangerouslySetInnerHTML={{ __html: `[pmpro_affiliates_report]` }} />
     </div>
   </DefaultLayout>
 );
}