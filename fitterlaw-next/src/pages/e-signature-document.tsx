import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function e_signature_documentPage() {
 return (
  <DefaultLayout>
    <div dangerouslySetInnerHTML={{ __html: `[wp_e_signature]` }}="">
    </div>
  </DefaultLayout>
);
}