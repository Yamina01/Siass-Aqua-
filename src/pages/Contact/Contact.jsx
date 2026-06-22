import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactHero from "../../components/ContactHero/ContactHero";
import ContactInfoSection from "../../components/ContactInfoSection/ContactInfoSection";
import ContactFormSection from "../../components/ContactFormSection/ContactFormSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import CTASection from "../../components/CTASection/CTASection";

const ContactPage = () => {

  const location = useLocation();

  useEffect(() => {

    if (location.state?.scrollToForm) {

      const formSection = document.getElementById(
        "request-quote"
      );

      if (formSection) {

        formSection.scrollIntoView({
          behavior: "smooth"
        });

      }

    }

  }, [location]);

  return (
    <>

      <Helmet>

        <title>
          Contact Us | Siass Aqua
        </title>

        <meta
          name="description"
          content="Contact Siass Aqua for reliable water purification and treatment solutions. Get in touch for domestic, commercial and industrial water systems."
        />

        <meta
          name="keywords"
          content="contact Siass Aqua, water treatment company, RO systems, water purification Chennai, industrial water solutions, Tamil Nadu"
        />

      </Helmet>

      <ContactHero />

      <ContactInfoSection />

      <ContactFormSection />

      <FAQSection />

      <CTASection />

    </>
  );
};

export default ContactPage;

