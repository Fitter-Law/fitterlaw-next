import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function no_accessPage() {
 return (
  <DefaultLayout>
    <div dangerouslySetInnerHTML={{ __html: `[dlm_no_access]` }}="">
    </div>
  </DefaultLayout>
);
}