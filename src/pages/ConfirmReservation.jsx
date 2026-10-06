import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPage, { DetailList } from "../components/ModalPage";
import RestaurantInfo from "../components/RestaurantInfo";
import { Checkbox, Input, PhoneInput, Select, TextArea } from "../components/form/Fields";
import { useReservation } from "../context/ReservationContext";

const occasions = ["Birthday", "Anniversary", "Date night", "Business meal", "Celebration", "Other"];

export default function ConfirmReservation() {
  const navigate = useNavigate();
  const { booking, confirm } = useReservation();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", occasion: "", request: "", offers: false });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    confirm(form);
    navigate("/reservation/confirmed");
  };

  return (
    <ModalPage closeTo="/reservation">
      <div className="px-[20px] pb-[40px] lg:px-[60px] lg:pb-[90px]">
        <h1 className="heading mt-[24px] text-center text-[32px] lg:mt-[36px] lg:text-[80px]">Reservation</h1>

        <p className="mt-[24px] rounded-[10px] bg-[#d0f7ff] px-4 py-[18px] text-center text-[12px] text-body lg:mt-[50px] lg:rounded-[12px] lg:py-[46px] lg:text-[20px]">
          Due to limited availability, we can hold this table for you for <strong className="font-semibold text-black">5:00 minutes</strong>
        </p>

        <div className="mt-[30px] grid grid-cols-1 gap-[30px] lg:mt-[80px] lg:grid-cols-[520px_1fr] lg:gap-[42px]">
          <form onSubmit={submit} className="order-2 lg:order-none">
            <h2 className="text-[15px] font-semibold text-black lg:text-[26px]">Data order</h2>
            <div className="mt-[16px] space-y-[14px] lg:mt-[44px] lg:space-y-[40px]">
              <Input name="firstName" value={form.firstName} onChange={update} placeholder="First name" required className="lg:!h-[100px] lg:!text-[20px]" />
              <Input name="lastName" value={form.lastName} onChange={update} placeholder="Last name" required className="lg:!h-[100px] lg:!text-[20px]" />
              <PhoneInput value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="lg:!h-[100px] lg:!text-[20px]" />
              <Input type="email" name="email" value={form.email} onChange={update} placeholder="Email address" required className="lg:!h-[100px] lg:!text-[20px]" />
              <Select
                placeholder="Select an occasion"
                value={form.occasion}
                onChange={(occasion) => setForm({ ...form, occasion })}
                options={occasions}
                buttonClassName="lg:!h-[100px] lg:!text-[20px]"
              />
              <TextArea name="request" value={form.request} onChange={update} placeholder="Add a special request" className="h-[140px] lg:h-[320px] lg:!text-[20px]" />
            </div>

            <Checkbox
              round
              checked={form.offers}
              onChange={(e) => setForm({ ...form, offers: e.target.checked })}
              className="mt-[24px] lg:mt-[44px] lg:!text-[20px] lg:!leading-[30px]"
            >
              Sign me up to receive dining offers and news from this restaurant by email.
            </Checkbox>

            <button type="submit" className="btn mt-[30px] h-[50px] w-full rounded-[10px] bg-brand text-[15px] font-normal text-white lg:mt-[80px] lg:h-[96px] lg:rounded-[12px] lg:text-[24px]">
              Confirm reservation
            </button>
          </form>

          <aside className="order-1 lg:order-none">
            <div className="rounded-[12px] bg-soft px-[20px] py-[20px] lg:px-[40px] lg:py-[40px]">
              <h2 className="text-[15px] font-semibold text-ink lg:text-[24px]">Reservation detail</h2>
              <DetailList booking={booking} className="mt-[16px] space-y-[12px] lg:mt-[38px] lg:space-y-[26px]" />
            </div>
            <RestaurantInfo className="mt-[24px] hidden lg:mt-[56px] lg:block" />
          </aside>

          <RestaurantInfo className="order-3 lg:hidden" />
        </div>
      </div>
    </ModalPage>
  );
}
