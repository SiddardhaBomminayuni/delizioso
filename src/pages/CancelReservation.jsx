import { useState } from "react";
import { Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";
import ModalPage from "../components/ModalPage";
import { BannerLine, BookingSummary, StatusBanner } from "../components/ReservationBanner";
import { useReservation } from "../context/ReservationContext";

export default function CancelReservation() {
  const { booking } = useReservation();
  const [cancelled, setCancelled] = useState(false);

  return (
    <ModalPage closeTo="/reservation/confirmed">
      <StatusBanner tone="orange" title={cancelled ? "Your reservation has been cancelled" : "Are you sure you want to cancel the reservation?"}>
        <BannerLine icon={<FiCalendar className="text-[10px] lg:text-[15px]" />}>Booking ID : {booking.bookingId}</BannerLine>
      </StatusBanner>

      <div className="px-[20px] pt-[30px] pb-[40px] lg:px-[60px] lg:pt-[60px] lg:pb-[84px]">
        <BookingSummary booking={booking} />

        <div className="mt-[30px] flex justify-end lg:-mt-[30px]">
          {cancelled ? (
            <Link to="/reservation" className="btn h-[50px] w-full rounded-[12px] bg-brand text-[15px] text-white lg:h-[100px] lg:w-[456px] lg:text-[24px]">
              Book a new table
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setCancelled(true)}
              className="btn h-[50px] w-full rounded-[12px] bg-danger text-[15px] text-white lg:h-[100px] lg:w-[456px] lg:text-[24px]"
            >
              Cancel reservation
            </button>
          )}
        </div>
      </div>
    </ModalPage>
  );
}
