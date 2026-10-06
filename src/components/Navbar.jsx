import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiShoppingCart, FiX } from "react-icons/fi";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About us" },
  { to: "/order-online", label: "Order online" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact us" },
];

function isActive(pathname, to) {
  if (to === "/") return pathname === "/";
  if (to === "/order-online") return ["/order-online", "/order-list", "/checkout"].includes(pathname);
  return pathname.startsWith(to);
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="8" height="8" rx="2" stroke="#311F09" strokeWidth="1.6" />
      <rect x="13" y="1" width="8" height="8" rx="2" stroke="#311F09" strokeWidth="1.6" />
      <rect x="1" y="13" width="8" height="8" rx="2" stroke="#311F09" strokeWidth="1.6" />
      <circle cx="17" cy="17" r="4" stroke="#FF8A00" strokeWidth="1.6" />
    </svg>
  );
}

export function CartButton() {
  const { items } = useCart();
  return (
    <Link
      to="/order-list"
      className="relative grid size-[50px] place-items-center rounded-full bg-soft transition hover:bg-brand-light"
      aria-label="Open order list"
    >
      <FiShoppingCart className="text-[20px] text-ink" />
      {items.length > 0 && (
        <span className="absolute top-[9px] right-[9px] grid size-[15px] place-items-center rounded-full bg-[#ff3434] text-[8px] font-medium text-white">
          {items.length}
        </span>
      )}
    </Link>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="relative z-30">
      <div className="container-x flex h-[100px] items-center justify-between lg:h-[152px]">
        <Logo />

        <nav className="hidden items-center gap-[45px] lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={`text-[15px] transition-colors hover:text-brand ${
                isActive(pathname, link.to) ? "text-brand" : "text-ink"
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-[25px]">
          <CartButton />
          <Link to="/login" className="btn-green hidden h-[50px] w-[112px] text-[15px] lg:inline-flex">
            Log in
          </Link>
          <button
            type="button"
            className="grid size-[30px] place-items-center lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-ink/50 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-[280px] flex-col bg-white px-8 py-7 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="mb-10 self-end text-[26px] text-ink"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <FiX />
        </button>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={`text-[17px] ${isActive(pathname, link.to) ? "text-brand" : "text-ink"}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/login" className="btn-green mt-10 h-[48px] text-[15px]">
          Log in
        </Link>
      </aside>
    </header>
  );
}
