import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function working_on_filePage() {
 return (
  <DefaultLayout>
    <div dangerouslysetinnerhtml="{{" __html:="" `<!--="" wp:shortcode="" --="">[dlm_downloading_page][download_page]` }} /&gt;
    </div>
  </DefaultLayout>
);
}