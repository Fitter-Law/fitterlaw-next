import Layout from '@/components/layouts/page-layout';

export default function subscription_invoicePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Invoice</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=602; post_author=1; post_date=2020-05-01 09:33:29; post_date_gmt=2020-05-01 14:33:29; post_content=[pmpro_invoice]; post_title=Invoice; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=subscription-invoice; to_ping=; pinged=; post_modified=2024-09-30 12:01:09; post_modified_gmt=2024-09-30 17:01:09; post_content_filtered=; post_parent=597; guid=https://fitterlaw.com/membership-account/membership-invoice/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </Layout>
  );
}
