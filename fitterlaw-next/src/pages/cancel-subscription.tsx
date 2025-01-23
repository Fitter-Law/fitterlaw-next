import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function cancel_subscriptionPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cancel Subscription</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=599; post_author=1; post_date=2020-05-01 09:33:29; post_date_gmt=2020-05-01 14:33:29; post_content=[pmpro_cancel]; post_title=Cancel Subscription; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=cancel-subscription; to_ping=; pinged=; post_modified=2022-10-07 02:00:23; post_modified_gmt=2022-10-07 07:00:23; post_content_filtered=; post_parent=597; guid=https://fitterlaw.com/membership-account/membership-cancel/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}
