import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import PopularMenu from "../components/home/PopularMenu";
import ReserveTable from "../components/home/ReserveTable";
import Chefs from "../components/home/Chefs";
import Testimonials from "../components/home/Testimonials";
import OpenHours from "../components/home/OpenHours";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <PopularMenu />
      <ReserveTable />
      <Chefs />
      <Testimonials />
      <OpenHours />
    </>
  );
}
