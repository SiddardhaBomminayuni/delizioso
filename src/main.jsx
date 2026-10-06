import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ReservationProvider } from "./context/ReservationContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ReservationProvider>
          <App />
        </ReservationProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
