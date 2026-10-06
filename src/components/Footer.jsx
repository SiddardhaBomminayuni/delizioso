import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Logo from "./Logo";

const pageLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/order-online", label: "Order online" },
  { to: "/menu", label: "Catering" },
  { to: "/reservation", label: "Reservation" },
];

const infoLinks = [
  { to: "/about", label: "About us" },
  { to: "/#testimonials", label: "Testimonial" },
  { to: "/about", label: "Event" },
];

const socials = [
  { href: "https://twitter.com", label: "Twitter", icon: FaTwitter },
  { href: "https://instagram.com", label: "Instagram", icon: FiInstagram },
  { href: "https://facebook.com", label: "Facebook", icon: FaFacebookF },
];

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-[18px] font-semibold text-brand lg:text-[24px] lg:leading-[50px]">{title}</h4>
      <ul className="mt-5 space-y-4 lg:mt-[29px] lg:space-y-[25px]">{children}</ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x pt-[90px] pb-[60px] lg:pt-[150px] lg:pb-[73px]">
        <div className="grid gap-12 lg:grid-cols-[418px_193px_221px_1fr] lg:gap-0">
          <div>
            <Logo light />
            <p className="mt-[38px] max-w-[310px] text-[15px] leading-[28px] lg:mt-[45px] lg:text-[20px] lg:leading-[40px]">
              Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
            </p>
            <div className="mt-[34px] flex gap-[20px] lg:mt-[45px] lg:gap-[30px]">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-[40px] place-items-center rounded-full bg-[#e3e2e0] text-[18px] text-black transition hover:bg-brand hover:text-white lg:size-[60px] lg:text-[28px]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Page">
            {pageLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-[15px] transition hover:text-brand lg:text-[20px]">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Information">
            {infoLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-[15px] transition hover:text-brand lg:text-[20px]">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <div>
            <h4 className="text-[18px] font-semibold text-brand lg:text-[24px] lg:leading-[50px]">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-[15px] lg:mt-[29px] lg:space-y-[20px] lg:text-[20px]">
              <li className="leading-[1.55]">3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</li>
              <li>
                <a href="mailto:delizioso@gmail.com" className="transition hover:text-brand">
                  delizioso@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+12345678901" className="transition hover:text-brand">
                  +123 4567 8901
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-[60px] text-[15px] lg:mt-[110px] lg:text-center lg:text-[20px]">
          Copyright © 2022 Delizioso
        </p>
      </div>
    </footer>
  );
}
