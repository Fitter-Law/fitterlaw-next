import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function insightPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Insight</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=1646; post_author=1; post_date=2020-12-07 05:08:33; post_date_gmt=2020-12-07 11:08:33; post_content=<h2>
						We are here to help you!					</h2>
						Provide us with some information and see if you qualify for one of our subscription programs.					
					<a>
						Apply Now					</a>
				be prepared; post_title=Insight; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=insight; to_ping=; pinged=; post_modified=2024-12-08 19:19:12; post_modified_gmt=2024-12-09 01:19:12; post_content_filtered=; post_parent=0; guid=https://fitterlaw.com/?page_id=1646; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}
