// import { RouterProvider } from "react-router-dom";
// import { router } from "./router";
// import "../styles/globals.css";

// export default function App() {
//   return <RouterProvider router={router} />;
// }

import { useRoutes } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return useRoutes(router);
}
