import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function sitewide_sale_2Page() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">sitewide sale 2</h1>
       <div dangerouslySetInnerHTML={{ __html: `<!-- wp:columns {"verticalAlignment":null} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:site-logo {"isLink":false,"shouldSyncIcon":false,"align":"center"} /--></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading -->
<h2>Limited Time Offer</h2>
<!-- /wp:heading --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:shortcode -->
[pmpro_checkout]
<!-- /wp:shortcode -->` }} />
     </div>
   </DefaultLayout>
 );
}