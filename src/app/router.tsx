// import { createBrowserRouter } from "react-router-dom";
// import SiteLayout from "../components/layout/SiteLayout";
// // import Home from "../pages/Home";
// import Home from "../components/pages/Home";
// // import About from "../pages/About";
// import About from "../components/pages/About";
// // import Services from "../pages/Services";
// import Services from "../components/pages/Services";
// // import Contact from "../pages/Contact";
// import Contact from "../components/pages/Contact";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SiteLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "services", element: <Services /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

import type { RouteObject } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import Contact from "../components/pages/Contact";
// import NotFound from "../components/pages/NotFound";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
];
