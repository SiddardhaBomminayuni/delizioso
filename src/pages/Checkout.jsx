import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiCheck, FiChevronLeft } from "react-icons/fi";
import { Checkbox, Input, PhoneInput, Radio, Select, TextArea } from "../components/form/Fields";
import ShippingModal from "../components/order/ShippingModal";
import { money, useCart } from "../context/CartContext";

const laterTimes = ["Today, 06:00 pm", "Today, 07:00 pm", "Today, 08:00 pm", "Tomorrow, 12:00 pm", "Tomorrow, 06:00 pm"];
const payments = ["Cash On Delivery", "BCA Virtual Account", "Credit Card", "Transfer Bank"];

function Heading({ children, className = "" }) {
  return <h2 className={`text-[15px] font-medium text-black lg:text-[24px] ${className}`}>{children}</h2>;
}

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totals, clearCart } = useCart();
  const [address, setAddress] = useState("1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", note: "" });
  const [orderTime, setOrderTime] = useState("now");
  const [laterTime, setLaterTime] = useState("");
  const [method, setMethod] = useState("delivery");
  const [payment, setPayment] = useState(payments[0]);
  const [agree, setAgree] = useState(true);
  const [placed, setPlaced] = useState(null);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setPlaced(totals.total);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (placed !== null) {
    return (
      <section className="container-x py-[60px] text-center lg:py-[160px]">
        <span className="mx-auto grid size-[80px] place-items-center rounded-full bg-[#3fc66e] text-[40px] text-white lg:size-[120px] lg:text-[60px]">
          <FiCheck />
        </span>
        <h1 className="heading mt-[30px] text-[32px] lg:text-[64px]">Thank you!</h1>
        <p className="mx-auto mt-[14px] max-w-[520px] text-[14px] leading-[24px] text-body lg:text-[20px] lg:leading-[34px]">
          Your order of {money(placed)} has been placed. We will {method === "delivery" ? "deliver it to" : "have it ready for pickup near"} {address}.
        </p>
        <Link to="/" className="btn-orange mt-[34px] h-[54px] w-[200px] text-[15px] lg:h-[74px] lg:w-[232px] lg:text-[20px]">
          Back to home
        </Link>
      </section>
    );
  }

  return (
    <section className="pt-[10px] pb-[60px] lg:pt-[90px] lg:pb-[180px]">
      <div className="container-x">
        <div className="relative">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="absolute top-1/2 left-0 grid size-[30px] -translate-y-1/2 place-items-center rounded-full bg-ink text-[18px] text-white transition hover:bg-brand lg:size-[50px] lg:text-[26px]"
          >
            <FiChevronLeft />
          </button>
          <h1 className="heading text-center text-[32px] lg:text-[80px]">Checkout</h1>
        </div>

        {!items.length && (
          <p className="mt-[30px] rounded-[12px] bg-brand-light px-6 py-4 text-center text-[14px] text-ink lg:text-[17px]">
            Your order list is empty. <Link to="/order-online" className="font-semibold text-brand underline">Add some dishes</Link> before checking out.
          </p>
        )}

        <form onSubmit={submit} className="mt-[30px] lg:mt-[80px]">
          <Heading>Shipping address</Heading>
          <div className="mt-[16px] flex gap-[12px] lg:mt-[48px] lg:gap-[33px]">
            <p className="field flex h-[50px] flex-1 items-center truncate lg:h-[100px] lg:!px-[78px] lg:text-[20px]">{address}</p>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="btn h-[50px] w-[90px] rounded-[10px] bg-[#749fe0] text-[14px] font-normal text-white lg:h-[100px] lg:w-[214px] lg:rounded-[12px] lg:text-[22px]"
            >
              Change
            </button>
          </div>

          <Heading className="mt-[34px] lg:mt-[60px] lg:pl-[16px]">Order data</Heading>
          <div className="mt-[16px] grid grid-cols-1 gap-[14px] lg:mt-[50px] lg:grid-cols-2 lg:gap-x-[30px] lg:gap-y-[50px]">
            <Input name="firstName" value={form.firstName} onChange={update} placeholder="First name" required className="lg:!h-[100px] lg:!px-[78px] lg:!text-[20px]" />
            <Input name="lastName" value={form.lastName} onChange={update} placeholder="Last name" required className="lg:!h-[100px] lg:!px-[78px] lg:!text-[20px]" />
            <PhoneInput value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="lg:!h-[100px] lg:!px-[78px] lg:!text-[20px]" />
            <Input type="email" name="email" value={form.email} onChange={update} placeholder="Email address" required className="lg:!h-[100px] lg:!px-[78px] lg:!text-[20px]" />
            <TextArea name="note" value={form.note} onChange={update} placeholder="Note" className="h-[120px] lg:col-span-2 lg:h-[276px] lg:!px-[78px] lg:!text-[20px]" />
          </div>

          <Heading className="mt-[34px] lg:mt-[110px]">Order time</Heading>
          <div className="mt-[16px] flex flex-wrap items-center gap-x-[40px] gap-y-3 lg:mt-[44px] lg:gap-x-[60px]">
            <Radio name="time" label="Order now" checked={orderTime === "now"} onChange={() => setOrderTime("now")} />
            <Radio name="time" label="Order later" checked={orderTime === "later"} onChange={() => setOrderTime("later")} />
          </div>
          {orderTime === "later" && (
            <Select placeholder="Choose a time" value={laterTime} onChange={setLaterTime} options={laterTimes} className="mt-[16px] max-w-[400px]" />
          )}

          <Heading className="mt-[34px] lg:mt-[100px]">Order method</Heading>
          <div className="mt-[16px] flex gap-[40px] lg:mt-[44px] lg:gap-[60px]">
            <Radio name="method" label="Delivery" checked={method === "delivery"} onChange={() => setMethod("delivery")} />
            <Radio name="method" label="Takeaway" checked={method === "takeaway"} onChange={() => setMethod("takeaway")} />
          </div>

          <Heading className="mt-[34px] lg:mt-[100px]">Payment method</Heading>
          <div className="mt-[16px] grid grid-cols-1 gap-[12px] lg:mt-[56px] lg:grid-cols-2 lg:gap-x-[30px] lg:gap-y-[60px]">
            {payments.map((p) => (
              <Radio
                key={p}
                name="payment"
                label={p}
                checked={payment === p}
                onChange={() => setPayment(p)}
                className="h-[50px] rounded-[12px] bg-soft px-[20px] lg:h-[100px] lg:px-[60px] lg:text-[20px]"
              />
            ))}
          </div>

          <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-[34px] !text-[14px] !text-ink lg:mt-[100px] lg:!text-[24px] lg:!leading-[38px]"
            boxClassName="lg:mt-[4px] lg:size-[30px]">
            Choose to indicate that you have read and agree to our Terms of use &amp; Privacy Policy.
          </Checkbox>

          <div className="mt-[34px] flex justify-center lg:mt-[110px]">
            <button
              type="submit"
              disabled={!agree || !items.length}
              className="btn h-[52px] w-full rounded-[12px] bg-brand text-[16px] text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none lg:h-[100px] lg:w-[540px] lg:text-[24px]"
            >
              Order now
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <ShippingModal
          onClose={() => setShowModal(false)}
          onSelect={(value) => {
            setAddress(value);
            setShowModal(false);
          }}
        />
      )}
    </section>
  );
}
