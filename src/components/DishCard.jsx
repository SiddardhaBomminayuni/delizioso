import { FiPlus } from "react-icons/fi";
import Stars from "./Stars";
import { useCart } from "../context/CartContext";

export default function DishCard({ dish }) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-[24px] bg-soft text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(49,31,9,0.08)] lg:rounded-[50px]">
      <div className="overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="mx-auto aspect-[344/330] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-4 lg:px-[26px] lg:pb-[32px]">
        <h3 className="-mt-1 text-[14px] font-semibold text-ink lg:mt-[10px] lg:text-[28px]">{dish.name}</h3>
        <Stars
          value={dish.rating}
          className="mt-1 gap-[6px] text-[7px] lg:mt-[14px] lg:gap-[17px] lg:text-[18px]"
        />
        <p className="mt-2 line-clamp-2 text-[11px] leading-[14px] text-body lg:mt-[22px] lg:line-clamp-none lg:text-[14px] lg:leading-[28px]">
          {dish.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 lg:justify-between lg:px-[7px] lg:pt-[30px]">
          <span className="text-[15px] font-semibold text-brand lg:text-[24px] lg:text-ink">
            ${dish.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => addItem(dish)}
            className="btn-orange hidden h-[55px] w-[158px] text-[16px] lg:inline-flex"
          >
            Order now
          </button>
          <button
            type="button"
            onClick={() => addItem(dish)}
            className="btn-orange size-[33px] text-[18px] lg:hidden"
            aria-label={`Add ${dish.name} to order`}
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </article>
  );
}
