import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const keyFeatures = [
  {
    icon: "energy",
    title: "Local Presence",
    description: "Right here in Hyderabad for personal service, fast support, and quick response times.",
  },
  {
    icon: "safety",
    title: "Climate Suited",
    description: "Solutions designed for Hyderabad's hot summers with excellent thermal performance.",
  },
  {
    icon: "greenBuilding",
    title: "Quick Delivery",
    description: "Fast delivery and expert installation for every Hyderabad project.",
  },
  {
    icon: "innovative",
    title: "All-in-One Solutions",
    description: "Complete solutions for homes, offices, shops, and industrial buildings in Hyderabad.",
  },
  {
    icon: "safety",
    title: "Quality Products",
    description: "High-quality aluminium windows and doors that keep your home cool and comfortable.",
  },
  {
    icon: "rocket",
    title: "Expert Support",
    description: "Ongoing support and local expertise for consultation, design, and after-sales service.",
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
        description="Discover the exceptional features of our Hyderabad windows and doors service"
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
