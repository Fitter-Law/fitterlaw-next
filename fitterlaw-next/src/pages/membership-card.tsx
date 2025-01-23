import Layout from '@/components/layouts/page-layout';

export default function membership_cardPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Membership Card</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=2909; post_author=1; post_date=2021-03-26 12:34:31; post_date_gmt=2021-03-26 17:34:31; post_content=<!-- wp:shortcode -->
[pmpro_membership_card print_size="medium" qr_code="true" qr_data="other"]
<!-- /wp:shortcode -->; post_title=Membership Card; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=membership-card; to_ping=; pinged=; post_modified=2022-10-07 02:03:16; post_modified_gmt=2022-10-07 07:03:16; post_content_filtered=; post_parent=597; guid=https://fitterlaw.com/?page_id=2909; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}
