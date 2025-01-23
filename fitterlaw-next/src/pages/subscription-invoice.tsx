import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function subscription_invoicePage() {
 return (
  <DefaultLayout>
    <div dangerouslySetInnerHTML={{ __html: `[pmpro_invoice]` }}="">
    </div>
  </DefaultLayout>
);
}