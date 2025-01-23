import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function july_2021Page() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">july 2021</h1>
       <div dangerouslySetInnerHTML={{ __html: `<h1>Special Limited Time Offer</h1>		
			 Days Hours Minutes Seconds		
		THIS OFFER IS ON NOW!		
		<p>[pmpro_sws]</p>
<!-- wp:shortcode /-->` }} />
     </div>
   </DefaultLayout>
 );
}