import { useState } from "react";
import { FiX } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import PageTitle from "../components/PageTitle";
import { Input, TextArea } from "../components/form/Fields";
import MapView from "../components/MapView";
import storefront from "../assets/images/storefront.jpg";

const empty = { firstName: "", lastName: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);
  const [showCard, setShowCard] = useState(true);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(empty);
  };

  return (
    <>
      <section className="pt-[10px] pb-[60px] lg:pt-[90px] lg:pb-[116px]">
        <div className="container-x">
          <PageTitle subtitle="We love hearing from our customers. Feel free to share your experience or ask any questions you may have.">
            Contact us
          </PageTitle>

          <form onSubmit={submit} className="mt-[24px] grid grid-cols-1 gap-[14px] lg:mt-[90px] lg:grid-cols-2 lg:gap-x-[32px] lg:gap-y-[50px]">
            <Input name="firstName" value={form.firstName} onChange={update} placeholder="First name" required className="lg:!h-[100px] lg:!px-[78px] lg:!text-[20px]" />
            <Input name="lastName" value={form.lastName} onChange={update} placeholder="Last name" required className="lg:!h-[100px] lg:!px-[78px] lg:!text-[20px]" />
            <Input type="email" name="email" value={form.email} onChange={update} placeholder="Email address" required className="lg:!h-[100px] lg:!px-[78px] lg:!text-[20px]" />
            <Input name="subject" value={form.subject} onChange={update} placeholder="Subject" className="lg:!h-[100px] lg:!px-[78px] lg:!text-[20px]" />
            <TextArea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Message"
              required
              className="h-[130px] lg:col-span-2 lg:h-[384px] lg:!px-[78px] lg:!pt-[60px] lg:!text-[20px]"
            />

            <div className="mt-[16px] flex flex-col items-center lg:col-span-2 lg:mt-[52px]">
              <button type="submit" className="btn h-[40px] w-[208px] rounded-[10px] bg-brand text-[13px] font-normal text-white lg:h-[100px] lg:w-[540px] lg:rounded-[12px] lg:text-[24px]">
                Submit
              </button>
              {sent && (
                <p className="mt-4 text-[13px] text-leaf lg:text-[16px]" role="status">
                  Thank you! Your message has been sent. We will get back to you soon.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <MapView lat={40.885147} lng={-73.9220459} title="Delizioso location" className="h-[230px] lg:h-[660px]">
        {showCard && (
          <div className="absolute top-[30px] left-1/2 flex w-[200px] -translate-x-[40%] items-center gap-[12px] rounded-[10px] bg-white/85 p-[8px] shadow-sm backdrop-blur-sm lg:top-[200px] lg:w-[722px] lg:-translate-x-[56%] lg:gap-[45px] lg:rounded-[20px] lg:p-[17px]">
            <img src={storefront} alt="Delizioso storefront" className="h-[48px] w-[52px] rounded-[6px] object-cover lg:h-[152px] lg:w-[166px] lg:rounded-[12px]" />
            <div className="min-w-0 flex-1">
              <h3 className="text-[8px] font-semibold text-ink lg:text-[20px]">Delizioso Restaurant</h3>
              <p className="mt-[4px] text-[6px] text-ink lg:mt-[16px] lg:text-[16px]">Bronx, NY 10463, Amerika Serikat</p>
              <p className="mt-[3px] text-[6px] text-ink lg:mt-[12px] lg:text-[16px]">40.885147,-73.9220459</p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=40.885147,-73.9220459"
              target="_blank"
              rel="noreferrer"
              aria-label="Get directions"
              className="grid size-[20px] shrink-0 place-items-center rounded-full bg-ink text-[10px] text-white transition hover:bg-brand lg:mr-[14px] lg:size-[120px] lg:text-[40px]"
            >
              <RiSendPlaneFill className="-rotate-[30deg]" />
            </a>
            <button
              type="button"
              onClick={() => setShowCard(false)}
              aria-label="Close"
              className="absolute -top-[8px] -right-[8px] grid size-[16px] place-items-center rounded-full bg-brand text-[9px] text-white lg:-top-[22px] lg:-right-[22px] lg:size-[50px] lg:text-[22px]"
            >
              <FiX />
            </button>
          </div>
        )}
      </MapView>
    </>
  );
}
