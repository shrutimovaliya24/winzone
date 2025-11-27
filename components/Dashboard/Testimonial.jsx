import React from "react";
import CommonTitle from "../Common/CommonTitle";
import SvgIcon from "../Common/SvgIcon";
import Image from "next/image";

const TestimonialCard = ({ quote, imgSrc, alt, name, role }) => {
  const cardClass = `bg-[#113148] sm:p-6 p-4 box-shadow-testimonial rounded-xl grid gap-4 justify-between content-between w-full h-full min-h-fit`;

  return (
    <div className={cardClass}>
      <div className="grid gap-2.5 h-fit flex-1 min-w-0">
        <SvgIcon type="quote" className="w-6 h-6 sm:w-6 sm:h-6 flex-shrink-0" normalColor="white" />
        <p className="font-archivo xl:text-lg lg:text-base md:text-[15px] sm:text-sm text-sm text-[#C6C6C6] leading-relaxed break-words overflow-wrap-anywhere hyphens-auto">
          {quote}
        </p>
      </div>

      <div className="flex gap-3 items-center flex-shrink-0 mt-auto">
        <div className="relative w-12 h-12 sm:w-12 sm:h-12 flex-shrink-0 rounded-full overflow-hidden">
          <Image 
            src={imgSrc} 
            width={48} 
            height={48} 
            alt={alt}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="font-titillium min-w-0 flex-1">
          <h4 className="text-white font-semibold xl:text-lg lg:text-base md:text-[15px] sm:text-sm text-sm break-words">{name}</h4>
          <p className="mt-1 text-[#C6C6C6] xl:text-sm lg:text-xs md:text-[11px] text-xs break-words">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const leftColumn = [
    {
      id: "l1",
      quote:
        "WinZone transformed our living experience. The products improved comfort and reduced energy bills instantly. Installation was simple, and the quality speaks for itself. A perfect balance of design, efficiency, and sustainability—I'm glad we chose WinZone for our home.",
      imgSrc: "/img/profile-picture-1.png",
      alt: "Testimonial Profile Picture 1 Image",
      name: "Aarav Mehta",
      role: "Homeowner",
    },
    {
      id: "l2",
      quote:
        "WinZone makes my work easier with reliable, durable, and efficient products. Every project feels smoother, and clients appreciate the comfort and savings. Their team is supportive, professional, and knowledgeable. WinZone has truly become a brand I can confidently trust",
      imgSrc: "/img/profile-picture-1.png",
      alt: "Testimonial Profile Picture 1 Image",
      name: "Aarav Mehta",
      role: "Contractor",
    },
  ];

  const rightTop = {
    id: "r1",
    quote:
      "As an architect, I value solutions that blend design with performance. WinZone delivers exactly that. Their systems enhance efficiency, complement aesthetics, and provide long-term reliability. Clients are always satisfied, which makes WinZone my most trusted partner for modern projects.",
    imgSrc: "/img/profile-picture-2.png",
    alt: "Testimonial Profile Picture 2 Image",
    name: "Priya Shah",
    role: "Architect",
  };

  const rightBottom = [
    {
      id: "r2",
      quote:
        "WinZone made our home more comfortable and energy-efficient. The installation was smooth, and the results were instant. Lower bills and better comfort—WinZone truly delivers lasting value.",
      imgSrc: "/img/profile-picture-3.png",
      alt: "Testimonial Profile Picture 3 Image",
      name: "Karan Joshi",
      role: "Contractor",
    },
    {
      id: "r3",
      quote:
        "WinZone improved the way we live. Our home feels cooler in summer, warmer in winter, and our bills are lower. The quality and finish are excellent, and the service was smooth. I couldn't ask for more from a brand.",
      imgSrc: "/img/profile-picture-4.png",
      alt: "Testimonial Profile Picture 4 Image",
      name: "Sneha Desai",
      role: "Homeowner",
    },
  ];

  return (
    <section className="bg-theme-color relative overflow-hidden flex justify-center">
      <Image
        src="/img/grid-box.png"
        width={1440}
        height={1024}
        alt="Background Grid box"
        className="absolute top-0 object-cover items-center z-0"
      />

      <div className="section-container global-grid-responsive z-10 ">
        <CommonTitle
          tag="TESTIMONIAL"
          extraTagCss="bg-white/6 text-white"
          title="WHAT OUR CLIENTS SAY"
          extraTitleCss="!text-white"
          description="Find out how our happy clients are raving about us."
          extraDescriptionCss="!text-[#C6C6C6]"
          gridView={true}
          gridCenter={true}
        />

        <div className="grid lg:grid-cols-2 xl:gap-6 lg:gap-5 md:gap-4 gap-3 w-full">
          <div className="grid xl:gap-6 lg:gap-5 md:gap-4 gap-3 w-full min-w-0">
            {leftColumn.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>

          <div className="grid xl:gap-6 lg:gap-5 md:gap-4 gap-3 w-full min-w-0">
            <TestimonialCard {...rightTop} />

            <div className="sm:flex grid xl:gap-6 lg:gap-5 md:gap-4 gap-3 w-full">
              {rightBottom.map((item) => (
                <TestimonialCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
