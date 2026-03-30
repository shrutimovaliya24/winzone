import React from "react";
import CommonTitle from "../Common/CommonTitle";
import SvgIcon from "../Common/SvgIcon";

const AchievementsInfo = [
  {
    icon: "award",
    title: "ISO 9001",
    description: "International Quality Management Standard",
  },
  {
    icon: "energy",
    title: "Energy Star",
    description: "Recognized for energy-efficient and sustainable performance.",
  },
  {
    icon: "greenBuilding",
    title: "Green Building",
    description: "Committed to eco-friendly and sustainable construction.",
  },
  {
    icon: "safety",
    title: "Safety First",
    description: "Ensuring a safe and secure workplace for everyone.",
  },
  {
    icon: "achievements",
    title: "Innovation Award",
    description: "Honored for driving innovation and smart solutions.",
  },
  {
    icon: "excellence",
    title: "Customer Excellence",
    description: "Recognized for outstanding customer service and support.",
  },
];

const Achievements = () => (
  <section className="relative overflow-hidden">
    <div className="sm:px-8 px-6 section-container global-grid-responsive">
      <CommonTitle
        tag="ACHIEVEMENTS"
        extraTagCss="bg-theme-color/6"
        title="CERTIFICATIONS & AWARDS"
        extraTitleCss="xl:w-max-w-[600px] lg:max-w-[550px]"
        description="Recognition of our commitment to quality, safety, and industry excellence."
        extraDescriptionCss=" xl:max-w-[440px] lg:max-w-[520px]"
      />

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6 xl:justify-between z-10">
        {AchievementsInfo.map((item, idx) => (
          <div
            key={idx}
            className="p-2 bg-[#113148]/20 rounded-xl font-archivo"
          >
            <div className="bg-[#113148] shadow-[0px_0px_34.7px_0px_#00000012] sm:p-6 p-4 sm:flex grid sm:gap-6 gap-3 rounded-xl border h-full">
              <div className="p-4 bg-[#0D293E] shadow-[4px_5px_25.7px_0px_#518BB540] rounded-full w-fit h-fit">
                <SvgIcon
                  type={item.icon}
                  normalColor="white"
                  className="w-6 h-6"
                />
              </div>
              <div className="grid gap-1 h-fit">
                <h3 className="md:text-xl text-lg text-white font-bold">
                  {item.title}
                </h3>
                <p className="md:text-lg text-base text-[#B4B4B4]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightweight CSS grid background instead of 164 animated SVG paths */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #717784 1px, transparent 1px), linear-gradient(to bottom, #717784 1px, transparent 1px)",
          backgroundSize: "90px 78px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      />
    </div>
  </section>
);

export default Achievements;
