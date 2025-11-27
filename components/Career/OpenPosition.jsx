import React from "react";
import CommonTitle from "../Common/CommonTitle";
import Image from "next/image";
import SvgIcon from "../Common/SvgIcon";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const OpenPositionInfo = [
  {
    imgSrc: "/img/career-position-1.webp",
    title: "Sales Executive",
    position: "Sales",
    poitionColor: "text-[#363F72]",
    positionBgColor: "bg-[#363F72]/6",
    description:
      "Drive revenue growth by identifying new business opportunities and managing client relationships.",
    location: "Mumbai, India",
    jobType: "Full-time",
    keyRequirements: [
      "2+ years sales experience",
      "Excellent communication",
      "Target-oriented",
    ],
  },
  {
    imgSrc: "/img/career-position-2.webp",
    title: "Marketing Specialist",
    position: "Marketing",
    poitionColor: "text-[#B93815]",
    positionBgColor: "bg-[#B93815]/6",
    description:
      "Create and execute marketing campaigns to enhance brand visibility and engagement.",
    location: "Delhi, India",
    jobType: "Full-time",
    keyRequirements: [
      "Digital marketing expertise",
      "Creative thinking",
      "Analytics skills",
    ],
  },
  {
    imgSrc: "/img/career-position-3.webp",
    title: "Project Manager",
    position: "Projects",
    poitionColor: "text-[#175CD3]",
    positionBgColor: "bg-[#175CD3]/6",
    description:
      "Lead cross-functional teams to deliver projects on time and within budget.",
    location: "Bangalore, India",
    jobType: "Full-time",
    keyRequirements: [
      "PMP certification preferred",
      "Agile methodology",
      "5+ years experience",
    ],
  },
];

const OpenPosition = () => {
  return (
    <section className="section-container global-grid-responsive">
      <CommonTitle
        tag="ABOUT PRODUCT"
        extraTagCss="bg-theme-color/6"
        title="OPEN POSITIONS"
        extraTitleCss="xl:w-max-w-[548px] lg:max-w-[500px]"
        description="Explore exciting opportunities to grow, learn, and make a meaningful impact while building your career with us."
        extraDescriptionCss=" xl:max-w-[650px] lg:max-w-[520px]"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 h-fit">
        {OpenPositionInfo.map((item, index) => (
          <div
            className="font-archivo grid sm:gap-6 gap-3 sm:px-6 px-4 sm:py-9 py-6 border border-solid border-[#EBEBEB] shadow-[0px_0px_32.1px_0px_#0000000F] rounded-xl"
            key={index}
          >
            <Image
              src={item.imgSrc}
              width={362}
              height={212}
              alt={`${item.title} Image`}
              className="w-full"
            />
            <div className="grid sm:gap-4 gap-3 h-fit">
              <div className="grid gap-2">
                <div className="max-sm:flex-col-reverse flex gap-2 justify-between">
                  <h3 className="text-theme-color font-semibold md:text-xl sm:text-lg text-base">
                    {item.title}
                  </h3>
                  <p
                    className={` ${item.positionBgColor} ${item.poitionColor} py-1 px-2.5 sm:px-3 rounded-2xl sm:text-sm text-xs h-fit w-fit font-medium`}
                  >
                    {item.position}
                  </p>
                </div>
                <p className="text-[#777777] sm:text-base text-xs">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex gap-1 sm:gap-1.5 items-center pr-2 sm:pr-3 sm:border-r border-solid border-[#E7E7E7]">
                  <SvgIcon
                    type="location"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    normalColor="#777777"
                  />
                  <p className="font-medium text-xs sm:text-sm text-[#777777]">
                    {item.location}
                  </p>
                </div>
                <div className="flex gap-1 sm:gap-1.5 items-center">
                  <SvgIcon
                    type="clock"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    normalColor="#777777"
                  />
                  <p className="font-medium text-xs sm:text-sm text-[#777777]">
                    {item.jobType}
                  </p>
                </div>
              </div>
              <div className="grid gap-2">
                <h4 className="text-theme-color font-medium sm:text-base text-sm">
                  Key Requirements:
                </h4>
                <ul className="grid gap-1.5 sm:gap-2">
                  {item.keyRequirements.map((feature, index2) => (
                    <li
                      key={index2}
                      className="text-[#777777] sm:text-base text-xs list-disc ml-4"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl flex gap-2 sm:gap-2.5 font-semibold text-theme-color font-archivo items-center border border-solid justify-center border-theme-color/22 h-fit text-sm sm:text-base"
            >
              Apply Now
              <div className="p-1 bg-[#F3F3F3] rounded-full">
                <ArrowRightIcon color="#29485F" size="20" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenPosition;
