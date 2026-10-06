import { createContext, useContext, useState } from "react";

const ReservationContext = createContext(null);

const defaultBooking = {
  date: "Saturday, 28 february 2022",
  time: "04:30 pm",
  party: "2 people (Standard seating)",
  bookingId: "#123456",
};

export function ReservationProvider({ children }) {
  const [booking, setBooking] = useState(defaultBooking);
  const [guest, setGuest] = useState(null);

  const value = {
    booking,
    guest,
    saveBooking: (data) => setBooking((prev) => ({ ...prev, ...data })),
    confirm: (details) => {
      setGuest(details);
      setBooking((prev) => ({ ...prev, bookingId: `#${Math.floor(100000 + Math.random() * 900000)}` }));
    },
  };

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>;
}

export function useReservation() {
  return useContext(ReservationContext);
}
