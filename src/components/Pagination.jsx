import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({ page, pages, onChange, className = "flex" }) {
  if (pages < 2) return null;

  const numbers = Array.from({ length: Math.min(pages, 3) }, (_, i) => i + 1);
  const arrow =
    "grid size-[40px] place-items-center rounded-[10px] bg-ink text-[22px] text-white transition hover:bg-brand disabled:cursor-not-allowed lg:size-[55px] lg:rounded-[12px] lg:text-[28px]";

  return (
    <nav className={`items-center justify-center gap-[12px] lg:gap-[15px] ${className}`} aria-label="Pagination">
      <button type="button" className={`${arrow} mr-[10px] lg:mr-[15px]`} disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="Previous page">
        <FiChevronLeft strokeWidth={1.5} />
      </button>
      {numbers.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-current={n === page ? "page" : undefined}
          className={`grid size-[40px] place-items-center rounded-[10px] text-[14px] font-semibold transition lg:size-[55px] lg:rounded-[12px] lg:text-[16px] ${
            n === page ? "bg-brand-light text-brand ring-1 ring-brand" : "bg-brand-light text-brand hover:bg-brand hover:text-white"
          }`}
        >
          {n}
        </button>
      ))}
      <span className="flex w-[40px] items-center justify-center gap-[4px] lg:w-[55px]" aria-hidden="true">
        {[0, 1, 2].map((d) => (
          <span key={d} className="size-[5px] rounded-full bg-muted" />
        ))}
      </span>
      <button type="button" className={`${arrow} ml-[10px] lg:ml-[15px]`} disabled={page === pages} onClick={() => onChange(page + 1)} aria-label="Next page">
        <FiChevronRight strokeWidth={1.5} />
      </button>
    </nav>
  );
}
