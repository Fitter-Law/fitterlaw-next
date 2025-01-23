import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function no_accessPage() {
 return (<DefaultLayout><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-4">no access</h1><div dangerouslySetInnerHTML={{ __html: `[dlm_no_access]` }}=""></div>);
}