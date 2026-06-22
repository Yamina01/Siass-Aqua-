
import "./MissionVisionSection.css";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVisionSection = () => {
  return (
    <section className="mission-vision">

      <div className="container">

        <div className="mission-vision-grid">

          {/* Mission */}

          <div
            className="mission-card"
            data-aos="fade-right"
          >

            <div className="mission-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To provide safe, reliable and innovative
              water purification solutions that improve
              the quality of life for homes, businesses
              and industries.
            </p>

          </div>

          {/* Vision */}

          <div
            className="vision-card"
            data-aos="fade-left"
          >

            <div className="vision-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted leader in water treatment,
              delivering sustainable solutions and ensuring
              access to clean water for future generations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVisionSection;

