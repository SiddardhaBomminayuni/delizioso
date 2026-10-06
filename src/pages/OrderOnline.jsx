import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import CategoryTabs from "../components/CategoryTabs";
import Pagination from "../components/Pagination";
import OrderCard from "../components/order/OrderCard";
import OrderSummary from "../components/order/OrderSummary";
import { categories } from "../data/menu";
import { orderSections } from "../data/orderMenu";
import { money, useCart } from "../context/CartContext";

function Section({ section, aside }) {
  const [page, setPage] = useState(1);

  return (
    <section className="mt-[30px] lg:mt-[60px]">
      <h2 className="inline-block border-b border-brand pr-[34px] pb-[10px] text-[16px] font-semibold tracking-[0.02em] text-black lg:pr-[54px] lg:pb-[14px] lg:text-[28px]">
        {section.title}
      </h2>

      <div className="mt-[24px] lg:mt-[60px] lg:flex lg:items-start lg:gap-[44px]">
        <div className="lg:w-[722px]">
          {/* same 9 dishes on every page until the API is wired up */}
          <div key={page} className="grid animate-[fade_0.4s_ease] grid-cols-2 gap-[12px] lg:grid-cols-3 lg:gap-x-[31px] lg:gap-y-[25px]">
            {section.items.map((dish, i) => (
              <div key={dish.id} className={i >= 6 ? "hidden lg:block" : ""}>
                <OrderCard dish={dish} />
              </div>
            ))}
          </div>
          <Pagination page={page} pages={3} onChange={setPage} className="mt-[40px] hidden lg:mt-[44px] lg:flex" />
        </div>
        {aside && <div className="hidden lg:block lg:w-[346px]">{aside}</div>}
      </div>
    </section>
  );
}

export default function OrderOnline() {
  const [category, setCategory] = useState("Dinner");
  const { count, totals } = useCart();
  const sections = orderSections.filter((s) => s.tags.includes(category));

  return (
    <>
      <div className="container-x pt-[10px] pb-[60px] lg:pt-[90px] lg:pb-[200px]">
        <PageTitle>Menu</PageTitle>

        <CategoryTabs items={categories} active={category} onChange={setCategory} className="mt-[24px] lg:mt-[60px]" />

        {sections.length ? (
          sections.map((section, i) => <Section key={section.id} section={section} aside={i === 0 ? <OrderSummary /> : null} />)
        ) : (
          <p className="mt-16 rounded-[24px] bg-soft py-16 text-center text-[16px] text-body lg:text-[20px]">
            {category} menu is coming soon. Stay tuned!
          </p>
        )}
      </div>

      {/* mobile order bar */}
      <div className="sticky bottom-0 z-20 flex items-center justify-between bg-soft px-6 py-[18px] lg:hidden">
        <div>
          <p className="text-[13px] text-ink">{count} Items</p>
          <p className="text-[20px] font-semibold text-brand">{money(totals.subtotal)}</p>
        </div>
        <Link to="/order-list" className="btn h-[48px] w-[150px] rounded-[10px] bg-[#3fc66e] text-[14px] text-white">
          Order now
        </Link>
      </div>
    </>
  );
}
