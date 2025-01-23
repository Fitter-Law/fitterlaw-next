import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function premium_monthlyPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">premium monthly</h1>
       <div dangerouslySetInnerHTML={{ __html: `Thank you for your purchase. This page will be updated soon with updates on your order.` }} />
     </div>
   </DefaultLayout>
 );
}