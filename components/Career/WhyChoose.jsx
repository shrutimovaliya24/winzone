import React from "react";
import CommonTitle from "../Common/CommonTitle";
import Image from "next/image";

const WhyChooseUsInfo = [
  {
    title: "15+",
    value: "Years of Excellence",
  },
  {
    title: "1000+",
    value: "Projects Delivered",
  },
  {
    title: "500+",
    value: "Happy Employees",
  },
  {
    title: "100%",
    value: "Growth-Oriented Culture",
  },
];

const WhyChoose = () => {
  return (
    <section className="section-container lg:flex grid items-center md:gap-10 sm:gap-8 gap-6">
      <Image
        src="/img/career-why-choose-us.webp"
        width={458}
        height={364}
        alt="Why Choose Winzon Image"
        className="w-full lg:max-h-[364px] lg:max-w-[458px]"
      />
      <div className="grid md:gap-8 sm:gap-6 gap-4">
        <CommonTitle
          tag="ABOUT PRODUCT"
          extraTagCss="bg-theme-color/6"
          title="WHY CHOOSE WINZON?"
          extraTitleCss="pt-3"
          description="At Winzon, we don’t just build products - we build careers. Here, every individual is encouraged to innovate, collaborate, and grow beyond limits. With a culture that nurtures talent, celebrates creativity, and provides endless opportunities."
          extraDescriptionCss=""
          gridView={true}
        />
        <div className="xl:flex grid sm:grid-cols-2 grid-cols-1 max-lg:justify-center max-lg:justify-items-center max-lg:text-center xl:gap-6 gap-8 h-fit">
          {WhyChooseUsInfo.map((item, index) => (
            <div key={index} className="flex">
              <div
                className={` ${
                  WhyChooseUsInfo.length - 1 !== index ? "xl:mr-8" : ""
                }`}
              >
                <h4 className="font-titillium text-theme-color lg:text-[32px] sm:text-3xl text-2xl font-semibold">
                  {item.title}
                </h4>
                <p className="text-[#777777] font-archivo sm:text-base text-sm">
                  {item.value}
                </p>
              </div>
              {WhyChooseUsInfo.length - 1 !== index && (
                <div className="xl:block hidden my-3 w-[1px] border-[0.5px] border-solid border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
