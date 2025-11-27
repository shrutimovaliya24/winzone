import React from "react";
import CommonTitle from "../Common/CommonTitle";
import Image from "next/image";
import SvgIcon from "../Common/SvgIcon";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="section-container global-grid-responsive">
      <CommonTitle
        tag="ABOUT US"
        extraTagCss="bg-theme-color/6"
        title="EXCELLENCE IN EVERY DETAIL"
        extraTitleCss="xl:w-max-w-[548px] lg:max-w-[500px]"
        description="Our expertise lies in crafting aluminium windows, doors, sliding systems, facades, and partitions that meet international quality standards. With a customer-first approach, we ensure every project is handled with care, from design consultation to installation and after-sales service."
        extraDescriptionCss=" xl:max-w-[650px] lg:max-w-[520px]"
      />
      <div className="relative">
        <Image
          src="/img/about-us-background.webp"
          width={1280}
          height={719}
          alt="About us Background Image"
          className="object-cover w-full max-h-[719px]"
        />
        <h3 className="font-bacasime 2xl:text-[90px] xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl absolute 2xl:left-24 xl:left-20 lg:left-16 md:left-12 sm:left-8 left-4 2xl:top-29 xl:top-24 lg:top-20 md:top-16 sm:top-12 top-6 text-white font-normal z-10">
          WinZon
        </h3>
        <div className="lg:absolute right-0 top-0 grid sm:grid-cols-2 lg:grid-cols-2 grid-cols-1 sm:w-fit w-full gap-0">
          <div className="relative sm:p-6 p-3 font-titillium bg-[#113148] max-h-full 2xl:h-[359px] xl:h-[340px] lg:h-[270px] sm:h-[270px] h-auto min-h-[270px] 2xl:w-[377px] xl:w-[350px] lg:w-[285px] sm:w-full w-full max-sm:mt-4 flex flex-col justify-between overflow-hidden">
            <div className="grid xl:gap-5 md:gap-4 gap-2.5 flex-shrink-0">
              <div className="sm:p-[15px] p-2 bg-[#1B3A50] rounded-full w-fit h-fit">
                <SvgIcon
                  type="innovative"
                  normalColor="white"
                  className="w-6 h-6 sm:w-[30px] sm:h-[30px]"
                />
              </div>
              <h4 className="xl:text-3xl md:text-2xl sm:text-xl text-lg text-white font-semibold leading-tight">
                Innovation-Driven
              </h4>
            </div>
            <p className="text-white sm:pt-3 pt-2 mt-2 sm:mt-3 border-t border-solid border-white/25 xl:text-base sm:text-sm text-xs flex-shrink-0">
              Comprehensive systems designed to enhance energy efficiency,
              maximize comfort, and promote long-term sustainability.
            </p>
          </div>
          <div className="max-h-full 2xl:h-[359px] xl:h-[340px] lg:h-[270px] sm:h-[270px] h-auto min-h-[270px] 2xl:w-[377px] xl:w-[350px] lg:w-[285px] sm:w-full w-full relative lg:bg-theme-color/20 lg:backdrop-blur-sm sm:p-6 p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex-shrink-0">
              <h3 className="font-titillium lg:text-white text-theme-color 2xl:text-[88px] xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold leading-none">
                10
                <span className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-normal">YEAR</span>
              </h3>
            </div>
            <div className="font-archivo grid xl:gap-7 sm:gap-4 gap-2.5 flex-shrink-0 pt-2 sm:pt-3 sm:pt-4">
              <h4 className="md:text-2xl sm:text-xl text-lg lg:text-white text-theme-color">
                Product Warranty
              </h4>
              <p className="pt-2 sm:pt-3 sm:pt-4 border-t border-solid lg:border-white/25 border-black/25 xl:text-base sm:text-sm text-xs lg:text-[#DCDCDC] text-[#777777]">
                Winzone is trusted by homeowners, architects, and builders who
                demand nothing less than excellence.
              </p>
            </div>
          </div>
          <div className="max-h-full 2xl:h-[359px] xl:h-[340px] lg:h-[270px] sm:h-[270px] h-auto min-h-[270px] 2xl:w-[377px] xl:w-[350px] lg:w-[285px] sm:w-full w-full relative lg:bg-theme-color/20 lg:backdrop-blur-sm sm:p-6 p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex-shrink-0">
              <SvgIcon
                type="v4"
                className="xl:w-[87px] xl:h-[87px] md:w-16 md:h-16 sm:w-14 sm:h-14 w-12 h-12 lg:fill-white fill-theme-color"
              />
            </div>
            <div className="font-archivo grid xl:gap-7 md:gap-4 gap-2.5 flex-shrink-0 pt-2 sm:pt-3 sm:pt-4">
              <h4 className="xl:text-3xl md:text-2xl sm:text-xl text-lg font-semibold lg:text-white text-theme-color">
                WinZon
              </h4>
              <p className="pt-2 sm:pt-3 xl:pt-4 border-t lg:text-[#DCDCDC] text-[#777777] border-solid lg:border-white/25 border-black/25 xl:text-base sm:text-sm text-xs">
                innovating for Energy, Comfort & Sustainability Trusted by those
                who value quality, precision, and performance.
              </p>
            </div>
          </div>
          <div className="relative 2xl:h-[359px] xl:h-[340px] lg:h-[270px] sm:h-[270px] h-auto 2xl:w-[377px] xl:w-[350px] lg:w-[285px] sm:w-full w-full overflow-hidden">
            <Image
              src="/img/about-us-info-dashboard.webp"
              width={377}
              height={359}
              alt="Dashboard About us section Info Image"
              className="w-full h-full object-cover"
            />
            <div className="md:px-6 px-4 absolute md:bottom-6 bottom-4 w-full">
              <Link
                href="/about-us"
                className="bg-white py-2.5 px-7 flex w-full justify-between text-theme-color font-semibold rounded-xl"
              >
                View All
                <div className="p-1 bg-white rounded-full">
                  <ArrowRightIcon color="#29485F" size="20" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
