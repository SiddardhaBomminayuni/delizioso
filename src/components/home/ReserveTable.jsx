import { Link } from "react-router-dom";
import collage from "../../assets/images/reserve-collage.jpg";

export default function ReserveTable() {
  return (
    <section className="relative overflow-hidden bg-cream lg:h-[1054px]">
      <div className="container-x relative z-10 pt-[50px] lg:pt-[230px]">
        <div className="lg:ml-[659px] lg:w-[480px]">
          <h2 className="heading text-[36px] lg:text-[80px]">
            Let's reserve <br />
            <span className="text-brand">a table</span>
          </h2>
          <p className="mt-[20px] text-[13px] leading-[24px] text-body lg:mt-[62px] lg:max-w-[425px] lg:text-[20px] lg:leading-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
          </p>
          <Link to="/reservation" className="btn-orange mt-[44px] h-[54px] w-[168px] text-[14px] lg:mt-[118px] lg:h-[74px] lg:w-[232px] lg:text-[20px]">
            Reservation
          </Link>
        </div>
      </div>

      <img
        src={collage}
        alt="Friends sharing pizza, burgers and fries at a table"
        className="mt-[30px] w-full lg:absolute lg:top-0 lg:left-[calc(50%-720px)] lg:mt-0 lg:w-[790px]"
      />
    </section>
  );
}
