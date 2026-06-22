
import "./ProjectsHero.css";


const ProjectsHero = () => {
  return (
    <section className="projects-hero">

      <div className="container projects-hero-container">

        <div
          className="projects-hero-content"
          data-aos="fade-up"
        >

          <span className="projects-badge">
            Our Projects
          </span>

          <h1>
            Delivering
            <span className="gradient-text">
              {" "}Reliable Water Solutions{" "}
            </span>
            Across Diverse Sectors
          </h1>

          <p>
            Explore some of our successful projects that have
            helped homes, hospitals, schools, offices and
            industries achieve safe and efficient water treatment.
          </p>

          

        </div>

      </div>

    </section>
  );
};

export default ProjectsHero;

