import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function subscription_lockedPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Locked</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=717; post_author=1; post_date=2020-10-05 05:16:34; post_date_gmt=2020-10-05 10:16:34; post_content=<p>[pmpro_membership_locked]</p>

<!-- wp:paragraph -->
<p>You may request a change in your account status by contacting us:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Email the Client Services Team at <a href="mailto:client.matters@fitterlaw.com" target="_blank" rel="noreferrer noopener">client.matters@fitterlaw.com.</a></p>
<!-- /wp:paragraph -->; post_title=Locked; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=subscription-locked; to_ping=; pinged=; post_modified=2022-10-07 02:01:53; post_modified_gmt=2022-10-07 07:01:53; post_content_filtered=; post_parent=597; guid=https://fitterlaw.com/membership-account/membership-locked/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}
