import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function subscription_lockedPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">subscription locked</h1>
       <div dangerouslySetInnerHTML={{ __html: `<p>[pmpro_membership_locked]</p>

<!-- wp:paragraph -->
<p>You may request a change in your account status by contacting us:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Email the Client Services Team at <a href="mailto:client.matters@fitterlaw.com" target="_blank" rel="noreferrer noopener">client.matters@fitterlaw.com.</a></p>
<!-- /wp:paragraph -->` }} />
     </div>
   </DefaultLayout>
 );
}