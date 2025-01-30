import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoutes from "./routes";
import { ThemeProvider } from "./contexts/useTheme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  </StrictMode>
);
