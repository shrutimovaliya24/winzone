import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Excellent Value",
    description: "Affordable pricing with reliable performance and quality, perfect for budget-conscious homeowners.",
  },
  {
    icon: "safety",
    title: "Space-Saving Design",
    description: "Sliding mechanism eliminates the need for swing clearance, perfect for modern living spaces.",
  },
  {
    icon: "greenBuilding",
    title: "Thermal Performance",
    description: "Thermal break technology ensures good energy efficiency and comfort year-round.",
  },
  {
    icon: "innovative",
    title: "Smooth Operation",
    description: "Quality sliding hardware ensures smooth operation with minimal effort.",
  },
  {
    icon: "safety",
    title: "Security Features",
    description: "Multi-point locking systems provide enhanced security and peace of mind for your home.",
  },
  {
    icon: "rocket",
    title: "Weather Resistance",
    description: "Weather-resistant seals ensure optimal performance in all conditions.",
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
          description="Discover the exceptional features that make our Essential sliding windows and doors stand out"
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


