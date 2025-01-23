import Layout from '@/components/layouts/page-layout';

export default function subscription_pricingPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Subscription Pricing</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=603; post_author=1; post_date=2020-05-01 09:33:29; post_date_gmt=2020-05-01 14:33:29; post_content=<!-- wp:shortcode -->
[membership level="0"]<meta http-equiv="refresh" content="0; URL=https://fitterlaw.com/pricing/">[/membership]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[membership][pmpro_levels][/membership]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[membership]<p style="text-align:right;"><a href="https://fitterlaw.com/subscription-account/cancel-subscription/">Cancel my Subscription</a></p></membership>
<!-- /wp:shortcode -->; post_title=Subscription Pricing; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=subscription-pricing; to_ping=; pinged=; post_modified=2023-10-06 10:50:38; post_modified_gmt=2023-10-06 15:50:38; post_content_filtered=; post_parent=597; guid=https://fitterlaw.com/membership-account/membership-levels/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </Layout>
  );
}
