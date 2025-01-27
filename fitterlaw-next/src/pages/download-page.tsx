import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function download_pagePage() {
 return (
  <DefaultLayout>
    <div dangerouslysetinnerhtml="{{" __html:="" `<p="">[dlm_downloading_page]<p></p><p><strong>Disclaimer:</strong>Pursuant to the<a href="https://fitterlaw.com/about/terms-of-service/">Terms of Servic</a><a href="https://fitterlaw.com/about/terms-of-service/" target="_blank" rel="noreferrer noopener">e</a>of this Website and the<a href="https://fitterlaw.com/account/subscription-terms-of-service/" target="_blank" rel="noreferrer noopener">Subscription Terms of Service</a>that you agreed to, this template is provided "as-is" without any warranties or as legal advice.</p><p><strong>Speaking with an Attorney is Recommended:</strong>Use this document at your own risk.</p><p><strong>No Guarantee:</strong>There is no guarantee that this document meets your jurisdiction's requirements, that this is the correct document for you to use in your situation, and that this is the most up-to-date document based on the latest laws, regulations, or statutes.</p><p><strong>Revisions:</strong>We strive to update our documents as often as possible, but cannot guarantee that it will be latest version for every jurisdiction.</p>` }} /&gt;
    </div>
  </DefaultLayout>
);
}