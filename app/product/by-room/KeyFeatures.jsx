import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Room-Specific Design",
    description: "Solutions tailored to meet the unique requirements of bedrooms, living rooms, kitchens, and balconies.",
  },
  {
    icon: "safety",
    title: "Bedroom Solutions",
    description: "Windows with excellent sound insulation and privacy features for peaceful sleeping environments.",
  },
  {
    icon: "greenBuilding",
    title: "Living Room Solutions",
    description: "Windows with maximum natural light and seamless indoor-outdoor connections for bright spaces.",
  },
  {
    icon: "innovative",
    title: "Kitchen Solutions",
    description: "Windows with excellent ventilation and easy maintenance for functional cooking spaces.",
  },
  {
    icon: "safety",
    title: "Balcony Solutions",
    description: "Windows with superior weather resistance and security for outdoor connections.",
  },
  {
    icon: "rocket",
    title: "Energy Efficiency",
    description: "All room solutions feature thermal break technology ensuring optimal energy efficiency.",
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
          description="Discover the exceptional features of our room-specific windows and doors"
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


