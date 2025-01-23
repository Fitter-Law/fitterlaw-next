import Layout from '@/components/layouts/page-layout';

export default function affiliate_reportPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Referrer Report</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=645; post_author=1; post_date=2020-06-11 02:34:28; post_date_gmt=2020-06-11 07:34:28; post_content=[pmpro_affiliates_report]; post_title=Referrer Report; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=affiliate-report; to_ping=; pinged=; post_modified=2020-12-18 15:43:11; post_modified_gmt=2020-12-18 21:43:11; post_content_filtered=; post_parent=597; guid=https://fitterlaw.com/membership-account/affiliate-report/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}
