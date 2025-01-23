import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function cancel_subscriptionPage() {
 return (
  <DefaultLayout>
    <div dangerouslySetInnerHTML={{ __html: `[pmpro_cancel]` }}="">
    </div>
  </DefaultLayout>
);
}