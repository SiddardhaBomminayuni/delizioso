import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { CartLines, CheckoutButton, VoucherAndTotals } from "../components/order/OrderSummary";

export default function OrderList() {
  const navigate = useNavigate();

  return (
    <section className="pb-[60px] lg:pt-[20px] lg:pb-[160px]">
      <div className="relative flex h-[80px] items-center justify-center bg-[#623e8f] text-white lg:mx-auto lg:h-[110px] lg:max-w-[720px] lg:rounded-[16px]">
        <button
          type="button"
          onClick={() => navigate("/order-online")}
          aria-label="Back to menu"
          className="absolute left-[24px] grid size-[30px] place-items-center rounded-full bg-white text-[18px] text-ink lg:left-[34px] lg:size-[40px] lg:text-[24px]"
        >
          <FiChevronLeft />
        </button>
        <h1 className="text-[20px] font-semibold lg:text-[32px]">Order list</h1>
      </div>

      <div className="mx-auto max-w-[720px] px-6 pt-[40px] lg:px-[40px] lg:pt-[60px]">
        <CartLines showImages />
        <VoucherAndTotals className="mt-[40px]" />
        <div className="mt-[40px] flex justify-center">
          <CheckoutButton className="h-[50px] w-[203px] text-[15px] lg:h-[60px] lg:w-[300px] lg:text-[20px]" />
        </div>
      </div>
    </section>
  );
}
