
import "./Hero.css";
import {
  FaTint,
  FaIndustry,
  FaRecycle
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";



const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">

      {/* Blur Circles */}
      <div className="blur-circle blur1"></div>
      <div className="blur-circle blur2"></div>
      <div className="blur-circle blur3"></div>

      <div className="container hero-container">

        {/* LEFT */}
        <div className="hero-left" data-aos="fade-right" >

          <div className="hero-badge">
            💧 Trusted Water Solutions Since 2005
          </div>

          <h1>
            Trusted Water
            <span className="gradient-text"> Purification </span>
            Solutions
            <br />
            for Homes, Hospitals &
            <br />
            Industries
          </h1>

          <p>
            20+ years of experience delivering reliable water treatment
            and purification systems across South India.
          </p>

          <div className="hero-buttons">

           <button className="primary-btn" onClick={() => navigate("/contact")} >Request Quote </button>

           <button className="secondary-btn" onClick={() => window.open( "https://wa.me/918939618666", "_blank" ) } >
              WhatsApp Us
            </button>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>20+</h3>
              <p>Years</p>
            </div>

            <div className="stat-card">
              <h3>500+</h3>
              <p>Installations</p>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right" data-aos="fade-left">

          <div className="glass-card card1" onClick={() => navigate("/services")} >
            <h3>
              <FaTint className="icon" />
              Domestic RO
            </h3>

            <p>Pure water for homes</p>
          </div>

         <div className="glass-card card2" onClick={() => navigate("/services")} >
            <h3>
              <FaIndustry className="icon" />
              Industrial Solutions
            </h3>

            <p>High-capacity purification systems</p>
          </div>

         <div className="glass-card card" onClick={() => navigate("/services")} >
            <h3>
              <FaRecycle className="icon" />
              Waste Water Management
            </h3>

            <p>Sustainable treatment solutions</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;

