import "./CTASection.css";
import { useNavigate } from "react-router-dom";

const CTASection = () => {

  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/918939618666",
      "_blank"
    );
  };

  return (
    <section className="cta" data-aos="zoom-in">

      <div className="container">

        <div className="cta-box">

          <h2>
            Need a Reliable Water Solution?
          </h2>

          <p>
            From homes to industries, we provide trusted water purification
            systems backed by 20+ years of experience.
          </p>

          <div className="cta-features">

            <div className="cta-feature">
              ✓ Expert Team
            </div>

            <div className="cta-feature">
              ✓ Fast Installation
            </div>

            <div className="cta-feature">
              ✓ 24/7 Support
            </div>

          </div>

          <div className="cta-buttons">

            <button
              className="cta-primary-btn"
             onClick={() => navigate("/contact", { state: { scrollToForm: true } }) }
            >
              Request Quote
            </button>

            <button
              className="cta-secondary-btn"
              onClick={handleWhatsApp}
            >
              WhatsApp Us
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;
