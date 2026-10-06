import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Logo from "./Logo";

// Full-page modal used by the reservation flow. It sits over the navbar
// (dimmed) and keeps the regular footer underneath, like in the design.
export default function ModalPage({ children, closeTo = -1 }) {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && navigate(closeTo);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, closeTo]);

  return (
    <section className="relative z-40 -mt-[100px] bg-ink/80 px-4 pt-[90px] pb-[70px] lg:-mt-[152px] lg:px-0 lg:pt-[186px] lg:pb-[160px]">
      <button
        type="button"
        onClick={() => navigate(closeTo)}
        aria-label="Close"
        className="absolute top-[24px] left-1/2 grid size-[44px] -translate-x-1/2 place-items-center rounded-full bg-white text-[24px] text-ink shadow transition hover:rotate-90 lg:top-[78px] lg:size-[78px] lg:text-[38px]"
      >
        <FiX strokeWidth={1.5} />
      </button>

      <div className="mx-auto max-w-[1112px] overflow-hidden bg-white" role="dialog" aria-modal="true">
        <div className="flex items-center justify-between px-[20px] pt-[24px] lg:px-[60px] lg:pt-[60px]">
          <Logo compact />
          <div className="flex gap-[12px] lg:gap-[18px]">
            <Link to="/login" className="btn-orange h-[34px] w-[84px] text-[12px] lg:h-[48px] lg:w-[108px] lg:text-[13px]">
              Sign in
            </Link>
            <Link to="/signup" className="btn-green h-[34px] w-[84px] text-[12px] lg:h-[48px] lg:w-[111px] lg:text-[13px]">
              Sign up
            </Link>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export function DetailList({ booking, className = "" }) {
  const rows = [
    { icon: CalendarIcon, text: booking.date },
    { icon: ClockIcon, text: booking.time },
    { icon: UserIcon, text: booking.party },
  ];
  return (
    <ul className={className}>
      {rows.map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-center gap-[14px] text-[13px] text-body lg:gap-[18px] lg:text-[18px]">
          <Icon />
          {text}
        </li>
      ))}
    </ul>
  );
}

const iconCls = "size-[18px] shrink-0 lg:size-[26px]";

export function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="#311F09" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="#311F09" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconCls} fill="none" stroke="#311F09" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="7.5" r="4.25" />
      <path d="M4 20.5c0-3.3 3.6-5.5 8-5.5s8 2.2 8 5.5v.5H4v-.5Z" strokeLinejoin="round" />
    </svg>
  );
}
