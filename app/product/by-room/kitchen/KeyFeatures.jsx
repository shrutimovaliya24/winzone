import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Thermal Insulation",
    description: "Advanced thermal break technology keeps your kitchen comfortable year-round while reducing energy costs.",
  },
  {
    icon: "safety",
    title: "Excellent Ventilation",
    description: "Optimal airflow design ensures fresh air circulation and efficient removal of cooking fumes.",
  },
  {
    icon: "greenBuilding",
    title: "Moisture Resistance",
    description: "Durable aluminium frames withstand kitchen humidity and moisture while maintaining their appearance.",
  },
  {
    icon: "innovative",
    title: "Easy to Clean",
    description: "Smooth surfaces and modern design make cleaning and maintenance effortless in kitchen environments.",
  },
  {
    icon: "safety",
    title: "Multi-Point Locking",
    description: "Advanced locking mechanisms provide enhanced security and peace of mind for your kitchen.",
  },
  {
    icon: "rocket",
    title: "Smooth Operation",
    description: "Effortless operation with smooth sliding and opening mechanisms for easy daily use.",
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
          description="Discover the exceptional features that make our kitchen windows and doors stand out"
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

