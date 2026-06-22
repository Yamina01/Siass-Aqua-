
import "./IndustriesSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";

import {
  FaHome,
  FaHospital,
  FaSchool,
  FaBuilding,
  FaStore,
  FaIndustry
} from "react-icons/fa";

const industries = [
  {
    icon: <FaHome />,
    title: "Homes",
    description: "Clean and safe water solutions for households."
  },
  {
    icon: <FaHospital />,
    title: "Hospitals",
    description: "Reliable purification systems for healthcare facilities."
  },
  {
    icon: <FaSchool />,
    title: "Schools",
    description: "Ensuring healthy drinking water for students."
  },
  {
    icon: <FaBuilding />,
    title: "Offices",
    description: "Water solutions tailored for workplaces."
  },
  {
    icon: <FaStore />,
    title: "Shops",
    description: "Compact and efficient systems for commercial spaces."
  },
  {
    icon: <FaIndustry />,
    title: "Factories",
    description: "Industrial-grade purification and treatment systems."
  }
];

const IndustriesSection = () => {
  return (
    <section className="industries">
      <div className="container">

        <SectionTitle
          subtitle="Industries Served"
          title="Trusted Across Diverse Sectors"
          description="Providing customized water treatment solutions for residential, commercial and industrial needs."
        />

        <div className="industries-grid">

          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Card
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;

