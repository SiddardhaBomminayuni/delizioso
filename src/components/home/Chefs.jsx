import { Link } from "react-router-dom";
import chef1 from "../../assets/images/chef-1.jpg";
import chef2 from "../../assets/images/chef-2.jpg";
import chef3 from "../../assets/images/chef-3.jpg";
import chef4 from "../../assets/images/chef-4.jpg";

const chefs = [
  { name: "Betran Komar", role: "Head chef", image: chef1 },
  { name: "Ferry Sauwi", role: "Chef", image: chef2 },
  { name: "Iswan Dracho", role: "Chef", image: chef3, order: "order-4 lg:order-none" },
  { name: "Ferry Sauwi", role: "Chef", image: chef4, order: "order-3 lg:hidden" },
];

export default function Chefs() {
  return (
    <section className="py-[60px] lg:pt-[203px] lg:pb-[271px]">
      <div className="container-x">
        <h2 className="heading text-center text-[36px] lg:text-[80px]">Our greatest chef</h2>

        <div className="mt-[40px] grid grid-cols-2 gap-x-[11px] gap-y-[30px] lg:mt-[184px] lg:grid-cols-3 lg:gap-[40px]">
          {chefs.map((chef, i) => (
            <figure key={i} className={`group text-center ${chef.order || ""}`}>
              <div className="overflow-hidden rounded-[30px] lg:rounded-[50px]">
                <img
                  src={chef.image}
                  alt={chef.name}
                  loading="lazy"
                  className="aspect-[344/549] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption>
                <p className="mt-[14px] text-[14px] font-semibold text-ink lg:mt-[47px] lg:text-[24px]">{chef.name}</p>
                <p className="mt-[4px] text-[14px] text-[#a08d76] lg:mt-[43px] lg:text-[24px]">{chef.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-[60px] hidden justify-center lg:mt-[157px] lg:flex">
          <Link to="/about" className="btn-orange h-[74px] w-[235px] text-[20px]">
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
