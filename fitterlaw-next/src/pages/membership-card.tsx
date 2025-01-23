import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function membership_cardPage() {
 return (<DefaultLayout><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-4">membership card</h1><div dangerouslysetinnerhtml="{{" __html:="" `<!--="" wp:shortcode="" --="">[pmpro_membership_card print_size="medium" qr_code="true" qr_data="other"]` }} /&gt;</div>);
}