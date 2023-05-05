import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Timeline from "./routes/timeline";
import GrowthRate from "./routes/growthrate";
import WorldPercentage from "./routes/worldpercentage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "growthrate",
        element: <GrowthRate />,
      },
      {
        path: "worldpercentage",
        element: <WorldPercentage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);