﻿import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function essentialPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Essential</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=830; post_author=1; post_date=2020-10-11 00:46:55; post_date_gmt=2020-10-11 05:46:55; post_content=Thank you for your purchase. This page will be updated soon with updates on your order.; post_title=Essential; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=essential; to_ping=; pinged=; post_modified=2020-12-18 15:44:07; post_modified_gmt=2020-12-18 21:44:07; post_content_filtered=; post_parent=729; guid=https://fitterlaw.com/jawadfittergmail-com/essential/; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}