export default function CategoryTabs({ items, active, onChange, className = "" }) {
  return (
    <div
      className={`-mx-6 flex gap-[10px] overflow-x-auto px-6 [scrollbar-width:none] lg:mx-0 lg:justify-between lg:gap-[28px] lg:overflow-visible lg:px-0 ${className}`}
      role="tablist"
    >
      {items.map((item, i) => {
        const selected = item === active;
        return (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(item)}
            className={`h-[40px] shrink-0 rounded-full px-[18px] text-[13px] transition-colors lg:h-[74px] lg:px-0 lg:text-[20px] ${i === 0 ? "lg:w-[232px]" : "lg:w-[192px]"} ${
              selected ? "bg-ink font-semibold text-white" : "bg-soft text-ink hover:bg-brand-light"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
