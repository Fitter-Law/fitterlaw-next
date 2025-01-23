import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function insightPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">insight</h1>
       <div dangerouslySetInnerHTML={{ __html: `<h2>
						We are here to help you!					</h2>
						Provide us with some information and see if you qualify for one of our subscription programs.					
					<a>
						Apply Now					</a>
				be prepared` }} />
     </div>
   </DefaultLayout>
 );
}