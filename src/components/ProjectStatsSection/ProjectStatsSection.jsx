
import "./ProjectStatsSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import {
  FaTools,
  FaAward,
  FaSmile,
  FaHeadset
} from "react-icons/fa";

const stats = [
  {
    icon: <FaTools />,
    number: "500+",
    title: "Installations"
  },
  {
    icon: <FaAward />,
    number: "20+",
    title: "Years Experience"
  },
  {
    icon: <FaSmile />,
    number: "100%",
    title: "Customer Satisfaction"
  },
  {
    icon: <FaHeadset />,
    number: "24/7",
    title: "Support"
  }
];

const ProjectStatsSection = () => {
  return (
    <section className="project-stats">

      <div className="container">

        <SectionTitle
          subtitle="Our Achievements"
          title="Numbers That Reflect Our Success"
          description="For over two decades, we've delivered reliable water solutions across residential, commercial and industrial sectors."
        />

        <div className="project-stats-grid">

          {stats.map((stat, index) => (
            <div
              className="project-stat-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              <div className="project-stat-icon">
                {stat.icon}
              </div>

              <h3>{stat.number}</h3>

              <p>{stat.title}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProjectStatsSection;

