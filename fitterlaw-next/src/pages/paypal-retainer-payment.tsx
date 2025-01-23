import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function paypal_retainer_paymentPage() {
 return (
   <DefaultLayout>
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">paypal retainer payment</h1>
       <div dangerouslySetInnerHTML={{ __html: `<label for="description">Attorney Retainer Reference </label><input type="text" name="descriptionInput" id="description" maxlength="127" value="Pre-qualify">
      <p id="descriptionError" style="visibility: hidden; color:red; text-align: center;">Please enter a description</p>
    <label for="amount">Amount </label><input name="amountInput" type="number" id="amount" value="2000"> USD
      <p id="priceLabelError" style="visibility: hidden; color:red; text-align: center;">Please enter a price</p>
    <label for="invoiceid"> </label><input name="invoiceid" maxlength="127" type="text" id="invoiceid" value="">
      <p id="invoiceidError" style="visibility: hidden; color:red; text-align: center;">Please enter an Invoice ID</p>` }} />
     </div>
   </DefaultLayout>
 );
}