export default function PageTitle({ children, subtitle, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="heading text-[36px] lg:text-[80px]">{children}</h1>
      {subtitle && (
        <p className="mx-auto mt-[14px] max-w-[300px] text-[12px] leading-[20px] text-body lg:mt-[22px] lg:max-w-[880px] lg:text-[20px] lg:leading-[32px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
