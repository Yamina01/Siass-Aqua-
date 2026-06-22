import "./FAQSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, our experienced team provides professional installation for all water purification systems."
  },
  {
    question: "Do you offer maintenance and AMC support?",
    answer:
      "Yes, we provide regular maintenance and Annual Maintenance Contracts to ensure smooth operation."
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve homes, hospitals, schools, offices and industries across South India."
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can contact us through phone, email or the contact form and our team will get back to you."
  }
];

const FAQSection = () => {
  return (
    <section className="faq-section">

      <div className="container">

        <SectionTitle
          subtitle="Frequently Asked Questions"
          title="Answers To Common Questions"
          description="Everything you need to know about our products and services."
        />

        <div className="faq-container">

          {faqs.map((faq, index) => (
            <div
              className="faq-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="faq-question">

                <h3>{faq.question}</h3>

                <FaChevronDown />

              </div>

              <p>{faq.answer}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQSection;

