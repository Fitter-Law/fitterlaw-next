import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function subscription_invoicePage() {
 return (<DefaultLayout><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-4">subscription invoice</h1><div dangerouslySetInnerHTML={{ __html: `[pmpro_invoice]` }}=""></div>);
}