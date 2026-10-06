import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "../components/form/Fields";
import { useReservation } from "../context/ReservationContext";
import tableImg from "../assets/images/reservation-table.jpg";

function upcomingDates(count = 14) {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const weekday = d.toLocaleString("en-GB", { weekday: "long" });
    const month = d.toLocaleString("en-GB", { month: "long" }).toLowerCase();
    return `${weekday}, ${d.getDate()} ${month} ${d.getFullYear()}`;
  });
}

const times = ["11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm", "04:00 pm", "04:30 pm", "05:00 pm", "05:30 pm", "06:00 pm", "06:30 pm", "07:00 pm", "07:30 pm", "08:00 pm"];
const partySizes = ["1 person", "2 people", "3 people", "4 people", "5 people", "6 people", "7+ people"];

// ring sizes follow the design: 820px outer, 660px middle, 526px photo
function TableImage({ height, className = "" }) {
  const k = height / 820;
  return (
    <div className={`relative ${className}`} style={{ height, width: 716 * k }}>
      <div className="absolute top-0 right-0 h-full w-[200vw] rounded-r-full bg-soft" />
      <div className="absolute w-[200vw] rounded-r-full bg-[#f2f1ef]" style={{ top: 80 * k, right: 80 * k, height: 660 * k }} />
      <img
        src={tableImg}
        alt="Restaurant table set with glasses and plates"
        className="absolute rounded-full object-cover"
        style={{ top: 148 * k, right: 150 * k, width: 526 * k, height: 526 * k }}
      />
    </div>
  );
}

export default function Reservation() {
  const navigate = useNavigate();
  const { saveBooking } = useReservation();
  const [dates] = useState(() => upcomingDates());
  const [form, setForm] = useState({ date: "", time: "", party: "" });
  const [error, setError] = useState("");

  const set = (key) => (value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setError("");
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.date || !form.time || !form.party) {
      setError("Please choose a date, time and party size.");
      return;
    }
    saveBooking({ date: form.date, time: form.time, party: `${form.party} (Standard seating)` });
    navigate("/reservation/confirm");
  };

  return (
    <section className="relative overflow-hidden pt-[10px] pb-[50px] lg:h-[988px] lg:pt-0 lg:pb-0">
      <TableImage height={820} className="pointer-events-none !absolute top-[48px] left-[calc(50%-720px)] hidden lg:block" />

      <div className="container-x relative">
        <h1 className="heading text-center text-[36px] lg:ml-[638px] lg:w-[476px] lg:pt-[123px] lg:text-left lg:text-[80px]">
          Book a table
        </h1>

        <TableImage height={290} className="-ml-[24px] mt-[20px] lg:hidden" />

        <form onSubmit={submit} className="mt-[40px] space-y-[18px] lg:mt-[45px] lg:ml-[638px] lg:w-[476px] lg:space-y-[40px]">
          <Select placeholder="Date" value={form.date} onChange={set("date")} options={dates} buttonClassName="lg:!h-[100px] lg:!text-[20px]" />
          <Select placeholder="Time" value={form.time} onChange={set("time")} options={times} buttonClassName="lg:!h-[100px] lg:!text-[20px]" />
          <Select placeholder="Party size" value={form.party} onChange={set("party")} options={partySizes} buttonClassName="lg:!h-[100px] lg:!text-[20px]" />

          {error && (
            <p className="text-[13px] text-danger lg:text-[15px]" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn h-[52px] w-full rounded-[10px] bg-brand text-[15px] text-white lg:h-[100px] lg:rounded-[12px] lg:text-[24px]">
            Book now
          </button>
        </form>
      </div>
    </section>
  );
}
