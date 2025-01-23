import Layout from '@/components/layouts/page-layout';

export default function paypal_retainer_paymentPage() {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">PayPal Retainer Payment</h1>
        <div dangerouslySetInnerHTML={{ __html: $(@{ID=2727; post_author=1; post_date=2021-03-08 15:32:23; post_date_gmt=2021-03-08 21:32:23; post_content=<label for="description">Attorney Retainer Reference </label><input type="text" name="descriptionInput" id="description" maxlength="127" value="Pre-qualify">
      <p id="descriptionError" style="visibility: hidden; color:red; text-align: center;">Please enter a description</p>
    <label for="amount">Amount </label><input name="amountInput" type="number" id="amount" value="2000"> USD
      <p id="priceLabelError" style="visibility: hidden; color:red; text-align: center;">Please enter a price</p>
    <label for="invoiceid"> </label><input name="invoiceid" maxlength="127" type="text" id="invoiceid" value="">
      <p id="invoiceidError" style="visibility: hidden; color:red; text-align: center;">Please enter an Invoice ID</p>; post_title=PayPal Retainer Payment; post_excerpt=; post_status=publish; comment_status=closed; ping_status=closed; post_password=; post_name=paypal-retainer-payment; to_ping=; pinged=; post_modified=2021-03-10 21:52:45; post_modified_gmt=2021-03-11 03:52:45; post_content_filtered=; post_parent=0; guid=https://fitterlaw.com/?page_id=2727; menu_order=0; post_type=page; post_mime_type=; comment_count=0}.post_content -replace "'", "\'") }} />
      </div>
    </DefaultLayout>
  );
}
