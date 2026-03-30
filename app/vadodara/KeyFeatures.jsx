import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Local Presence",
    description: "Strong local presence in Vadodara ensures quick response, personal attention, and ongoing support.",
  },
  {
    icon: "safety",
    title: "Climate Suited",
    description: "Solutions designed for Vadodara's hot summers and heavy monsoons with excellent weather resistance.",
  },
  {
    icon: "greenBuilding",
    title: "Timely Service",
    description: "On-time delivery and smooth professional installation for all Vadodara projects.",
  },
  {
    icon: "innovative",
    title: "Comprehensive Solutions",
    description: "Complete solutions for homes, offices, showrooms, and industrial spaces in Vadodara.",
  },
  {
    icon: "safety",
    title: "Quality Products",
    description: "Premium aluminium windows and doors that are strong, stylish, and long-lasting.",
  },
  {
    icon: "rocket",
    title: "Expert Support",
    description: "Friendly local support with consultation, design, and reliable after-sales service in Vadodara.",
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
        description="Discover the exceptional features of our Vadodara windows and doors service"
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
