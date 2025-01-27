import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function contact_usPage() {
 return (
  <DefaultLayout>
    <div dangerouslysetinnerhtml="{{" __html:="" `<h1="">Get in Touch<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Fitter%20Law%2C%20LLC%2C%20Chicago%2C%20IL&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="Fitter Law, LLC, Chicago, IL" aria-label="Fitter Law, LLC, Chicago, IL"></iframe><h6>ADDRESS</h6><p style="text-align: center;"><strong><a style="color: #008000;" href="https://g.page/fitter-law?fitter-law-contact-page" target="_blank" rel="noopener">150 S. Wacker Drive<br>Suite 2400</a></strong><br><strong><a style="color: #008000;" href="https://g.page/fitter-law?fitter-law-contact-page" target="_blank" rel="noopener">Chicago, IL 60606</a></strong></p><h6>HOURS</h6><p><strong><a style="color: #008000;" href="https://fitterlaw.com/appointments/">7:00 AM - 10:00 PM</a></strong><br><strong><a style="color: #008000;" href="https://fitterlaw.com/appointments/">Monday - Friday</a></strong></p><h6>PHONE</h6><p style="text-align: center;"><strong><a style="color: #008000;" href="tel:3127411073">(312) 741-1073</a></strong></p><h2>Contact Us</h2>[fluentform id="4"]` }} /&gt;
    </div>
  </DefaultLayout>
);
}