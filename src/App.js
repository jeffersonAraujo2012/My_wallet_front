import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ResetCss from "./style/ResetCss";
import GlobalStyle from "./style/GlobalStyle";

import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <ResetCss />
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
