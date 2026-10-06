import { Link } from "react-router-dom";

export default function Logo({ light = false, small = false, compact = false, className = "" }) {
  return (
    <Link to="/" className={`flex items-center gap-[18px] ${className}`} aria-label="Delizioso home">
      <span
        className={`grid shrink-0 place-items-center rounded-full bg-brand font-semibold text-white ${
          small ? "size-[30px] text-[15px]" : "size-[50px] text-[22px]"
        }`}
      >
        D
      </span>
      {!small && (
        <span className={`text-[14px] font-semibold ${light ? "text-white" : "text-ink"} ${compact ? "hidden sm:inline" : ""}`}>
          Delizi<span className="text-brand">oso</span>
        </span>
      )}
    </Link>
  );
}
