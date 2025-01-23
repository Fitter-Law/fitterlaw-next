import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function cancel_subscriptionPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">cancel subscription</h1>
       <div dangerouslySetInnerHTML={{ __html: `[pmpro_cancel]` }} />
     </div>
   </DefaultLayout>
 );
}