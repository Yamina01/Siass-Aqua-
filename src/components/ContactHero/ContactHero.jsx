import "./ContactHero.css";


const ContactHero = () => {
  return (
    <section className="contact-hero">

      <div className="container contact-hero-container">

        <div
          className="contact-hero-content"
          data-aos="fade-up"
        >

          <span className="contact-badge">
            Contact Us
          </span>

          <h1>
            We're Here To Help With
            <span className="gradient-text">
              {" "}All Your Water Treatment Needs
            </span>
          </h1>

          <p>
            Have questions or need a customized solution?
            Our team is ready to assist you with reliable
            water purification systems and professional support.
          </p>

         

        </div>

      </div>

    </section>
  );
};

export default ContactHero;