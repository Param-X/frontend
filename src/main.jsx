import React from "react";
import ReactDOM from "react-dom/client";
import {WalletProvider} from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TradeYeilds from "./pages/TradeYeilds.jsx";
import Positions from "./pages/Positions.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trade-yeild",
    element: <TradeYeilds />,
  },
  {
    path: "/fixed-income",
    element: <Positions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <WalletProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </WalletProvider>
);
