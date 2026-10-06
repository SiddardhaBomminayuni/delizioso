export default function RestaurantInfo({ className = "" }) {
  return (
    <div className={className}>
      <h3 className="text-[15px] font-semibold text-black lg:text-[24px]">Restaurant informations</h3>
      <div className="mt-[14px] space-y-[14px] text-[12px] leading-[19px] text-body lg:mt-[30px] lg:space-y-[24px] lg:text-[18px] lg:leading-[29px]">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
        </p>
      </div>
    </div>
  );
}
