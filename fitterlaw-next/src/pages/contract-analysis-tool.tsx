import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function contract_analysis_toolPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">contract analysis tool</h1>
       <div dangerouslySetInnerHTML={{ __html: `<h2>Contract Analysis Tool</h2>				
					<a href="https://fitterlaw.com/subscription/legal-guides/understanding-corporations/">
									Learn About Corporations<br>(Click Here)
					</a>
									<h2>
						Talk to an Attorney					</h2>
						Get a consultation on starting your Corporation and get legal documents specific to your needs					
					<a href="https://fitterlaw.com/appointments/">
						Request Appointment					</a>
				Need Help?
					<object data="https://analyze.fitterlaw.com/contract-review.php"
width="100%"
height="800px"
type="text/html">
    Browser Does Not Support This Tool
</object>
									<h2>
						Talk to an Attorney					</h2>
						Get a consultation on starting your Corporation and get legal documents specific to your needs					
					<a href="https://fitterlaw.com/appointments/">
						Request Appointment					</a>
				Need Help?` }} />
     </div>
   </DefaultLayout>
 );
}