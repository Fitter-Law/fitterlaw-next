import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function subscription_lockedPage() {
 return (
  <DefaultLayout>
    <div dangerouslysetinnerhtml="{{" __html:="" `<p="">[pmpro_membership_locked]<p></p><p>You may request a change in your account status by contacting us:</p><p>Email the Client Services Team at<a href="mailto:client.matters@fitterlaw.com" target="_blank" rel="noreferrer noopener">client.matters@fitterlaw.com.</a></p>` }} /&gt;
    </div>
  </DefaultLayout>
);
}