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
        <h3 className="font-bacasime 2xl:text-[90px] xl:text-7xl lg:text-6xl absolute 2xl:left-24 xl:left-20 lg:left-16 2xl:top-29 xl:top-24 lg:top-20 text-white font-normal">
          WinZon
        </h3>
        <div className="lg:absolute right-0 top-0 grid sm:grid-cols-2 sm:w-fit w-full  max-sm:px-4">
          <div className="relative sm:p-6 p-4 font-titillium bg-[#113148] max-h-full 2xl:h-[359px] xl:h-[340px] sm:h-[270px] h-auto 2xl:w-[377px] xl:w-[350px] lg:w-[285px] sm:w-full w-full max-sm:mt-4 flex flex-col">
            <div className="flex items-center justify-between max-sm:gap-2 sm:mb-4 mb-3">
              <h4 className="xl:text-3xl md:text-2xl sm:text-xl text-lg text-white font-semibold max-sm:flex-1">
                Innovation-Driven
              </h4>
              <div className="sm:p-3 p-2 bg-[#1B3A50] rounded-full w-fit h-fit flex-shrink-0">
                <SvgIcon
                  type="innovative"
                  normalColor="white"
                  className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]"
                />
              </div>
            </div>
            <p className="text-white border-t border-solid border-white/25 sm:pt-3 pt-2 xl:text-base sm:text-sm text-xs flex-1">
              Comprehensive systems designed to enhance energy efficiency,
              maximize comfort, and promote long-term sustainability.
            </p>
          </div>
          <div className="max-h-full 2xl:h-[359px] xl:h-[340px] sm:h-[270px] h-auto 2xl:w-[377px] xl:w-[350px] lg:w-[285px] sm:w-full w-full relative lg:bg-theme-color/20 lg:backdrop-blur-sm sm:p-6 p-4 flex flex-col">
            <div className="flex items-center justify-between max-sm:gap-2 sm:mb-4 mb-3">
              <h4 className="md:text-2xl sm:text-xl text-lg lg:text-white text-theme-color font-semibold max-sm:flex-1">
                Product Warranty
              </h4>
              <div className="text-right flex-shrink-0">
                <h3 className="font-titillium lg:text-white text-theme-color 2xl:text-[40px] xl:text-[35px] lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
                  10
                  <span className="xl:text-sm lg:text-xs md:text-xs sm:text-xs text-[10px] font-normal block">YEAR</span>
                </h3>
              </div>
            </div>
            <p className="border-t border-solid lg:border-white/25 border-black/25 sm:pt-3 pt-2 xl:text-base sm:text-sm text-xs lg:text-[#DCDCDC] text-[#777777] flex-1">
              Winzone is trusted by homeowners, architects, and builders who
              demand nothing less than excellence.
            </p>
          </div>
          <div className="max-h-full 2xl:h-[359px] xl:h-[340px] sm:h-[270px] h-auto 2xl:w-[377px] xl:w-[350px] lg:w-[285px] sm:w-full w-full relative lg:bg-theme-color/20 lg:backdrop-blur-sm sm:p-6 p-4 flex flex-col">
            <div className="flex items-center justify-between max-sm:gap-2 sm:mb-4 mb-3">
              <h4 className="xl:text-3xl md:text-2xl sm:text-xl text-lg font-semibold lg:text-white text-theme-color max-sm:flex-1">
                WinZon
              </h4>
              <SvgIcon
                type="v4"
                className="xl:w-[60px] xl:h-[60px] md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 lg:fill-white fill-theme-color flex-shrink-0"
              />
            </div>
            <p className="border-t lg:text-[#DCDCDC] text-[#777777] border-solid lg:border-white/25 border-black/25 sm:pt-3 pt-2 xl:text-base sm:text-sm text-xs flex-1">
              innovating for Energy, Comfort & Sustainability Trusted by those
              who value quality, precision, and performance.
            </p>
          </div>
          <div className="relative sm:p-6 p-4 2xl:h-[359px] xl:h-[340px] sm:h-[270px] h-[200px] 2xl:w-[377px] xl:w-[350px] lg:w-[285px] sm:w-full w-full overflow-hidden">
            <Image
              src="/img/about-us-info-dashboard.webp"
              width={377}
              height={359}
              alt="Dashboard About us section Info Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute sm:bottom-6 bottom-4 sm:left-6 left-4 sm:right-6 right-4">
              <Link
                href="/about-us"
                className="bg-white sm:py-2.5 py-2 sm:px-7 px-5 flex w-full justify-between text-theme-color font-semibold rounded-xl sm:text-base text-sm"
              >
                View All
                <div className="p-1 bg-white rounded-full">
                  <ArrowRightIcon color="#29485F" size={20} />
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
