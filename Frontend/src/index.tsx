import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/tailwind.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
