import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-x py-[80px] text-center lg:py-[160px]">
      <p className="font-display text-[80px] font-bold text-brand lg:text-[140px]">404</p>
      <h1 className="heading mt-2 text-[28px] lg:text-[48px]">This page is not on the menu</h1>
      <Link to="/" className="btn-orange mt-[34px] h-[54px] w-[200px] text-[15px] lg:h-[74px] lg:w-[232px] lg:text-[20px]">
        Back to home
      </Link>
    </section>
  );
}
