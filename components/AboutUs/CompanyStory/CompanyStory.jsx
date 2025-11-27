import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import React from "react";
import CompanyTimeline from "./Components/CompanyTimeline ";

const CompanyStory = () => {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="section-container lg:flex grid lg:justify-between justify-center xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6">
        <div className="grid justify-between content-between lg:gap-12 md:gap-9 sm:gap-7 gap-5">
          <CommonTitle
            tag="COMPANY STORY"
            extraTagCss="bg-theme-color/6"
            title="OUR JOURNEY"
            extraTitleCss=""
            description="Milestones and achievements that mark our growth and commitment to excellence"
            extraDescriptionCss="max-w-[466px]"
            gridView={true}
          />
          <div className="flex gap-6">
            <Image
              src="/img/our-journey-1.webp"
              width={389}
              height={317}
              alt="Our Journey Images"
              className="xl:w-[389px] lg:w-[325px] object-cover"
            />
            <Image
              src="/img/our-journey-2.webp"
              width={218}
              height={317}
              alt="Our Journey Images"
              className="xl:w-[218px] lg:w-[180px] object-cover sm:block hidden"
            />
          </div>
        </div>
        <CompanyTimeline />
      </div>
    </section>
  );
};

export default CompanyStory;
