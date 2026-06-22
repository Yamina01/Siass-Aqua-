
import "./ContactFormSection.css";
import { useState } from "react";

import {
  FaUser,
  FaPhoneAlt,
  FaPaperPlane
} from "react-icons/fa";

const ContactFormSection = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const whatsappMessage = `Hello, I would like to request a quote.

Name: ${name}

Phone: ${phone}

Message:
${message}`;

    window.open(
      `https://wa.me/918939618666?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    setName("");
    setPhone("");
    setMessage("");

  };

  return (
    <section className="contact-form-section">

      <div className="container contact-form-container">

        {/* FORM */}

        <div
          className="contact-form-card"
          data-aos="fade-right"
        >

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="input-group">

              <FaUser />

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>

            {/* PHONE */}

            <div className="input-group">

              <FaPhoneAlt />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

            </div>

            {/* MESSAGE */}

            <div className="input-group textarea-group">

              <textarea
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="contact-submit-btn"
            >

              Send via WhatsApp

              <FaPaperPlane />

            </button>

          </form>

        </div>

        {/* MAP */}

        <div
          className="contact-map"
          data-aos="fade-left"
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3336145162616!2d80.14969669999999!3d13.0780306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261361c309511%3A0xa4fde9a58e75d7e7!2sSIASS%20Aqua!5e0!3m2!1sen!2sin!4v1781583727820!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Siass Aqua Location"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default ContactFormSection;

