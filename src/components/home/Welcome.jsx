import { Link } from "react-router-dom";
import salad from "../../assets/images/welcome-salad.jpg";

export default function Welcome() {
  return (
    <section className="relative overflow-hidden bg-mint lg:h-[969px]">
      <div className="container-x relative z-10 pt-[30px] lg:pt-[183px]">
        <div className="lg:ml-[723px] lg:w-[420px]">
          <h2 className="heading text-[36px] lg:text-[80px]">
            Welcome to <br />
            <span className="text-brand">delizioso</span>
          </h2>
          <p className="mt-[30px] text-[13px] leading-[24px] text-body lg:mt-[70px] lg:text-[20px] lg:leading-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
          </p>
          <Link to="/menu" className="btn-orange mt-[56px] h-[54px] w-[168px] text-[14px] lg:mt-[118px] lg:h-[74px] lg:w-[232px] lg:text-[20px]">
            See our menu
          </Link>
        </div>
      </div>

      <img
        src={salad}
        alt="Fresh salad with grilled beef, tomatoes and herbs"
        className="mt-[40px] w-full lg:absolute lg:top-[75px] lg:left-[calc(50%-680px)] lg:mt-0 lg:w-[760px]"
      />
    </section>
  );
}
