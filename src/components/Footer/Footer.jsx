import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaTint,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";

import { MdWaterDrop } from "react-icons/md";
import { GiWaterRecycling } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">

      <div className="container footer-container">

        {/* Company Info */}

        <div
          className="footer-section"
          data-aos="fade-up"
          data-aos-delay="0"
        >

          <h3>

            <Link to="/" className="footer-logo">

              <FaTint />

              Siass Aqua

            </Link>

          </h3>

          <p>

            Providing reliable water purification solutions for homes,
            hospitals, schools, offices and industries for over 20 years.

          </p>

          <div className="footer-socials">

            <a
              href="https://wa.me/918939618666"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div
          className="footer-section"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/services">Services</Link></li>

            <li><Link to="/projects">Projects</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Services */}

        <div
          className="footer-section"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <h3>Services</h3>

          <ul>

            <li>
              <FaHome />
              Domestic RO Systems
            </li>

            <li>
              <MdWaterDrop />
              Iron Removers
            </li>

            <li>
              <FaBuilding />
              Commercial Solutions
            </li>

            <li>
              <FaIndustry />
              Industrial Purification
            </li>

            <li>
              <GiWaterRecycling />
              Waste Water Management
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div
          className="footer-section"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <h3>Contact</h3>

          <ul>

            <li>

              <FaPhoneAlt />

              <a href="tel:+918939618666">

                +91 8939618666

              </a>

            </li>

            <li>

              <FaEnvelope />

              <a href="mailto:siassaqua@gmail.com">

                siassaqua@gmail.com

              </a>

            </li>

            <li>

              <FaMapMarkerAlt />

              Chennai, Tamil Nadu

            </li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Siass Aqua. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;


