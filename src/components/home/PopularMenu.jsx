import MenuGrid from "../MenuGrid";

export default function PopularMenu() {
  return (
    <section className="py-[60px] lg:pt-[189px] lg:pb-[201px]">
      <div className="container-x">
        <h2 className="heading text-center text-[36px] lg:text-[80px]">Our popular menu</h2>
        <div className="mt-[30px] lg:mt-[110px]">
          <MenuGrid />
        </div>
      </div>
    </section>
  );
}
