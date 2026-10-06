import MenuGrid from "../components/MenuGrid";
import PageTitle from "../components/PageTitle";

export default function Menu() {
  return (
    <section className="pt-[10px] pb-[70px] lg:pt-[90px] lg:pb-[214px]">
      <div className="container-x">
        <PageTitle>Menu</PageTitle>
        <div className="mt-[24px] lg:mt-[93px]">
          <MenuGrid mobileLimit={6} />
        </div>
      </div>
    </section>
  );
}
