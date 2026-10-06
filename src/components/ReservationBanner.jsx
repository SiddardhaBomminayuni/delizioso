import tableImg from "../assets/images/reservation-table.jpg";
import { DetailList } from "./ModalPage";

export function StatusBanner({ tone = "green", title, children }) {
  const bg = tone === "green" ? "bg-[#3fc66e]" : "bg-brand";
  return (
    <div className={`relative mt-[24px] overflow-hidden px-[20px] py-[22px] text-white lg:mt-[50px] lg:px-[64px] lg:py-[38px] ${bg}`}>
      {/* soft bubbles from the design */}
      <span className="absolute top-[20px] right-[260px] hidden size-[100px] rounded-full bg-white/15 lg:block" />
      <span className="absolute -top-[30px] right-[40px] size-[90px] rounded-full bg-white/15 lg:size-[120px]" />
      <span className="absolute top-[-10px] right-[10px] hidden size-[90px] rounded-full bg-white/10 lg:block" />
      <span className="absolute right-[60px] bottom-[-20px] hidden size-[70px] rounded-full bg-white/15 lg:block" />

      <h1 className="relative max-w-[640px] text-[20px] lg:max-w-[780px] leading-[1.25] font-semibold lg:text-[40px]">{title}</h1>
      <div className="relative mt-[10px] space-y-[6px] text-[12px] lg:mt-[18px] lg:space-y-[12px] lg:text-[20px]">{children}</div>
    </div>
  );
}

export function BannerLine({ icon, children }) {
  return (
    <p className="flex items-center gap-[10px] lg:gap-[16px]">
      <span className="grid size-[16px] place-items-center rounded-[4px] bg-white/30 lg:size-[26px]">{icon}</span>
      {children}
    </p>
  );
}

export function BookingSummary({ booking, actions }) {
  return (
    <div className="flex flex-col items-center gap-[20px] lg:flex-row lg:items-start lg:gap-[40px]">
      <div className="grid size-[160px] shrink-0 place-items-center rounded-full bg-cream lg:size-[300px]">
        <div className="grid size-[130px] place-items-center rounded-full bg-[#f6eee4] lg:size-[242px]">
          <img src={tableImg} alt="Your table" className="size-[100px] rounded-full object-cover lg:size-[190px]" />
        </div>
      </div>
      <div className="w-full lg:flex-1 lg:pt-[70px]">
        <h2 className="text-[15px] font-semibold text-ink lg:text-[24px]">Reservation detail</h2>
        <DetailList booking={booking} className="mt-[14px] space-y-[12px] lg:mt-[30px] lg:space-y-[20px]" />
      </div>
      {actions}
    </div>
  );
}
