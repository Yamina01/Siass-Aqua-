import "./ProjectsSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import project1 from "../../assets/images/IMG-20150315-WA0000.jpg"
import project2 from "../../assets/images/6000 mineral water plant.JPG"
import project3 from "../../assets/images/1000 lph R O.jpg"
const projects = [
  {
    title: "Residential RO Installation",
    description:
      "Providing clean and safe drinking water solutions for homes.",
    image: project1,
  },
  {
    title: "Mineral Water Plant",
    description:
      "Reliable water treatment solutions for commercial and healthcare facilities.",
    image: project2,
  },
  {
    title: "Industrial Water Plant",
    description:
      "Large-scale purification systems for factories and industries.",
    image: project3,
  },
];
const ProjectsSection = () => {
 
  return (
    <section className="projects">
      <div className="container">

        <SectionTitle
          subtitle="Our Projects"
          title="Solutions We've Delivered"
          description="Trusted by homes, hospitals, schools and industries for over 20 years."
        />

        <div className="projects-list">

          {projects.map((project, index) => (
            <div
              className={`project-item ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-content">

            

                <h3>{project.title}</h3>

                <p>{project.description}</p>

             

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;

