import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function subscription_pricingPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">subscription pricing</h1>
       <div dangerouslySetInnerHTML={{ __html: `<!-- wp:shortcode -->
[membership level="0"]<meta http-equiv="refresh" content="0; URL=https://fitterlaw.com/pricing/">[/membership]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[membership][pmpro_levels][/membership]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[membership]<p style="text-align:right;"><a href="https://fitterlaw.com/subscription-account/cancel-subscription/">Cancel my Subscription</a></p></membership>
<!-- /wp:shortcode -->` }} />
     </div>
   </DefaultLayout>
 );
}