import Layout from '@/components/layouts/page-layout';

export default function subscriberPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Subscriber</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=1184; post_author=1; post_date=2020-11-13 02:57:48; post_date_gmt=2020-11-13 08:57:48; post_content=; post_title=Subscriber; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=subscriber; to_ping=; pinged=; post_modified=2022-10-07 02:03:53; post_modified_gmt=2022-10-07 07:03:53; post_content_filtered=; post_parent=597; guid=https://fitterlaw.com/?page_id=1184; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}
