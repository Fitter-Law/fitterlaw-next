import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function consultation_requestPage() {
 return (
  <DefaultLayout>
    <div dangerouslysetinnerhtml="{{" __html:="" `[membership="" level="1,2,4" show_noaccess="true" ]="" <!--="" calendly="" inline="" widget="" end="" --="">[/membership]` }} /&gt;
    </div>
  </DefaultLayout>
);
}