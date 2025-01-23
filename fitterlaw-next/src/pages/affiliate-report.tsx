import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function affiliate_reportPage() {
 return (
  <DefaultLayout>
    <div dangerouslySetInnerHTML={{ __html: `[pmpro_affiliates_report]` }}="">
    </div>
  </DefaultLayout>
);
}