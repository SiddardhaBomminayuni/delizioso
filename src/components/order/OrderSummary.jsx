import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { money, useCart } from "../../context/CartContext";

function QtyStepper({ value, onMinus, onPlus }) {
  const btn = "grid size-[24px] place-items-center rounded-full bg-white text-[14px] shadow-[0_3px_8px_rgba(0,0,0,0.08)] transition hover:scale-110 lg:size-[30px] lg:text-[18px]";
  return (
    <div className="flex items-center rounded-full bg-soft">
      <button type="button" onClick={onMinus} className={`${btn} text-danger`} aria-label="Decrease quantity">
        <FiMinus />
      </button>
      <span className="w-[32px] text-center text-[12px] lg:w-[44px] lg:text-[15px]">{value}</span>
      <button type="button" onClick={onPlus} className={`${btn} text-leaf`} aria-label="Increase quantity">
        <FiPlus />
      </button>
    </div>
  );
}

export function CartLines({ showImages = false }) {
  const { items, changeQty, removeItem } = useCart();

  if (!items.length) {
    return <p className="py-10 text-center text-[14px] text-body lg:text-[16px]">Your order list is empty.</p>;
  }

  return (
    <ul className="space-y-[34px] lg:space-y-[46px]">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-[14px]">
          {showImages && (
            <img src={item.image} alt={item.name} className="size-[105px] shrink-0 rounded-full object-cover shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-semibold text-ink lg:text-[24px]">{item.name}</h3>
              <button type="button" onClick={() => removeItem(item.id)} className="text-[16px] text-danger transition hover:scale-110 lg:text-[20px]" aria-label={`Remove ${item.name}`}>
                <FiTrash2 />
              </button>
            </div>
            <div className="mt-[20px] flex items-center justify-between lg:mt-[34px]">
              <QtyStepper value={item.qty} onMinus={() => changeQty(item.id, -1)} onPlus={() => changeQty(item.id, 1)} />
              <span className="text-[13px] text-brand lg:text-[24px]">{money(item.price * item.qty)}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function VoucherAndTotals({ className = "" }) {
  const { voucher, setVoucher, totals } = useCart();
  const [draft, setDraft] = useState(voucher);
  const invalid = draft.trim() && totals.discount === 0 && voucher === draft;

  const rows = [
    ["Subtotal", totals.subtotal],
    ["Tax fee", totals.tax],
    ["Voucher", totals.discount],
  ];

  return (
    <div className={className}>
      <div className="border-t border-dashed border-[#e5e5e5] pt-[22px] lg:pt-[30px]">
        <h3 className="text-[13px] font-semibold text-ink lg:text-[20px]">Voucher Code</h3>
        <form
          className="mt-[14px] flex gap-[14px] lg:mt-[20px] lg:gap-[22px]"
          onSubmit={(e) => {
            e.preventDefault();
            setVoucher(draft);
          }}
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value.toUpperCase())}
            placeholder="Enter code"
            aria-label="Voucher code"
            className="h-[42px] min-w-0 flex-1 rounded-[10px] bg-soft text-center text-[12px] text-[#2c7ac2] placeholder:text-[#a59d94] lg:h-[56px] lg:text-[15px]"
          />
          <button type="submit" className="grid size-[42px] place-items-center rounded-[10px] bg-[#53a5e0] text-[22px] text-white transition hover:brightness-95 lg:size-[56px] lg:text-[28px]" aria-label="Apply voucher">
            <FiPlus strokeWidth={1.5} />
          </button>
        </form>
        {invalid && <p className="mt-2 text-[12px] text-danger">This voucher code is not valid.</p>}
      </div>

      <div className="mt-[22px] border-t border-dashed border-[#e5e5e5] pt-[22px] lg:mt-[26px] lg:pt-[34px]">
        <dl className="space-y-[12px] lg:space-y-[34px]">
          {rows.map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <dt className="text-[13px] font-semibold text-black lg:text-[24px]">{label}</dt>
              <dd className="text-[13px] text-brand lg:text-[24px]">{money(value)}</dd>
            </div>
          ))}
          <div className="flex justify-between pt-[14px] lg:pt-0">
            <dt className="text-[17px] font-semibold text-black lg:text-[24px]">Total</dt>
            <dd className="text-[17px] font-medium text-brand lg:text-[24px]">{money(totals.total)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function CheckoutButton({ className = "" }) {
  const { items } = useCart();
  return (
    <Link
      to={items.length ? "/checkout" : "/order-online"}
      className={`btn rounded-[10px] bg-[#3fc66e] font-semibold text-white ${className}`}
    >
      {items.length ? "Checkout" : "Browse menu"}
    </Link>
  );
}

export default function OrderSummary() {
  return (
    <aside className="rounded-[12px] bg-white px-[20px] pt-[20px] pb-[30px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] lg:sticky lg:top-6">
      <h2 className="grid h-[98px] place-items-center rounded-[16px] bg-[#623e8f] text-[32px] font-semibold text-white">Order list</h2>
      <div className="mt-[60px] px-[10px]">
        <CartLines />
      </div>
      <VoucherAndTotals className="mt-[44px] px-[10px]" />
      <CheckoutButton className="mt-[48px] h-[60px] w-full text-[24px]" />
    </aside>
  );
}
