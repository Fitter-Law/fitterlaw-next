import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function sitewide_sale_2Page() {
 return (
  <DefaultLayout>
    <div dangerouslysetinnerhtml="{{" __html:="" `<!--="" wp:columns="" {"verticalalignment":null}="" --=""><div class="wp-block-columns"><div class="wp-block-column"></div><div class="wp-block-column is-vertically-aligned-center"><h2>Limited Time Offer</h2></div></div>[pmpro_checkout]` }} /&gt;
    </div>
  </DefaultLayout>
);
}