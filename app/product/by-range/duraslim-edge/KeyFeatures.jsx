import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Ultra-Slim Frames",
    description: "Minimal frame design maximizes glass area and provides unobstructed views with the thinnest possible profiles.",
  },
  {
    icon: "safety",
    title: "Maximum Natural Light",
    description: "Minimal frames allow for maximum glass area, flooding your space with natural light.",
  },
  {
    icon: "greenBuilding",
    title: "Thermal Performance",
    description: "Advanced thermal break technology ensures optimal energy efficiency despite minimal frames.",
  },
  {
    icon: "innovative",
    title: "Modern Aesthetics",
    description: "Sleek, minimalist design enhances architectural aesthetics with clean lines and unobstructed views.",
  },
  {
    icon: "safety",
    title: "Multiple Products",
    description: "Range includes minimal windows, lift and slide doors, and slide and fold doors for various applications.",
  },
  {
    icon: "rocket",
    title: "Weather Resistance",
    description: "Durable construction with weather-resistant seals ensures optimal performance in all conditions.",
  },
];

const KeyFeatures = () => {
  return (
    <div className="section-container">
      <CommonTitle
          tag="KEY FEATURES"
          extraTagCss="bg-theme-color/6"
          title="KEY FEATURES"
          extraTitleCss=""
          description="Discover the exceptional features of the Duraslim Edge range"
          extraDescriptionCss="max-w-[650px]"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 md:pt-10 sm:pt-8 pt-6">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="sm:p-6 p-4 bg-white rounded-xl border border-solid border-[#EBEBEB] hover:shadow-[0px_0px_32.1px_0px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="p-4 bg-theme-color rounded-full w-fit mb-4">
                <SvgIcon
                  type={feature.icon}
                  normalColor="white"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl text-theme-color font-semibold mb-2 font-titillium">
                {feature.title}
              </h3>
              <p className="text-[#777777] sm:text-base text-sm font-archivo">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default KeyFeatures;


