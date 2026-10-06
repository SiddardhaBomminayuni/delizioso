import { FiPlus } from "react-icons/fi";
import Stars from "../Stars";
import { useCart } from "../../context/CartContext";

export default function OrderCard({ dish }) {
  const { addItem, qtyOf } = useCart();
  const qty = qtyOf(dish.id);
  const active = qty > 0;

  return (
    <article
      className={`flex flex-col items-center rounded-[20px] px-[10px] pt-[10px] pb-[16px] text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(49,31,9,0.08)] lg:rounded-[40px] lg:px-[16px] lg:pt-[20px] lg:pb-[20px] ${
        active ? "bg-brand text-white" : "bg-soft text-ink"
      }`}
    >
      <img src={dish.image} alt={dish.name} loading="lazy" className="aspect-square w-[82%] rounded-full object-cover lg:w-[172px]" />
      <h3 className="mt-[12px] text-[13px] font-semibold lg:mt-[18px] lg:text-[20px]">{dish.name}</h3>
      <Stars value={dish.rating} className="mt-[6px] gap-[6px] text-[7px] lg:mt-[14px] lg:gap-[9px] lg:text-[13px]" onColor={active ? "text-ink" : "text-brand"} />
      <p className={`mt-[8px] line-clamp-2 text-[10px] leading-[13px] lg:mt-[12px] lg:line-clamp-3 lg:text-[12px] lg:leading-[18px] ${active ? "text-white" : "text-body"}`}>
        {dish.description}
      </p>

      <div className="mt-auto flex w-full items-center justify-between pt-[12px] lg:pt-[16px]">
        <span className={`text-[14px] font-semibold lg:text-[17px] ${active ? "text-white" : "text-brand lg:text-ink"}`}>
          ${dish.price.toFixed(2)}
        </span>

        <button
          type="button"
          onClick={() => addItem(dish)}
          className={`btn hidden h-[40px] w-[100px] text-[13px] lg:inline-flex ${active ? "bg-white text-brand" : "bg-brand text-white"}`}
        >
          Order now
        </button>

        <button
          type="button"
          onClick={() => addItem(dish)}
          aria-label={`Add ${dish.name}`}
          className={`btn size-[28px] text-[11px] lg:hidden ${active ? "bg-white text-ink" : "bg-brand text-[16px] text-white"}`}
        >
          {active ? `${qty}x` : <FiPlus />}
        </button>
      </div>
    </article>
  );
}
