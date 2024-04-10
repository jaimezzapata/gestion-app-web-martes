import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Panel from "./layouts/components/admin/Panel.jsx";
let router = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/panel",
    element: <Panel />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
