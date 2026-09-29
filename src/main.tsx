import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
// Drop the pre-hydration brand overlay once React has mounted
document.documentElement.classList.add("app-ready");
