import kitchen from "../assets/images/about-kitchen.jpg";
import dish from "../assets/images/about-dish.jpg";
import owner from "../assets/images/owner-chef.jpg";

function RingedImage({ src, alt, className = "" }) {
  return (
    <div className={`grid aspect-square w-[250px] place-items-center rounded-full bg-soft lg:w-[860px] ${className}`}>
      <div className="grid aspect-square w-[78%] place-items-center rounded-full bg-[#f1f0ef] lg:w-[78%]">
        <img src={src} alt={alt} className="aspect-square w-[80%] rounded-full object-cover lg:w-[82%]" />
      </div>
    </div>
  );
}

function QuoteMark({ close = false }) {
  return (
    <span
      aria-hidden="true"
      className={`block font-serif text-[40px] leading-none text-brand-light lg:text-[64px] ${close ? "text-right" : ""}`}
    >
      {close ? "”" : "“"}
    </span>
  );
}

export default function About() {
  return (
    <>
      <section className="relative pb-[40px] lg:h-[740px] lg:pb-0">
        <div className="container-x relative z-10 lg:pt-[108px]">
          <div className="lg:ml-[662px] lg:w-[460px]">
            <h1 className="heading text-center text-[28px] lg:text-left lg:text-[80px]">
              <span className="text-brand">Our</span> <br className="hidden lg:block" />
              restaurant
            </h1>
            <RingedImage src={kitchen} alt="Chef plating dishes in the kitchen" className="mx-auto mt-[24px] lg:hidden" />
            <p className="mt-[24px] text-center text-[12px] leading-[22px] text-body lg:mt-[86px] lg:text-left lg:text-[20px] lg:leading-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
          </div>
        </div>
        <RingedImage
          src={kitchen}
          alt="Chef plating dishes in the kitchen"
          className="absolute top-[10px] left-[calc(50%-797px)] hidden lg:grid lg:w-[860px]"
        />
      </section>

      <section className="relative pb-[40px] lg:h-[920px] lg:pb-0">
        <div className="container-x relative z-10 lg:pt-[328px]">
          <RingedImage src={dish} alt="Plate of grilled chicken rice bowl" className="mx-auto lg:hidden" />
          <p className="mt-[24px] text-center text-[12px] leading-[22px] text-body lg:mt-0 lg:w-[460px] lg:text-left lg:text-[20px] lg:leading-[40px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
        </div>
        <RingedImage
          src={dish}
          alt="Plate of grilled chicken rice bowl"
          className="absolute top-[34px] left-[calc(50%-64px)] hidden lg:grid lg:w-[860px]"
        />
      </section>

      <section className="pt-[20px] pb-[60px] lg:pt-[106px] lg:pb-[137px]">
        <div className="container-x lg:flex lg:gap-[104px]">
          <h2 className="heading text-center text-[28px] lg:hidden">
            <span className="text-brand">Owner</span> &amp; <br />
            Executive Chef
          </h2>
          <img
            src={owner}
            alt="Ismail Marzuki, owner and executive chef"
            className="mx-auto mt-[24px] aspect-[460/690] w-[150px] rounded-[20px] object-cover lg:mx-0 lg:mt-0 lg:w-[460px] lg:rounded-none"
          />
          <div className="lg:w-[548px]">
            <h2 className="heading hidden text-[80px] lg:block">
              <span className="text-brand">Owner</span> &amp; <br />
              Executive Chef
            </h2>
            <p className="mt-[16px] text-center text-[15px] font-semibold text-black lg:mt-[44px] lg:text-left lg:text-[40px] lg:font-medium">
              Ismail Marzuki
            </p>
            <blockquote className="mt-[20px] lg:mt-[60px]">
              <QuoteMark />
              <p className="text-center text-[12px] leading-[22px] font-light text-body italic lg:text-left lg:text-[30px] lg:leading-[60px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <QuoteMark close />
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
