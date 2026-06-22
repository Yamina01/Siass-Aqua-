import { Helmet } from "react-helmet-async";

import ProjectsHero from "../../components/ProjectsHero/ProjectsHero";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ProjectStatsSection from "../../components/ProjectStatsSection/ProjectStatsSection";
import OurProcessSection from "../../components/OurProcessSection/OurProcessSection";
import CTASection from "../../components/CTASection/CTASection";

const ProjectsPage = () => {
  return (
    <>

      <Helmet>

        <title>
          Our Projects | Siass Aqua
        </title>

        <meta
          name="description"
          content="Explore some of Siass Aqua's successful water treatment and purification projects delivered for homes, hospitals, schools, offices and industries."
        />

        <meta
          name="keywords"
          content="water treatment projects, RO installations, industrial water purification projects, commercial water solutions, Chennai, Tamil Nadu, Siass Aqua"
        />

      </Helmet>

      {/* Hero */}
      <ProjectsHero />

      {/* Featured Projects */}
      <ProjectsSection />

      {/* Statistics */}
      <ProjectStatsSection />

      {/* Working Process */}
      <OurProcessSection />

      {/* Call To Action */}
      <CTASection />

    </>
  );
};

export default ProjectsPage;

