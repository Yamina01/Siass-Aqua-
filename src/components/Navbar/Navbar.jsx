import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <NavLink
  to="/"
  className="logo"
>
  Siass Aqua
</NavLink>
        {/* Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>

        {/* CTA */}
        <button className="cta-btn"
        onClick={() => navigate("/contact")}>
          Request Quote
        </button>

        {/* Mobile Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;