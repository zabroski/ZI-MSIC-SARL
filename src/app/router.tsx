// import type { RouteObject } from "react-router-dom";
// import SiteLayout from "../components/layout/SiteLayout";
// import Home from "../components/pages/Home";
// import About from "../components/pages/About";
// import Services from "../components/pages/Services";
// import Contact from "../components/pages/Contact";
// import Presentation from "../components/pages/Presentation";
// export const router: RouteObject[] = [
//   {
//     path: "/",
//     element: <SiteLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "services", element: <Services /> },
//       { path: "contact", element: <Contact /> },
//       {
//         path: "/presentation",
//         element: <Presentation />,
//       },
//     ],
//   },
// ];

import type { RouteObject } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import Contact from "../components/pages/Contact";
import Presentation from "../components/pages/Presentation";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "presentation", element: <Presentation /> }, // ✅ FIXED
    ],
  },
];
