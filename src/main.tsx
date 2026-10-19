import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
// app-ready is set by AppReadyGate after first paint (avoids FOUC / "Loading page" flash)
