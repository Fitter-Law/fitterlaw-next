import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function update_your_profilePage() {
 return (<DefaultLayout><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-4">update your profile</h1><div dangerouslySetInnerHTML={{ __html: `[pmpro_member_profile_edit]` }}=""></div>);
}