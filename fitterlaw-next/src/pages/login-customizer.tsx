import Layout from '@/components/layouts/page-layout';

export default function login_customizerPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Login Customizer</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=10112; post_author=1; post_date=2023-07-24 17:44:16; post_date_gmt=2023-07-24 22:44:16; post_content=This page is used for Login Customizer plugin. It will not be visible to your readers. Do not delete it.; post_title=Login Customizer; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=login-customizer; to_ping=; pinged=; post_modified=2023-07-24 17:44:16; post_modified_gmt=2023-07-24 22:44:16; post_content_filtered=; post_parent=0; guid=https://fitterlaw.com/login-customizer/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </Layout>
  );
}
