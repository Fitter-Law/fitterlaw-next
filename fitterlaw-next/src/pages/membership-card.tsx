import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function membership_cardPage() {
 return (
  <DefaultLayout>
    <div dangerouslysetinnerhtml="{{" __html:="" `<!--="" wp:shortcode="" --="">[pmpro_membership_card print_size="medium" qr_code="true" qr_data="other"]` }} /&gt;
    </div>
  </DefaultLayout>
);
}