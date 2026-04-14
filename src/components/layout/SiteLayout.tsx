import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollNavigator from "../ui/ScrollNavigator";
import "../../styles/siteLayout.css";
// import "../../styles/SiteLayout.css";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/presentation", label: "Présentation" },
  { to: "/contact", label: "Contact" },
];

export default function SiteLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="siteLayout">
      <header className="siteHeader">
        <div className="siteHeader__inner">
          <NavLink to="/" className="siteBrand">
            <div className="siteBrand__mark">ZI</div>
            <div className="siteBrand__text">
              <span className="siteBrand__title">ZI MSIC SARL</span>
              <span className="siteBrand__subtitle">
                Solutions IT · Énergie · Services
              </span>
            </div>
          </NavLink>

          <nav className="siteNav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive
                    ? "siteNav__link siteNav__link--active"
                    : "siteNav__link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className={`siteMenuButton ${mobileOpen ? "siteMenuButton--open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`siteMobilePanel ${mobileOpen ? "siteMobilePanel--open" : ""}`}
        >
          <nav className="siteMobileNav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive
                    ? "siteMobileNav__link siteMobileNav__link--active"
                    : "siteMobileNav__link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="siteMain">
        <Outlet />
      </main>

      <ScrollNavigator />
    </div>
  );
}
