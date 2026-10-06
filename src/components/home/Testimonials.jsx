import { useState } from "react";
import customer1 from "../../assets/images/customer-1.jpg";
import customer2 from "../../assets/images/customer-2.jpg";
import customer3 from "../../assets/images/customer-3.jpg";
import customer4 from "../../assets/images/customer-4.jpg";
import customer5 from "../../assets/images/customer-5.jpg";

const reviews = [
  {
    name: "Starla Virgoun",
    role: "Financial advisor",
    image: customer1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam",
  },
  {
    name: "Amara Okafor",
    role: "Food blogger",
    image: customer2,
    text: "The pasta tastes just like the ones I had in Rome. Friendly staff, cosy place and the tiramisu is a must. We already booked our next dinner here.",
  },
  {
    name: "Nadia Putri",
    role: "Product designer",
    image: customer3,
    text: "Ordering online was quick and the food arrived hot. The gnocchi is soft and the sauce is rich without being heavy. Easily my favourite in town.",
  },
  {
    name: "Rafael Moreno",
    role: "Photographer",
    image: customer4,
    text: "Great atmosphere for a weekend lunch with friends. The pizza crust is thin and crispy, and the portions are generous for the price.",
  },
  {
    name: "Zuri Mensah",
    role: "Marketing lead",
    image: customer5,
    text: "We celebrated a birthday here and the team made it special. Reservation was easy and our table was ready right on time.",
  },
];

// desktop avatar slots along the arc (x is the left edge relative to a 1440px frame)
const slots = [
  { x: 319, y: 1033, size: 105 },
  { x: 458, y: 1092, size: 125 },
  { x: 857, y: 1092, size: 125 },
  { x: 1015, y: 1033, size: 105 },
];

const bubbles = [
  "left-[115px] top-[72px] size-[98px] bg-[#ceefc8]",
  "left-[1295px] top-[169px] size-[44px] bg-[#f5f5f4]",
  "left-[346px] top-[307px] size-[44px] bg-[#e7f4fa]",
  "left-[982px] top-[469px] size-[98px] bg-[#faebea]",
  "left-[1383px] top-[605px] size-[74px] bg-[#f6cefc]",
  "left-[60px] top-[691px] size-[66px] bg-[#fdc17a]",
  "left-[538px] top-[807px] size-[74px] bg-[#f9f2fa]",
  "left-[233px] top-[951px] size-[65px] bg-[#c4c4c4]",
  "left-[1140px] top-[951px] size-[65px] bg-[#c4c4c4]",
  "left-[275px] top-[1172px] size-[44px] bg-[#fbe4c7]",
  "left-[1338px] top-[1240px] size-[44px] bg-[#f5f5f4]",
];

function Quote({ close = false, className = "" }) {
  return (
    <svg viewBox="0 0 36 26" className={className} aria-hidden="true">
      <g transform={close ? "rotate(180 18 13)" : undefined} fill="#311F09">
        <path d="M14.4 0C6.5 3.2 1.4 9 .3 15.4-.6 21 2.6 26 8.2 26c4 0 6.6-3 6.6-6.6 0-3.5-2.4-6.1-5.7-6.4.9-4.2 4.2-8 8.4-10.5L14.4 0Z" />
        <path d="M32.6 0c-7.9 3.2-13 9-14.1 15.4-.9 5.6 2.3 10.6 7.9 10.6 4 0 6.6-3 6.6-6.6 0-3.5-2.4-6.1-5.7-6.4.9-4.2 4.2-8 8.4-10.5L32.6 0Z" />
      </g>
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = reviews[active];
  const others = reviews.map((r, i) => ({ ...r, index: i })).filter((r) => r.index !== active);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-soft pt-[60px] pb-[60px] lg:h-[1384px] lg:pt-0 lg:pb-0">
      {/* decorative bubbles */}
      <div className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block">
        {bubbles.map((b) => (
          <span key={b} className={`absolute rounded-full ${b}`} />
        ))}
      </div>
      <span className="absolute top-[-30px] right-[-40px] size-[100px] rounded-full bg-[#fdc17a]/70 lg:hidden" />
      <span className="absolute top-[40px] left-[30px] size-[12px] rounded-full bg-[#f6cefc] lg:hidden" />
      <span className="absolute top-[120px] left-[50px] size-[30px] rounded-full bg-[#f1e8fb] lg:hidden" />

      <div className="container-x relative">
        <h2 className="heading text-center text-[36px] lg:pt-[158px] lg:text-[80px]">Our customers say</h2>

        <div key={active} className="animate-[fade_0.5s_ease] text-center">
          <img
            src={current.image}
            alt={current.name}
            className="mx-auto mt-[80px] size-[120px] rounded-full object-cover lg:mt-[94px] lg:size-[262px]"
          />
          <h3 className="mt-[20px] text-[16px] font-semibold lg:mt-[58px] lg:text-[28px]">{current.name}</h3>
          <p className="mt-[8px] text-[13px] text-body lg:mt-[16px] lg:text-[20px]">{current.role}</p>

          <div className="relative mx-auto mt-[30px] max-w-[300px] px-2 lg:mt-[86px] lg:max-w-[600px] lg:px-[40px]">
            <Quote className="absolute top-[-12px] left-0 w-[14px] lg:top-[-22px] lg:-left-[0px] lg:w-[36px]" />
            <p className="text-[13px] leading-[24px] text-body lg:text-[20px] lg:leading-[40px]">{current.text}</p>
            <Quote close className="absolute right-0 bottom-[-22px] w-[14px] lg:-right-[20px] lg:bottom-[-38px] lg:w-[36px]" />
          </div>
        </div>

        {/* mobile avatars */}
        <div className="mt-[60px] flex items-center justify-between lg:hidden">
          {others.slice(0, 2).map((r, i) => (
            <button
              key={r.index}
              type="button"
              onClick={() => setActive(r.index)}
              aria-label={`Show review from ${r.name}`}
              className={i === 0 ? "-translate-y-5" : ""}
            >
              <img src={r.image} alt="" className={`rounded-full object-cover ${i === 0 ? "size-[44px]" : "size-[50px]"}`} />
            </button>
          ))}
          <span className="grid size-[95px] place-items-center rounded-full bg-[#fbefe0]">
            <span className="grid size-[78px] place-items-center rounded-full bg-[#fdc686]">
              <img src={current.image} alt="" className="size-[62px] rounded-full object-cover" />
            </span>
          </span>
          {others.slice(2, 4).map((r, i) => (
            <button
              key={r.index}
              type="button"
              onClick={() => setActive(r.index)}
              aria-label={`Show review from ${r.name}`}
              className={i === 1 ? "-translate-y-5" : ""}
            >
              <img src={r.image} alt="" className={`rounded-full object-cover ${i === 1 ? "size-[44px]" : "size-[50px]"}`} />
            </button>
          ))}
        </div>
      </div>

      {/* desktop avatars */}
      <div className="absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block">
        {slots.map((slot, i) => {
          const person = others[i];
          return (
            <button
              key={person.index}
              type="button"
              onClick={() => setActive(person.index)}
              aria-label={`Show review from ${person.name}`}
              className="absolute overflow-hidden rounded-full transition hover:scale-105"
              style={{ left: slot.x, top: slot.y, width: slot.size, height: slot.size }}
            >
              <img src={person.image} alt="" className="size-full object-cover" />
            </button>
          );
        })}
        <span className="absolute top-[1052px] left-[603px] grid size-[233px] place-items-center rounded-full bg-[#fbefe0]">
          <span className="grid size-[194px] place-items-center rounded-full bg-[#fdc686]">
            <img src={current.image} alt="" className="size-[154px] rounded-full object-cover" />
          </span>
        </span>
      </div>
    </section>
  );
}
