import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard.jsx";
import ActivityView from "./pages/ActivityView.jsx";
import FeedbackView from "./pages/FeedbackView.jsx";
import WalletView from "./pages/WalletView.jsx";
import OrdersView from "./pages/OrdersView.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/activity" element={<ActivityView />} />
      <Route path="/feedback" element={<FeedbackView />} />
      <Route path="/wallet" element={<WalletView />} />
      <Route path="/orders" element={<OrdersView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
