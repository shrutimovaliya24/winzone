import SvgIcon from "@/components/Common/SvgIcon";
import React from "react";

const CompanyTimelineInfo = [
  {
    id: 1,
    type: "company",
    date: "2016. December",
    title: "Company Founded",
    description:
      "Started with a vision to revolutionize windows and doors industry",
  },
  {
    id: 2,
    type: "contrast",
    date: "2018. August",
    title: "First Major Contract",
    description: "Secured our first large commercial project",
  },
  {
    id: 3,
    type: "projectCompleted",
    date: "2020. January",
    title: "500+ Projects Completed",
    description: "Reached a significant milestone in project delivery",
  },
  {
    id: 4,
    type: "award",
    date: "2022. May",
    title: "Innovation Award",
    description: "Received industry recognition for innovative designs",
  },
  {
    id: 5,
    type: "happy",
    date: "2024. December",
    title: "1000+ Happy Clients",
    description: "Celebrated serving over 1000 satisfied customers",
  },
];

const CompanyTimeline = () => {
  return (
    <div className="grid xl:gap-1 gap-3 font-archivo">
      {CompanyTimelineInfo.map((item, index) => (
        <div
          key={item.id}
          className="sm:flex grid xl:gap-8 sm:gap-6 gap-4 max-sm:p-4 max-sm:border max-sm:border-solid max-sm:border-theme-color/25 rounded-xl"
        >
          <div className="gap-1 grid sm:justify-items-center">
            <div className="p-4 border border-solid border-[#EFEFEF] bg-white rounded-full h-fit w-fit">
              <SvgIcon
                type={item.type}
                normalColor="#113148"
                className="w-6 h-6"
              />
            </div>
            {CompanyTimelineInfo.length !== item.id && (
              <div className="h-13 border border-solid border-[#DADADA] sm:block hidden" />
            )}
          </div>
          <div className="grid gap-2 h-fit">
            <p className="text-theme-color text-sm font-medium">{item.date}</p>
            <h4 className="text-theme-color font-semibold md:text-xl text-lg ">
              {item.title}
            </h4>
            <p className="text-[#777777] md:text-base text-sm xl:w-auto lg:w-[300px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyTimeline;
