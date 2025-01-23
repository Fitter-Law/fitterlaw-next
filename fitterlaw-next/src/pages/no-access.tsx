import Layout from '@/components/layouts/page-layout';

export default function no_accessPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">No Access</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=766; post_author=1; post_date=2020-10-09 15:22:57; post_date_gmt=2020-10-09 20:22:57; post_content=[dlm_no_access]; post_title=No Access; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=no-access; to_ping=; pinged=; post_modified=2020-12-07 06:38:10; post_modified_gmt=2020-12-07 12:38:10; post_content_filtered=; post_parent=0; guid=https://fitterlaw.com/no-access/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}
