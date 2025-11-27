import React from "react";
import CommonTitle from "../Common/CommonTitle";
import SvgIcon from "../Common/SvgIcon";

const LifeAtWinzoneInfo = [
  {
    icon: "heart",
    title: "Work-Life Balance",
    description:
      "We believe in maintaining a healthy balance between professional growth and personal well-being.",
  },
  {
    icon: "excellence",
    title: "Collaborative Culture",
    description:
      "Join a team where ideas flow freely, creativity thrives, and every voice is valued and heard.",
  },
  {
    icon: "rocket",
    title: "Growth Opportunities",
    description:
      "Continuous learning and development programs to help you reach your full potential.",
  },
  {
    icon: "achievements",
    title: "Recognition & Rewards",
    description:
      "Your hard work and dedication are acknowledged and rewarded through various recognition programs.",
  },
];

const LifeAtWinzone = () => {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="section-container global-grid-responsive">
        <CommonTitle
          tag="ABOUT PRODUCT"
          extraTagCss="bg-theme-color/6"
          title="LIFE AT WINZON"
          extraTitleCss="xl:w-max-w-[548px] lg:max-w-[500px]"
          description="At Winzon, we’re a community that nurtures talent, celebrates diversity, and inspires your journey."
          extraDescriptionCss=" xl:max-w-[650px] lg:max-w-[520px]"
        />
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-6 xl:justify-between z-10">
          {LifeAtWinzoneInfo.map((item, idx) => (
            <div
              key={idx}
              className="p-2 bg-[#113148]/20 rounded-xl font-archivo"
            >
              <div className="bg-[#113148] shadow-[0px_0px_34.7px_0px_#00000012] sm:p-6 p-3 grid sm:gap-6 gap-2.5 rounded-xl border h-full">
                <div className="p-3 sm:p-4 bg-[#0D293E] shadow-[4px_5px_25.7px_0px_#518BB540] rounded-full w-fit h-fit">
                  <SvgIcon
                    type={item.icon}
                    normalColor="white"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div className="grid gap-1 h-fit">
                  <h3 className="md:text-xl sm:text-lg text-base text-white font-bold">
                    {item.title}
                  </h3>
                  <p className="md:text-lg sm:text-base text-sm text-[#B4B4B4]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtWinzone;
