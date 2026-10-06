import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Logo from "./Logo";
import pasta from "../assets/images/login-pasta.jpg";

export default function AuthLayout({ title, switchText, switchLabel, switchTo, children }) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="relative flex flex-1 flex-col px-6 pt-[30px] pb-[40px] lg:px-[146px] lg:pt-[39px]">
        <Logo small />

        <div className="mx-auto mt-[60px] w-full max-w-[490px] lg:mx-0 lg:mt-[138px]">
          <h1 className="text-[34px] leading-none font-semibold text-ink lg:text-[48px]">{title}</h1>
          <p className="mt-[16px] text-[14px] text-ink lg:mt-[25px] lg:text-[20px]">
            {switchText}{" "}
            <Link to={switchTo} className="text-[#0d8bdb] hover:underline">
              {switchLabel}
            </Link>
          </p>
          {children}
        </div>
      </div>

      <div className="relative hidden w-[51.4%] max-w-[740px] lg:block">
        <img src={pasta} alt="Spaghetti with fresh basil and tomatoes" className="absolute inset-0 size-full object-cover object-left" />
      </div>
    </div>
  );
}

export function AuthField(props) {
  return (
    <input
      {...props}
      className="field h-[56px] text-[15px] lg:h-[68px] lg:!px-[51px] lg:text-[20px]"
    />
  );
}

export function RememberRow({ checked, onChange }) {
  return (
    <div className="flex items-center justify-between text-[14px] text-ink lg:text-[20px]">
      <label className="flex cursor-pointer items-center gap-[16px] lg:gap-[22px]">
        <input type="checkbox" checked={checked} onChange={onChange} className="size-[22px] cursor-pointer rounded-[4px] accent-brand lg:size-[28px]" />
        Remember me
      </label>
      <Link to="/login" className="transition hover:text-brand">
        Forgot password?
      </Link>
    </div>
  );
}

export function AuthButtons({ submitLabel, googleLabel }) {
  return (
    <>
      <button type="submit" className="mt-[30px] h-[56px] w-full rounded-[4px] bg-[#ffa133] text-[15px] text-white transition hover:bg-brand lg:mt-[45px] lg:h-[70px] lg:text-[20px]">
        {submitLabel}
      </button>
      <button
        type="button"
        className="mt-[20px] flex h-[56px] w-full items-center justify-center gap-[14px] rounded-[4px] border border-[#c5b5a2] text-[15px] text-ink transition hover:bg-soft lg:h-[70px] lg:gap-[18px] lg:text-[20px]"
      >
        <FcGoogle className="text-[24px] lg:text-[32px]" />
        {googleLabel}
      </button>
    </>
  );
}
