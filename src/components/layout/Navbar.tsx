import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbarInner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brandMark">ZI</span>
          <span className="brandText">
            <strong>ZI MSIC SARL</strong>
            <small>Multi Services d’Industrie et de Commerce</small>
          </span>
        </Link>

        <nav className="navDesktop">
          <NavLink to="/" end className="navLink">
            Accueil
          </NavLink>
          <NavLink to="/about" className="navLink">
            À propos
          </NavLink>
          <NavLink to="/services" className="navLink">
            Services
          </NavLink>
          <NavLink to="/contact" className="navLink navCta">
            Contact
          </NavLink>
          <Link to="/presentation">Présentation</Link>
        </nav>

        <button
          className="menuButton"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="mobileMenu">
          <NavLink
            to="/"
            end
            className="mobileNavLink"
            onClick={() => setOpen(false)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className="mobileNavLink"
            onClick={() => setOpen(false)}
          >
            À propos
          </NavLink>
          <NavLink
            to="/services"
            className="mobileNavLink"
            onClick={() => setOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="mobileNavLink"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
