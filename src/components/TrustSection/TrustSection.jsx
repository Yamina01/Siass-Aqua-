import "./TrustSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import {
  FaUsers,
  FaStar,
  FaBolt,
  FaHandshake,
  FaTint,
  FaShieldAlt
} from "react-icons/fa";

const trustItems = [
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description:
      "Skilled professionals with years of industry experience."
  },
  {
    icon: <FaStar />,
    title: "Premium Quality",
    description:
      "Reliable products and trusted water purification solutions."
  },
  {
    icon: <FaBolt />,
    title: "Fast Service",
    description:
      "Quick installation and responsive maintenance support."
  },
  {
    icon: <FaHandshake />,
    title: "Customer First",
    description:
      "Dedicated after-sales service and customer satisfaction."
  },
  {
    icon: <FaTint />,
    title: "Customized Solutions",
    description:
      "Tailored systems for homes, offices and industries."
  },
  {
    icon: <FaShieldAlt />,
    title: "20+ Years Experience",
    description:
      "Serving customers since 2005 with proven expertise."
  }
];

const TrustSection = () => {
  return (
    <section className="trust-section">

      <div className="container">

        <SectionTitle
          subtitle="Why Customers Trust Us"
          title="Reliable Solutions Backed By Experience"
          description="Providing dependable water purification solutions with professional support and quality products."
        />

        <div className="trust-grid">

          {trustItems.map((item, index) => (
            <div
              className="trust-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="trust-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TrustSection;
