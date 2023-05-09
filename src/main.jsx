import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import GrowthRate from "./routes/GrowthRate";
import Timeline from "./routes/Timeline";
import WorldPercentage from "./routes/WorldPercentage";

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