import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import OrderOnline from "./pages/OrderOnline";
import OrderList from "./pages/OrderList";
import Checkout from "./pages/Checkout";
import Reservation from "./pages/Reservation";
import ConfirmReservation from "./pages/ConfirmReservation";
import ReservationConfirmed from "./pages/ReservationConfirmed";
import CancelReservation from "./pages/CancelReservation";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation/confirm" element={<ConfirmReservation />} />
          <Route path="/reservation/confirmed" element={<ReservationConfirmed />} />
          <Route path="/reservation/cancel" element={<CancelReservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
