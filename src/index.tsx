import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import UserProvider from "./contextAPI/userProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </UserProvider>
  </React.StrictMode>
);
