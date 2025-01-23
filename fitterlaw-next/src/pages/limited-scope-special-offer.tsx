import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function limited_scope_special_offerPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">limited scope special offer</h1>
       <div dangerouslySetInnerHTML={{ __html: `<!-- wp:shortcode -->
[fluentform id="16"]
<!-- /wp:shortcode -->` }} />
     </div>
   </DefaultLayout>
 );
}