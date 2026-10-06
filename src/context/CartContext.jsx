import { createContext, useContext, useMemo, useState } from "react";
import spaghetti from "../assets/images/order-spaghetti.jpg";
import pizza from "../assets/images/order-splitza.jpg";
import salad from "../assets/images/caesar-salad.jpg";

const CartContext = createContext(null);

const initialItems = [
  { id: "spaghetti", name: "Spaghetti", price: 12.05, qty: 2, image: spaghetti },
  { id: "pizza", name: "Pizza", price: 17.85, qty: 2, image: pizza },
  { id: "caesar-salad", name: "Caesar salad", price: 9.25, qty: 2, image: salad },
];

const TAX = 3.5;
const VOUCHERS = { FREETOEAT: 5 };

export function CartProvider({ children }) {
  const [items, setItems] = useState(initialItems);
  const [voucher, setVoucher] = useState("FREETOEAT");

  const addItem = (dish) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === dish.id);
      if (found) {
        return prev.map((i) => (i.id === dish.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: dish.id, name: dish.name, price: dish.price, qty: 1, image: dish.image }];
    });
  };

  const changeQty = (id, step) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + step } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const discount = items.length ? VOUCHERS[voucher.trim().toUpperCase()] || 0 : 0;
    const tax = items.length ? TAX : 0;
    return {
      subtotal,
      tax,
      discount,
      total: Math.max(subtotal + tax - discount, 0),
    };
  }, [items, voucher]);

  const qtyOf = (id) => items.find((i) => i.id === id)?.qty || 0;
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  const value = { items, count, qtyOf, addItem, changeQty, removeItem, clearCart, voucher, setVoucher, totals };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}

export const money = (n) => `$${n.toFixed(1)}`;
