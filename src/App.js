import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ResetCss from "./style/ResetCss";
import GlobalStyle from "./style/GlobalStyle";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
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
