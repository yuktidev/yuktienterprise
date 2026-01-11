import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppToaster from "./components/AppToaster.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SpeedInsights/>
    <App />
    <AppToaster />
  </React.StrictMode>,
);
