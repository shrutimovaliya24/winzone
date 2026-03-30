import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Local Presence",
    description: "Right here in Chennai for personal service, quick help, and fast response times.",
  },
  {
    icon: "safety",
    title: "Climate Suited",
    description: "Solutions designed for Chennai's hot, humid weather with great thermal performance.",
  },
  {
    icon: "greenBuilding",
    title: "Fast Delivery",
    description: "Fast delivery and professional installation for every Chennai project.",
  },
  {
    icon: "innovative",
    title: "Complete Solutions",
    description: "Solutions for homes, offices, shops, and industrial buildings across Chennai.",
  },
  {
    icon: "safety",
    title: "Premium Quality",
    description: "Premium aluminium windows and doors with great thermal performance and durability.",
  },
  {
    icon: "rocket",
    title: "Expert Support",
    description: "Always here to help with advice, consultation, and reliable after-sales support.",
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
        description="Discover the exceptional features of our Chennai windows and doors service"
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
