import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Local Presence",
    description: "Local presence in Rajkot ensures personalized service, quick response times, and ongoing support.",
  },
  {
    icon: "safety",
    title: "Climate Suited",
    description: "Solutions designed for Rajkot's climate with excellent thermal performance and weather resistance.",
  },
  {
    icon: "greenBuilding",
    title: "Timely Service",
    description: "Quick delivery and installation for Rajkot projects with local expertise and service.",
  },
  {
    icon: "innovative",
    title: "Comprehensive Solutions",
    description: "Complete solutions for residential, commercial, and industrial projects in Rajkot.",
  },
  {
    icon: "safety",
    title: "Quality Products",
    description: "Premium aluminium windows and doors with excellent thermal performance and durability.",
  },
  {
    icon: "rocket",
    title: "Expert Support",
    description: "Local expertise and service for consultation, design, and ongoing support for your project.",
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
          description="Discover the exceptional features of our Rajkot windows and doors service"
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


