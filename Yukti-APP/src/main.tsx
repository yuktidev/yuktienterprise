import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppToaster from "./components/AppToaster.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import AppRouter from "./AppRouter";
import { LoaderProvider } from "./Loader/LoaderProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SpeedInsights/>
    <Analytics/>
    <LoaderProvider>
      <AppRouter />
      <AppToaster />
    </LoaderProvider>
  </React.StrictMode>,
);
