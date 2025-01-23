import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function subscription_confirmationPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">subscription confirmation</h1>
       <div dangerouslySetInnerHTML={{ __html: `<p>[pmpro_confirmation]</p>

<!-- wp:separator {"align":"full","className":"is-style-wide"} -->
<hr class="wp-block-separator alignfull has-alpha-channel-opacity is-style-wide"/>
<!-- /wp:separator -->` }} />
     </div>
   </DefaultLayout>
 );
}