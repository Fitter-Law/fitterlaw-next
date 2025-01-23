import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function consultation_requestPage() {
 return (<DefaultLayout><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-4">consultation request</h1><div dangerouslysetinnerhtml="{{" __html:="" `[membership="" level="1,2,4" show_noaccess="true" ]="" <!--="" calendly="" inline="" widget="" end="" --="">[/membership]` }} /&gt;</div>);
}