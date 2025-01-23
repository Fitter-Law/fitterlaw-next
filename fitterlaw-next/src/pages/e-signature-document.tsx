import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function e_signature_documentPage() {
 return (<DefaultLayout><div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold mb-4">e signature document</h1><div dangerouslySetInnerHTML={{ __html: `[wp_e_signature]` }}=""></div>);
}