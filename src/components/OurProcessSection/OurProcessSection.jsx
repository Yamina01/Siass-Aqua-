
import "./OurProcessSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import {
  FaComments,
  FaFlask,
  FaTools,
  FaHeadset,
  FaArrowRight
} from "react-icons/fa";

const processSteps = [
  {
    icon: <FaComments />,
    title: "Consultation",
    description:
      "Understanding your water requirements."
  },
  {
    icon: <FaFlask />,
    title: "Water Analysis",
    description:
      "Analyzing water quality and selecting the right solution."
  },
  {
    icon: <FaTools />,
    title: "Installation",
    description:
      "Professional setup by experienced technicians."
  },
  {
    icon: <FaHeadset />,
    title: "Support & Maintenance",
    description:
      "Dedicated after-sales service and maintenance."
  }
];

const OurProcessSection = () => {
  return (
    <section className="process-section">

      <div className="container">

        <SectionTitle
          subtitle="Our Process"
          title="How We Deliver Reliable Water Solutions"
          description="A simple and efficient process from consultation to ongoing support."
        />

        <div className="process-flow">

          {processSteps.map((step, index) => (
            <div
              className="process-step"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              <div className="process-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index !== processSteps.length - 1 && (
                <div className="process-arrow">
                  <FaArrowRight />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default OurProcessSection;

