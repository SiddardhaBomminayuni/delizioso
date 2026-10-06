import { useMemo, useState } from "react";
import CategoryTabs from "./CategoryTabs";
import DishCard from "./DishCard";
import Pagination from "./Pagination";
import { categories, dishes } from "../data/menu";

const PER_PAGE = 6;

export default function MenuGrid({ mobileLimit = 4, showMobilePagination = false }) {
  const [category, setCategory] = useState(categories[0]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (category === categories[0] ? dishes : dishes.filter((d) => d.tags.includes(category))),
    [category]
  );

  const pages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const selectCategory = (value) => {
    setCategory(value);
    setPage(1);
  };

  return (
    <>
      <CategoryTabs items={categories} active={category} onChange={selectCategory} />

      {visible.length ? (
        <div className="mt-[30px] grid grid-cols-2 gap-[10px] lg:mt-[60px] lg:grid-cols-3 lg:gap-[40px]">
          {visible.map((dish, i) => (
            <div key={dish.id} className={i >= mobileLimit ? "hidden lg:block" : ""}>
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-16 rounded-[24px] bg-soft py-16 text-center text-[16px] text-body lg:text-[20px]">
          {category} menu is coming soon. Stay tuned!
        </p>
      )}

      <Pagination
        page={page}
        pages={pages}
        onChange={setPage}
        className={`mt-[40px] lg:mt-[90px] ${showMobilePagination ? "flex" : "hidden lg:flex"}`}
      />
    </>
  );
}
