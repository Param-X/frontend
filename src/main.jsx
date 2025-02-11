import React from "react";
import ReactDOM from "react-dom/client";
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import TradeYields from "./pages/TradeYields.jsx";
import Positions from "./pages/Positions.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WalletProvider>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/trade-yield" element={<TradeYields />} />
          <Route path="/fixed-income" element={<Positions />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </WalletProvider>
);
