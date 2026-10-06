import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiX, FiMail, FiCalendar } from "react-icons/fi";
import ModalPage from "../components/ModalPage";
import RestaurantInfo from "../components/RestaurantInfo";
import { BannerLine, BookingSummary, StatusBanner } from "../components/ReservationBanner";
import { Select, TextArea } from "../components/form/Fields";
import { useReservation } from "../context/ReservationContext";

const occasions = ["Birthday", "Anniversary", "Date night", "Business meal", "Celebration", "Other"];

export default function ReservationConfirmed() {
  const { booking, guest } = useReservation();
  const [occasion, setOccasion] = useState(guest?.occasion || "");
  const [request, setRequest] = useState(guest?.request || "");

  const actions = (
    <div className="flex w-full gap-[12px] lg:w-[246px] lg:flex-col lg:gap-[22px] lg:pt-[64px]">
      <Link
        to="/reservation"
        className="flex h-[44px] flex-1 items-center justify-center gap-[12px] rounded-[10px] bg-[#cce3ff] text-[13px] text-ink transition hover:brightness-95 lg:h-[80px] lg:flex-none lg:gap-[30px] lg:text-[20px]"
      >
        Modify <FiEdit className="text-[16px] lg:text-[24px]" />
      </Link>
      <Link
        to="/reservation/cancel"
        className="flex h-[44px] flex-1 items-center justify-center gap-[12px] rounded-[10px] bg-[#ffe5e5] text-[13px] text-danger transition hover:brightness-95 lg:h-[80px] lg:flex-none lg:gap-[30px] lg:text-[20px]"
      >
        Cancel <FiX className="text-[18px] lg:text-[26px]" />
      </Link>
    </div>
  );

  return (
    <ModalPage closeTo="/">
      <StatusBanner tone="green" title="Reservation has been confirmed">
        <BannerLine icon={<FiMail className="text-[10px] lg:text-[15px]" />}>The confirmation result has been sent to your email</BannerLine>
        <BannerLine icon={<FiCalendar className="text-[10px] lg:text-[15px]" />}>Booking ID : {booking.bookingId}</BannerLine>
      </StatusBanner>

      <div className="px-[20px] pt-[30px] pb-[40px] lg:px-[60px] lg:pt-[60px] lg:pb-[130px]">
        <BookingSummary booking={booking} actions={actions} />

        <div className="mt-[30px] grid grid-cols-1 gap-[30px] lg:mt-[60px] lg:grid-cols-[480px_1fr] lg:gap-[36px]">
          <div className="space-y-[14px] lg:space-y-[34px]">
            <Select placeholder="Select an occasion (optional)" value={occasion} onChange={setOccasion} options={occasions} buttonClassName="lg:!h-[100px]" />
            <TextArea value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Add a special request" className="h-[140px] lg:h-[360px]" />
          </div>
          <RestaurantInfo className="lg:pt-[2px]" />
        </div>
      </div>
    </ModalPage>
  );
}
