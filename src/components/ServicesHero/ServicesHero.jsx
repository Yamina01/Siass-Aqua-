import "./ServicesHero.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ServicesHero = () => {
    const navigate =useNavigate();
  return (
    <section className="services-hero">

      <div className="container services-hero-container">

        <div
          className="services-hero-content"
          data-aos="fade-up"
        >

          <span className="services-badge">
            Our Services
          </span>

          <h1>
            Reliable
            <span className="gradient-text">
              {" "}Water Solutions{" "}
            </span>
            Tailored For Every Need
          </h1>

          <p>
            From residential RO systems to industrial water
            treatment plants, we provide reliable solutions
            backed by expert installation and support.
          </p>

          <button className="services-btn"
          onClick={() => navigate("/contact")}>

            Request Quote

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
};

export default ServicesHero;