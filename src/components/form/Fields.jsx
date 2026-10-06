import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export function Input({ className = "", ...props }) {
  return <input className={`field h-[50px] lg:h-[66px] ${className}`} {...props} />;
}

export function TextArea({ className = "", rows = 6, ...props }) {
  return <textarea rows={rows} className={`field resize-none py-[18px] lg:py-[24px] ${className}`} {...props} />;
}

export function Select({ value, onChange, options, placeholder, className = "", buttonClassName = "", name }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        name={name}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`field flex h-[50px] items-center justify-between text-left lg:h-[66px] ${buttonClassName}`}
      >
        <span className={value ? "text-ink" : "text-[#a59d94]"}>{value || placeholder}</span>
        <FiChevronDown className={`text-[22px] text-ink transition ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>
      {open && (
        <ul role="listbox" className="absolute top-full right-0 left-0 z-20 mt-2 max-h-[240px] overflow-auto rounded-xl bg-white py-2 shadow-[0_12px_30px_rgba(49,31,9,0.12)]">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                role="option"
                aria-selected={opt === value}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full px-6 py-2.5 text-left text-[14px] transition hover:bg-brand-light lg:px-10 lg:text-[16px] ${
                  opt === value ? "text-brand" : "text-ink"
                }`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Radio({ checked, onChange, label, name, className = "" }) {
  return (
    <label className={`flex cursor-pointer items-center gap-[12px] text-[14px] text-ink lg:gap-[20px] lg:text-[20px] ${className}`}>
      <input type="radio" name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span className="grid size-[22px] place-items-center rounded-full border border-[#8a8a8a] transition peer-checked:border-leaf peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40 lg:size-[32px]">
        <span className={`size-[14px] rounded-full bg-leaf transition lg:size-[20px] ${checked ? "scale-100" : "scale-0"}`} />
      </span>
      {label}
    </label>
  );
}

export function Checkbox({ checked, onChange, children, round = false, className = "", boxClassName = "" }) {
  return (
    <label className={`flex cursor-pointer items-start gap-[14px] text-[13px] leading-[20px] text-body lg:text-[15px] lg:leading-[24px] ${className}`}>
      <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        className={`mt-[1px] grid size-[22px] shrink-0 place-items-center border transition peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40 ${boxClassName} ${
          round ? "rounded-full border-[#8a8a8a]" : "rounded-[4px] border-[#c9c9c9]"
        } ${checked ? "border-ink bg-ink" : "bg-white"}`}
      >
        {checked && (
          <svg viewBox="0 0 12 9" className="w-[11px]" aria-hidden="true">
            <path d="M1 4.5 4.3 8 11 1" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span>{children}</span>
    </label>
  );
}

export function PhoneInput({ value, onChange, className = "" }) {
  return (
    <div className={`field flex h-[50px] items-center gap-[16px] !pl-[8px] lg:h-[66px] ${className}`}>
      <span className="flex h-[38px] shrink-0 items-center gap-[8px] rounded-lg bg-white px-[12px] lg:h-[46px]">
        <span className="flex size-[22px] flex-col overflow-hidden rounded-full lg:size-[34px]" aria-label="Germany (+49)">
          <span className="flex-1 bg-black" />
          <span className="flex-1 bg-[#dd0000]" />
          <span className="flex-1 bg-[#ffce00]" />
        </span>
        <FiChevronDown className="text-[18px]" />
      </span>
      <input
        type="tel"
        value={value}
        onChange={onChange}
        placeholder="Phone number"
        className="min-w-0 flex-1 bg-transparent placeholder:text-[#a59d94]"
      />
    </div>
  );
}
