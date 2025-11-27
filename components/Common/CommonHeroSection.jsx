import React from "react";
import CommonTitle from "./CommonTitle";
import Image from "next/image";

const CommonHeroSection = ({
  title = "ABOUT WINZONE",
  description = "For over 15 years, we've been transforming spaces with innovative designs, premium materials, and unmatched craftsmanship that stands the test of time.",
  extraTitleCss = "xl:max-w-[548px]",
  extraDescriptionCss = "max-w-[700px]",
  imgSrc = "/img/about-us-herosection.webp",
}) => {
  return (
    <section className="relative">
      <Image
        src={imgSrc}
        width={1440}
        height={592}
        alt={`${title} Image`}
        className="object-cover w-full xl:min-h-[736px] xl:max-h-[860px] lg:min-h-[650px] lg:max-h-[900px] md:min-h-[800px] md:max-h-[930px] sm:min-h-[770px] sm:max-h-[880px] min-h-[800px] max-h-[850px] h-[calc(100vh-90px)]"
      />
      <div className="absolute inset-0 flex items-center container mx-auto lg:px-12 md:px-10 sm:px-8 px-4">
        <CommonTitle
          heroSection={true}
          extraTagCss="hidden"
          title={title}
          extraTitleCss={extraTitleCss}
          description={description}
          extraDescriptionCss={extraDescriptionCss}
          gridView={true}
        />
      </div>
    </section>
  );
};

export default CommonHeroSection;
