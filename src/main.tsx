import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRoutePaths } from "./appRoutePaths";
import ArtWorkPage from "./Pages/ArtWorkPage";
import AteliePage from "./Pages/AteliePage";
import ContactsPage from "./Pages/ContactsPage";
import ExhibitionsPage from "./Pages/ExhibitionsPage";
import LifePage from "./Pages/LifePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: AppRoutePaths.ArtWork,
        element: <ArtWorkPage />,
      },
      {
        path: AppRoutePaths.Exhibitions,
        element: <ExhibitionsPage />,
      },
      {
        path: AppRoutePaths.Atelie,
        element: <AteliePage />,
      },
      {
        path: AppRoutePaths.Life,
        element: <LifePage />,
      },
      {
        path: AppRoutePaths.Contacts,
        element: <ContactsPage />,
      },
    ],
  },
]);
// if (process.env.NODE_ENV === 'development') {
//   if (window.location.pathname === '/login') {
//     window.location.pathname = '/login/'
//   }
//   const { worker } = require('./mocks/browser')
//   await worker.start({
//     serviceWorker: {
//       url: '/login/mockServiceWorker.js',
//     },
//   })
// }
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
