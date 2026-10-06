import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import Logo from "../Logo";
import MapView from "../MapView";
import house from "../../assets/images/highbridge-house.jpg";

const place = {
  name: "Highbridge House",
  address: "1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat",
  lat: 40.885147,
  lng: -73.9220459,
};

export function AddressSearch({ onSelect }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const locate = () => {
    if (!navigator.geolocation) {
      setStatus("Location is not supported by your browser.");
      return;
    }
    setStatus("Finding your location...");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => onSelect(`Current location (${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)})`),
      () => setStatus("We couldn't get your location. Please type your address instead.")
    );
  };

  return (
    <>
      <form
        className="flex gap-[12px] lg:gap-[30px]"
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) onSelect(query.trim());
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Please type your address"
          aria-label="Address"
          className="field h-[50px] flex-1 lg:h-[100px]"
        />
        <button type="submit" className="btn h-[50px] w-[90px] rounded-[10px] bg-[#53a5e0] text-[14px] text-white lg:h-[100px] lg:w-[214px] lg:rounded-[12px] lg:text-[24px]">
          Search
        </button>
      </form>
      <button
        type="button"
        onClick={locate}
        className="mt-[14px] flex h-[50px] w-full items-center gap-[14px] rounded-[10px] bg-soft px-[20px] text-[13px] text-danger transition hover:bg-[#ffe5e5] lg:mt-[30px] lg:h-[100px] lg:w-[825px] lg:gap-[24px] lg:rounded-[12px] lg:px-[64px] lg:text-[22px]"
      >
        <RiSendPlaneFill className="-rotate-[30deg] text-[16px] lg:text-[26px]" />
        Use your current location
      </button>
      {status && <p className="mt-3 text-[13px] text-body lg:text-[16px]">{status}</p>}
    </>
  );
}

export function AddressMap({ onConfirm, className = "" }) {
  return (
    <MapView lat={place.lat} lng={place.lng} title="Delivery location" className={className}>
      <div className="absolute top-1/2 left-1/2 flex w-[290px] -translate-x-1/2 -translate-y-[60%] gap-[12px] rounded-[12px] bg-white/85 p-[10px] backdrop-blur-sm lg:w-[575px] lg:gap-[24px] lg:rounded-[20px] lg:p-[20px]">
        <img src={house} alt={place.name} className="h-[110px] w-[84px] shrink-0 rounded-[8px] object-cover lg:h-[250px] lg:w-[190px] lg:rounded-[12px]" />
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-[14px] font-semibold text-ink lg:text-[28px]">{place.name}</h3>
          <p className="mt-[6px] text-[11px] leading-[16px] text-ink lg:mt-[12px] lg:text-[20px] lg:leading-[30px]">{place.address}</p>
          <p className="mt-[4px] text-[11px] text-ink lg:mt-[10px] lg:text-[20px]">
            {place.lat},{place.lng}
          </p>
          <button
            type="button"
            onClick={() => onConfirm(place.address)}
            className="btn mt-auto h-[32px] rounded-[8px] bg-danger text-[11px] text-white lg:h-[76px] lg:rounded-[12px] lg:text-[22px]"
          >
            Confirmation
          </button>
        </div>
      </div>
    </MapView>
  );
}

export default function ShippingModal({ onClose, onSelect }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/80 px-4 pt-[90px] pb-[40px] lg:px-0 lg:pt-[186px]" onClick={onClose}>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-[24px] left-1/2 grid size-[44px] -translate-x-1/2 place-items-center rounded-full bg-white text-[24px] text-ink transition hover:rotate-90 lg:top-[78px] lg:size-[78px] lg:text-[38px]"
      >
        <FiX strokeWidth={1.5} />
      </button>

      <div className="mx-auto max-w-[1112px] overflow-hidden bg-white" role="dialog" aria-modal="true" aria-label="Shipping address" onClick={(e) => e.stopPropagation()}>
        <div className="px-[20px] pt-[24px] pb-[30px] lg:px-[60px] lg:pt-[60px] lg:pb-[60px]">
          <div className="flex items-center justify-between">
            <Logo compact />
            <div className="flex gap-[12px] lg:gap-[18px]">
              <Link to="/login" className="btn-orange h-[34px] w-[84px] text-[12px] lg:h-[48px] lg:w-[108px] lg:text-[13px]">
                Sign in
              </Link>
              <Link to="/signup" className="btn-green h-[34px] w-[84px] text-[12px] lg:h-[48px] lg:w-[111px] lg:text-[13px]">
                Sign up
              </Link>
            </div>
          </div>
          <h2 className="mt-[30px] text-[16px] font-medium text-black lg:mt-[90px] lg:text-[28px]">Shipping address</h2>
          <div className="mt-[16px] lg:mt-[40px]">
            <AddressSearch onSelect={onSelect} />
          </div>
        </div>
        <AddressMap onConfirm={onSelect} className="h-[320px] lg:h-[742px]" />
      </div>
    </div>
  );
}
