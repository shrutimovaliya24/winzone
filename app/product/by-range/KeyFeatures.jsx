import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Multiple Ranges",
    description: "Choose from Duraslim, Duraslim Edge, and Essential Series to find the perfect solution for your needs.",
  },
  {
    icon: "safety",
    title: "Premium Options",
    description: "Duraslim and Duraslim Edge series offer premium features with ultra-slim profiles and minimal frames.",
  },
  {
    icon: "greenBuilding",
    title: "Value Options",
    description: "Essential Series provides excellent value with reliable performance and quality at affordable prices.",
  },
  {
    icon: "innovative",
    title: "Energy Efficiency",
    description: "All ranges feature thermal break technology ensuring optimal energy efficiency across all series.",
  },
  {
    icon: "safety",
    title: "Expert Guidance",
    description: "Our team helps you choose the right range based on your requirements, budget, and preferences.",
  },
  {
    icon: "rocket",
    title: "Customizable",
    description: "Each range offers customization options to fit your space perfectly and match your aesthetic preferences.",
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
          description="Discover the exceptional features across our window and door ranges"
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


