import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function essentialPage() {
 return (
  <DefaultLayout>
    <div dangerouslySetInnerHTML={{ __html: `thank="" you="" for="" your="" purchase.="" this="" page="" will="" be="" updated="" soon="" with="" updates="" on="" order.` }}="">
    </div>
  </DefaultLayout>
);
}