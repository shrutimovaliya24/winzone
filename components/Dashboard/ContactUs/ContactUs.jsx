import CommonTitle from "@/components/Common/CommonTitle";
import React from "react";
import ContactForm from "./Components/ContactForm";
import { Locate, Mail, MapPin, Phone } from "lucide-react";

const ContactInfoItem = ({ icon, children, extraClass = "" }) => (
  <div
    className={`flex xl:gap-2.5 lg:gap-2.5 md:gap-2 sm:gap-2 gap-1.5 xl:py-2 lg:py-2 md:py-1.5 sm:py-1.5 py-1 xl:px-3 lg:px-3 md:px-2.5 sm:px-2.5 px-2 items-center rounded-xl bg-white ${extraClass}`}
  >
    {icon}
    <p className="text-theme-color xl:text-base lg:text-base md:text-sm sm:text-xs text-xs">{children}</p>
  </div>
);

const ContactUs = () => {
  const contactItems = [
    {
      id: "c1",
      icon: <Mail size={20} color="#777777" />,
      content: "info@winzonsystem.com",
    },
    {
      id: "c2",
      icon: <Phone size={20} color="#777777" />,
      content: "+91 9909992145",
    },
    {
      id: "c3",
      icon: <Phone size={20} color="#777777" />,
      content: "+91 9909992140",
    },
    {
      id: "c4",
      icon: (
        <MapPin size={20} color="#777777" className="md:w-9 w-12 h-6 pt-1" />
      ),
      content:
        "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
      extraClass: "w-fit h-fit",
    },
  ];

  return (
    <section className="bg-[#F7F7F7]">
      <div className="section-container grid lg:grid-cols-2 global-grid-responsive">
        <div className="grid xl:gap-7 lg:gap-6 md:gap-5 sm:gap-4 gap-3 h-fit">
          <CommonTitle
            tag="CONTACT US"
            extraTagCss="bg-theme-color/6"
            title="LET'S BUILD TOGETHER"
            extraTitleCss=""
            description="Looking for premium windows and doors for your next project? Reach out to our team today and let's bring your vision to life."
            extraDescriptionCss=""
            gridView={true}
          />

          <div className="grid lg:grid-cols-1 sm:grid-cols-2 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2.5 gap-2">
            {contactItems.map(({ id, icon, content, extraClass }) => (
              <ContactInfoItem key={id} icon={icon} extraClass={extraClass}>
                {content}
              </ContactInfoItem>
            ))}
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
