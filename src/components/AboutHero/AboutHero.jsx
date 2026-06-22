
import "./AboutHero.css";
import { useNavigate } from "react-router-dom";
import abouthero from "../../assets/images/AboutHero.png"
const AboutHero = () => {
 const navigate = useNavigate();
  return (
    <section className="about-hero">

      <div className="container about-hero-container">

        {/* LEFT */}

        <div
          className="about-hero-left"
          data-aos="fade-right"
        >

          <span className="about-badge">
            About Us
          </span>

          <h1>
            Trusted Water
            <span className="gradient-text">
              {" "}Purification{" "}
            </span>
            Solutions
            <br />
            Backed by 20+ Years
            <br />
            of Experience
          </h1>

          <p>
            Delivering reliable water treatment systems for homes,
            hospitals, schools, offices and industries across
            South India.
          </p>

          <button className="about-btn"
          onClick={() =>navigate("/contact")}>
            Contact Us
          </button>

        </div>

        {/* RIGHT */}

       <div
  className="about-hero-right"
  data-aos="fade-left"
>

  <img src={abouthero}
  alt="SiaasAqua About Image"
/>
</div>
        </div>

   

    </section>
  );
};

export default AboutHero;
