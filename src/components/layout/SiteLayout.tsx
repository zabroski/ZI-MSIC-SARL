// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function SiteLayout() {
//   return (
//     <div className="siteShell">
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }

import { Outlet, Link } from "react-router-dom";

export default function SiteLayout() {
  return (
    <div>
      <nav style={{ padding: "20px", borderBottom: "1px solid #333" }}>
        <Link to="/" style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: 12 }}>
          About
        </Link>
        <Link to="/services" style={{ marginRight: 12 }}>
          Services
        </Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <main style={{ padding: "40px" }}>
        <Outlet />
      </main>
    </div>
  );
}
