import "./ContactInfoSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    detail: "+91 8939618666"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    detail: "siassaqua@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    detail: "Chennai, Tamil Nadu"
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    detail: "Mon - Sat | 9 AM - 6 PM"
  }
];

const ContactInfoSection = () => {
  return (
    <section className="contact-info">

      <div className="container">

        <SectionTitle
          subtitle="Get In Touch"
          title="Reach Out To Us"
          description="We're always ready to help with your water purification needs."
        />

        <div className="contact-info-grid">

          {contactInfo.map((item, index) => (
            <div
              className="contact-info-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              <div className="contact-info-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.detail}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactInfoSection;

