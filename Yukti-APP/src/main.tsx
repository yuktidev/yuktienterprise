import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppToaster from "./components/AppToaster.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import AppRouter from "./AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SpeedInsights/>
    <Analytics/>
    {/* <App /> */}
    <AppRouter />
    <AppToaster />
  </React.StrictMode>,
);
