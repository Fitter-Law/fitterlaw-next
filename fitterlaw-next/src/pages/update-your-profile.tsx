import Layout from '@/components/layouts/page-layout';

export default function update_your_profilePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Update Your Profile</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=634; post_author=1; post_date=2020-05-14 05:12:24; post_date_gmt=2020-05-14 10:12:24; post_content=[pmpro_member_profile_edit]; post_title=Update Your Profile; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=update-your-profile; to_ping=; pinged=; post_modified=2023-08-14 23:58:49; post_modified_gmt=2023-08-15 04:58:49; post_content_filtered=; post_parent=597; guid=https://fitterlaw.com/membership-account/your-profile/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </Layout>
  );
}
