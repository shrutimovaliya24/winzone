import { ArrowRightIcon } from "lucide-react";
import React from "react";

const CommonTitle = ({
  tag = "About us",
  extraTagCss = "bg-theme-color/6",
  title = "Excellence in Every Detail",
  extraTitleCss = "lg:max-w-[548px]",
  description = "Our expertise lies in crafting aluminium windows, doors, sliding systems, facades, and partitions that meet international quality standards. With a customer-first approach, we ensure every project is handled with care, from design consultation to installation and after-sales service.",
  extraDescriptionCss = " xl:max-w-[650px] lg:max-w-[520px]",
  gridView = false,
  gridCenter = false,
  heroSection = false,
  button = false,
}) => {
  return (
    <div
      className={` ${
        gridView
          ? `grid ${
              gridCenter
                ? "justify-center justify-items-center text-center"
                : "justify-between"
            } `
          : "lg:flex grid justify-between"
      } lg:gap-6 gap-3 ${button && "items-center"}`}
    >
      <div
        className={`grid gap-1.5 h-fit font-titillium ${
          gridCenter && "justify-center justify-items-center"
        }`}
      >
        <p
          className={`py-1 px-3.5 text-theme-color border-[0.4px] border-solid border-theme-color text-xs font-semibold w-fit h-fit rounded-full ${extraTagCss} `}
        >
          {tag}
        </p>
        {heroSection ? (
          <h1
            className={`font-bold xl:text-7xl md:text-6xl sm:text-5xl text-4xl text-white ${extraTitleCss}`}
          >
            {title}
          </h1>
        ) : (
          <h2
            className={`font-bold xl:text-[42px] lg:text-4xl sm:text-3xl text-2xl text-theme-color ${extraTitleCss}`}
          >
            {title}
          </h2>
        )}
      </div>
      {button ? (
        <button className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-theme-color flex gap-2 sm:gap-2.5 font-semibold text-white font-archivo w-fit h-fit items-center text-sm sm:text-base">
          View All
          <div className="p-1 bg-white rounded-full">
            <ArrowRightIcon color="#29485F" size="20" />
          </div>
        </button>
      ) : (
        <p
          className={`${extraDescriptionCss} ${
            heroSection
              ? "lg:text-xl sm:text-lg text-sm sm:text-base text-[#B0B0B0]"
              : "lg:text-lg sm:text-base text-xs sm:text-sm text-[#777777]"
          } text-[#777777] font-archivo `}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default CommonTitle;
