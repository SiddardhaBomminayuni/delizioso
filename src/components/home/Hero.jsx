import { Link } from "react-router-dom";
import heroPasta from "../../assets/images/hero-pasta.jpg";

export default function Hero() {
  return (
    <section className="relative lg:h-[873px]">
      <div className="container-x relative pt-[32px] lg:pt-[116px]">
        <div className="relative z-10 lg:max-w-[560px]">
          <span className="inline-flex h-[25px] items-center rounded-full bg-brand-light px-[18px] text-[12px] text-brand lg:-ml-[13px] lg:h-[40px] lg:px-[35px] lg:text-[17px]">
            Restaurant
          </span>

          <h1 className="mt-[20px] font-display text-[60px] leading-[62px] font-bold text-ink lg:mt-[24px] lg:text-[84px] lg:leading-[88px]">
            Italian
            <br />
            Cuisine
          </h1>

          <p className="mt-[20px] text-[13px] leading-[24px] text-body lg:mt-[30px] lg:max-w-[530px] lg:text-[20px] lg:leading-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.
          </p>

          <div className="mt-[44px] flex gap-[20px] lg:mt-[82px] lg:gap-[24px]">
            <Link to="/order-online" className="btn-orange h-[44px] w-[139px] text-[13px] lg:h-[74px] lg:w-[232px] lg:text-[20px]">
              Order now
            </Link>
            <Link to="/reservation" className="btn-green h-[44px] w-[139px] text-[13px] lg:h-[74px] lg:w-[232px] lg:text-[20px]">
              Reservation
            </Link>
          </div>
        </div>
      </div>

      <img
        src={heroPasta}
        alt="Spaghetti with tomato sauce, feta and basil"
        className="mt-[30px] w-full lg:absolute lg:top-[110px] lg:left-[calc(50%-60px)] lg:mt-0 lg:w-[700px]"
      />
    </section>
  );
}
