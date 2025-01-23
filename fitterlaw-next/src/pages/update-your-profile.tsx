import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function update_your_profilePage() {
 return (
  <DefaultLayout>
    <div dangerouslySetInnerHTML={{ __html: `[pmpro_member_profile_edit]` }}="">
    </div>
  </DefaultLayout>
);
}