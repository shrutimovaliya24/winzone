import React from "react";
import FeatureSwiperCard from "./components/FeatureSwiperCard";
import CommonTitle from "@/components/Common/CommonTitle";

const FeatureSection = () => {
  return (
    <section className="section-container ">
      <CommonTitle
        tag="PRODUCT"
        extraTagCss="bg-theme-color/6"
        title="OUR PRODUCTS"
        extraTitleCss="xl:w-max-w-[548px] lg:max-w-[500px]"
        description="Discover our comprehensive range of premium aluminum windows, doors, and architectural systems designed to meet the highest standards of quality, performance, and aesthetics."
        extraDescriptionCss=" xl:max-w-[650px] lg:max-w-[520px]"
      />
      <FeatureSwiperCard />
    </section>
  );
};

export default FeatureSection;
