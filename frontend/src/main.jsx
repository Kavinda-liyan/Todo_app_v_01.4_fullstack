import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "../contexts/ThemeContext";
import { TodoContextProvider } from "../contexts/TodoContext.jsx";
import { AuthContextProvider } from "../contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
);
