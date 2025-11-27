import CommonTitle from "@/components/Common/CommonTitle";
import React from "react";
import ProductSlider from "./Components/ProductSlider";

const OurWork = () => {
  return (
    <section className="bg-[#F7F7F7] sm:py-6 py-4 md:py-9 lg:py-12 xl:py-16">
      <div className="sm:px-8 px-4 container mx-auto">
        <CommonTitle
          tag="OUR WORK"
          extraTagCss="bg-theme-color/6"
          title="GALLERY GLASS FACADE"
          extraTitleCss=""
          extraDescriptionCss="hidden"
          gridView={true}
        />
        <ProductSlider />
      </div>
    </section>
  );
};

export default OurWork;
