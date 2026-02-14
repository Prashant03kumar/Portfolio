import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import "./index.css";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext"; // Import Provider

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <App /> },
  { path: "/projects", element: <App /> },
  { path: "/contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
