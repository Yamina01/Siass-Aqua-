
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";
import "./ServiceSection.css";

import {
  FaHome,
  FaBuilding,
  FaIndustry
} from "react-icons/fa";

import { MdWaterDrop } from "react-icons/md";

import { GiWaterRecycling } from "react-icons/gi";

const services = [
  {
    icon: <FaHome />,
    title: "Domestic RO Systems",
    description:
      "Reliable purification systems for homes and apartments."
  },
  {
    icon: <MdWaterDrop />,
    title: "Iron Removal Systems",
    description:
      "Efficient solutions for removing excess iron from water."
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Solutions",
    description:
      "Water treatment systems for offices and businesses."
  },
  {
    icon: <FaIndustry />,
    title: "Industrial Purification",
    description:
      "High-capacity purification systems for factories and industries."
  },
  {
    icon: <GiWaterRecycling />,
    title: "Waste Water Management",
    description:
      "Sustainable water treatment and recycling solutions."
  }
];

const ServiceSection = () => {
  return (
    <section className="services">
      <div className="container">

        <SectionTitle
          subtitle="Our Services"
          title="Water Purification Solutions We Offer"
          description="Providing reliable water treatment solutions for residential and industrial needs."
        />

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServiceSection;

