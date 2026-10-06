import { Link } from "react-router-dom";
import banner from "../../assets/images/open-hours.png";

export default function OpenHours() {
  return (
    <section className="relative overflow-hidden px-6 pt-[40px] pb-[140px] lg:px-0 lg:pt-[238px] lg:pb-[237px]">
      {/* faint wave lines (mobile design) */}
      <svg className="pointer-events-none absolute inset-x-0 top-0 h-[280px] w-full lg:hidden" viewBox="0 0 375 280" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-20 60 C 80 0, 200 150, 400 40" stroke="#F3E2CC" fill="none" />
        <path d="M-20 120 C 120 40, 230 200, 400 100" stroke="#E1DEF5" fill="none" />
        <path d="M-20 200 C 140 260, 260 120, 400 220" stroke="#D7F0E4" fill="none" />
      </svg>

      <div
        className="relative mx-auto flex min-h-[420px] max-w-[1151px] flex-col items-center justify-center overflow-hidden rounded-[30px] rounded-b-[60px] bg-[image:var(--banner)] bg-cover bg-center px-4 py-[50px] text-center text-white lg:aspect-[1151/590] lg:min-h-0 lg:overflow-visible lg:rounded-none lg:bg-none lg:py-0"
        style={{ "--banner": `url(${banner})` }}
      >
        <img src={banner} alt="" aria-hidden="true" className="absolute inset-0 hidden size-full lg:block" />
        <div className="relative">
          <h2 className="font-serif text-[36px] leading-[1.07] font-bold lg:text-[80px]">
            we are <br className="lg:hidden" />
            open from
          </h2>
          <p className="mt-[12px] text-[16px] font-semibold lg:mt-[30px] lg:text-[40px]">Monday-Sunday</p>
          <div className="mt-[10px] space-y-[4px] text-[12px] lg:mt-[30px] lg:space-y-[14px] lg:text-[20px]">
            <p>Lunch : Mon-Sun : 11:00am-02:00pm</p>
            <p>Dinner : sunday : 04:00pm-08:00pm</p>
            <p className="pl-[100px] lg:pl-[170px]">04:00pm-09:00pm</p>
          </div>
          <div className="mt-[30px] flex flex-col-reverse items-center gap-[15px] lg:mt-[52px] lg:flex-row lg:justify-center lg:gap-[24px]">
            <Link to="/order-online" className="btn-orange h-[50px] w-[168px] text-[14px] lg:h-[74px] lg:w-[232px] lg:text-[20px]">
              Order now
            </Link>
            <Link
              to="/reservation"
              className="btn h-[50px] w-[168px] bg-[#f5f4f2] text-[14px] text-ink lg:h-[74px] lg:w-[232px] lg:text-[20px]"
            >
              Reservation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
