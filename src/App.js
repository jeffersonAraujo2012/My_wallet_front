import React, { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ResetCss from "./style/ResetCss";
import GlobalStyle from "./style/GlobalStyle";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import NewCashIn from "./pages/NewCashIn";
import NewCashOut from "./pages/NewCashOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/cadastro",
    element: <SignupPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/nova-entrada",
    element: <NewCashIn />,
  },
  {
    path: "/nova-saida",
    element: <NewCashOut />,
  },
]);

export const AuthContext = createContext();

export default function App() {
  const [session, setSession] = useState();

  useEffect(() => {
    const localSession = localStorage.getItem("session");
    if (localSession) setSession(JSON.parse(localSession));
  }, []);

  return (
    <React.StrictMode>
      <ResetCss />
      <GlobalStyle />
      <AuthContext.Provider value={[session, setSession]}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </React.StrictMode>
  );
}
