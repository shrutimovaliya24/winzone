import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Versatile Opening",
    description: "Dual opening modes - tilt for ventilation or full turn for maximum airflow and easy cleaning.",
  },
  {
    icon: "safety",
    title: "Enhanced Security",
    description: "Multi-point locking systems in both opening modes provide excellent security and peace of mind.",
  },
  {
    icon: "greenBuilding",
    title: "Thermal Performance",
    description: "Advanced thermal break technology ensures optimal energy efficiency and comfort year-round.",
  },
  {
    icon: "innovative",
    title: "Easy Maintenance",
    description: "Inward opening design allows for safe and convenient cleaning from inside your home.",
  },
  {
    icon: "safety",
    title: "Weather Resistance",
    description: "Durable construction with weather-resistant seals ensures optimal performance in all conditions.",
  },
  {
    icon: "rocket",
    title: "Smooth Operation",
    description: "High-quality hardware ensures effortless operation with smooth opening and closing mechanisms.",
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
          description="Discover the exceptional features that make our Duraslim tilt and turn windows stand out"
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


