import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDetail = ({
  title = "Luxury Villa Estate",
  description = "Bespoke window and door solutions for an oceanfront luxury villa featuring panoramic folding glass walls and custom aluminum frames.",
  productDescription = "A green urban park designed to blend recreational spaces with environmental sustainability.",
  imgSrc = "/img/residential-construction-1.webp",
  ProjectDetailInfo = [
    {
      text: "Client",
      value: "Wade Warren",
    },
    {
      text: "Location",
      value: "New York, USA",
    },
    {
      text: "Category",
      value: "Residential Construction",
    },
    {
      text: "Time",
      value: "08 Months",
    },
    {
      text: "Status",
      value: "Under Construction",
    },
  ],
  projectOverviewParagraph = [
    "We are leading manufacturers and suppliers of high quality Louvers Design Windows in India.",
    "Sit vulputate aliquam cras aliquam. Et, nibh congue consequat pellentesque. Metus fermentum dui pellentesque morbi volutpat commodo viverra. Feugiat nulla non mattis mi. Bibendum diam tempus ultrices ultricies viverra. Feugiat placerat viverra tortor orci feugiat. Scelerisque dictum consequat egestas enim, at orci. Eu a posuere aliquam sed aliquam tortor non. Morbi id massa interdum nam tellus. Magna nunc interdum tellus neque auctor sagittis.",
    "Aluminum louvers include their functionality, durability, versatility, and architectural appeal. In addition to controlling light, visibility, ventilation, and protection, they add a modern touch. Whether used for residential, commercial, or industrial applications, aluminum Louvers Design For Wall are a popular choice due to their practical and aesthetic benefit",
  ],
  imageSrc2 = "/img/residential-construction-2.webp",
  projectOverviewParagraph2 = [
    "We are leading manufacturers and suppliers of high quality Louvers Design Windows in India.",
    "Sit vulputate aliquam cras aliquam. Et, nibh congue consequat pellentesque. Metus fermentum dui pellentesque morbi volutpat commodo viverra. Feugiat nulla non mattis mi. Bibendum diam tempus ultrices ultricies viverra. Feugiat placerat viverra tortor orci feugiat. Scelerisque dictum consequat egestas enim, at orci. Eu a posuere aliquam sed aliquam tortor non. Morbi id massa interdum nam tellus. Magna nunc interdum tellus neque auctor sagittis.",
    "Aluminum louvers include their functionality, durability, versatility, and architectural appeal. In addition to controlling light, visibility, ventilation, and protection, they add a modern touch. Whether used for residential, commercial, or industrial applications, aluminum Louvers Design For Wall are a popular choice due to their practical and aesthetic benefit",
  ],
  keyFeature = [
    "premium anuminium frames",
    "double glazed glass for noise reduction",
    "weather rosistant coating",
    "energy effecient design",
  ],
}) => {
  return (
    <div className="section-container global-grid-responsive">
      <section className="grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
        <div className="grid sm:gap-5 gap-3">
          <h1 className="text-black font-bold xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-titillium">
            {title}
          </h1>
          <p className="font-archivo md:text-xl text-lg">{description}</p>
        </div>
        <div className="lg:flex grid sm:gap-6 gap-4 ">
          <Image
            src={imgSrc}
            width={778}
            height={541}
            alt={`${title} Image`}
            className="object-fill max-h-[521px] xl:w-full xl:max-w-full lg:max-w-[600px] rounded-[10px]"
          />
          <div className="sm:p-6 p-4 bg-[#F7F7F7] border border-solid border-[#EBEBEB] h-fit grid sm:gap-6 gap-4 rounded-xl lg:max-w-[367px]">
            <h3 className="text-black font-bold text-2xl-responsive sm:pb-6 pb-4 border-b border-solid border-[#D6D6D6] font-titillium">
              PROJECT DETAILS
            </h3>
            <div className="grid content-between justify-between sm:gap-6 gap-4">
              <p className="text-[#777777] md:text-lg text-base font-archivo ">
                {productDescription}
              </p>
              <div className="grid sm:gap-4 gap-2">
                {ProjectDetailInfo.map((item, index) => (
                  <div
                    key={index}
                    className="sm:flex grid justify-between font-archivo gap-2"
                  >
                    <h4 className="text-black font-medium md:text-lg text-base">
                      {item.text}
                    </h4>
                    <p className="text-[#777777] md:text-lg text-base">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-xl flex gap-2.5 font-semibold text-theme-color font-archivo items-center border border-solid justify-center border-theme-color/22"
              >
                Contact Us
                <div className="p-1 bg-[#F3F3F3] rounded-full">
                  <ArrowRightIcon color="#29485F" size="20" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="grid xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6">
        <div className="grid gap-3">
          <h2 className="text-theme-color font-bold font-titillium xl:text-[42px] lg:text-4xl text-3xl ">
            PROJECT OVERVIEW
          </h2>
          <div className="grid sm:gap-4 gap-1">
            {projectOverviewParagraph.map((item, index) => (
              <p
                key={index}
                className="text-[#777777] lg:text-lg sm:text-base text-sm font-archivo"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <Image
          src={imageSrc2}
          width={1169}
          height={553}
          alt={`${title} Image 2`}
          className="w-full rounded-[10px]"
        />
        <div className="grid sm:gap-4 gap-1">
          {projectOverviewParagraph2.map((item, index) => (
            <p
              key={index}
              className="text-[#777777] lg:text-lg sm:text-base text-sm font-archivo"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="grid sm:gap-6 gap-3">
          <h3 className="text-theme-color font-bold font-titillium lg:text-[28px] md:text-2xl text-xl">
            KET FEATURES & MATERIALS USED
          </h3>
          <div className="grid sm:gap-4 gap-1">
            {keyFeature.map((item, index) => (
              <p
                key={index}
                className="text-[#777777] font-archivo lg:text-lg md:text-base text-sm"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
