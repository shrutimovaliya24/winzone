import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const herSectionInfo = [
  {
    id: 1,
    feature: "Years Experience",
    value: "15+",
  },
  {
    id: 2,
    feature: "Projects Completed",
    value: "1000+",
  },
  {
    id: 3,
    feature: "Client Satisfaction",
    value: "100%",
  },
];

const HeroSection = () => {
  return (
    <section className="mx-auto container md:py-13 sm:py-10 py-6 grid sm:gap-8 gap-4 sm:px-6">
      <div className="grid gap-6 justify-items-center">
        <h1 className="font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-lg text-theme-color max-w-6xl lg:px-10 md:px-8 px-0 font-titillium text-center">
          REDEFINING MODERN LIVING WITH WINDOWS & DOORS THAT INSPIRE
        </h1>
        <Link
          href="/product"
          className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-theme-color flex gap-2 sm:gap-2.5 font-semibold text-white font-archivo items-center w-fit text-sm sm:text-base"
        >
          Explore Our Product
          <div className="p-1 bg-white rounded-full">
            <ArrowRightIcon color="#29485F" size="20" />
          </div>
        </Link>
      </div>
      <div className="grid md:gap-8 sm:gap-6 gap-3 justify-items-center">
        <div className="relative grid sm:gap-6 gap-3 ">
          <Image
            src="/img/dahsboard-hero-section.webp"
            width={1440}
            height={670}
            alt="Dashboard Hero Section Image"
          />
          <div className="sm:flex grid max-md:justify-items-center max-md:justify-center lg:gap-10 md:gap-7 gap-5 md:absolute lg:bottom-15 lg:left-15 md:bottom-10 md:left-10 ">
            {herSectionInfo.map((item, index) => (
              <div
                key={item.id}
                className={`grid gap-3 ${
                  herSectionInfo.length === item.id
                    ? ""
                    : "lg:pr-10 md:pr-7 sm:pr-5 sm:border-r border-solid md:border-white/30 sm:border-black/30"
                } `}
              >
                <h3 className="font-semibold font-titillium lg:text-5xl md:text-4xl sm:text-3xl text-2xl md:text-white text-theme-color max-md:text-center">
                  {item.value}
                </h3>
                <p className="md:text-[#DCDCDC] text-black/40 md:text-lg sm:text-base text-xs font-archivo">
                  {item.feature}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="font-archivo md:text-lg sm:text-base text-xs text-[#777777] max-w-4xl text-center px-0 sm:px-6">
          Winzone brings together innovation, style, and durability to deliver
          premium aluminium windows, doors, and façade systems. Our solutions
          enhance comfort, improve aesthetics, and stand the test of time.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
