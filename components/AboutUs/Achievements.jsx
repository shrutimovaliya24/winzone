import React from "react";
import CommonTitle from "../Common/CommonTitle";
import SvgIcon from "../Common/SvgIcon";

const cellPaths = [
  "M1 -85.5V-163H91.6667",
  "M1 -85.5V-7.99999",
  "M1 -85.5H91.6667",
  "M1 -7.99999V69.5",
  "M1 -7.99999H91.6667",
  "M1 69.5V147",
  "M1 69.5H91.6667",
  "M1 147V224.5",
  "M1 147H91.6667",
  "M1 224.5V302H91.6667",
  "M1 224.5H91.6667",
  "M91.6667 -163V-85.5",
  "M91.6667 -163H182.333",
  "M91.6667 -85.5V-7.99999",
  "M91.6667 -85.5H182.333",
  "M91.6667 -7.99999V69.5",
  "M91.6667 -7.99999H182.333",
  "M91.6667 69.5V147",
  "M91.6667 69.5H182.333",
  "M91.6667 147V224.5",
  "M91.6667 147H182.333",
  "M91.6667 224.5V302",
  "M91.6667 224.5H182.333",
  "M91.6667 302H182.333",
  "M182.333 -163V-85.5",
  "M182.333 -163H273",
  "M182.333 -85.5V-7.99999",
  "M182.333 -85.5H273",
  "M182.333 -7.99999V69.5",
  "M182.333 -7.99999H273",
  "M182.333 69.5V147",
  "M182.333 69.5H273",
  "M182.333 147V224.5",
  "M182.333 147H273",
  "M182.333 224.5V302",
  "M182.333 224.5H273",
  "M182.333 302H273",
  "M273 -163V-85.5",
  "M273 -163H363.667",
  "M273 -85.5V-7.99999",
  "M273 -85.5H363.667",
  "M273 -7.99999V69.5",
  "M273 -7.99999H363.667",
  "M273 69.5V147",
  "M273 69.5H363.667",
  "M273 147V224.5",
  "M273 147H363.667",
  "M273 224.5V302",
  "M273 224.5H363.667",
  "M273 302H363.667",
  "M363.667 -163V-85.5",
  "M363.667 -163H454.333",
  "M363.667 -85.5V-7.99999",
  "M363.667 -85.5H454.333",
  "M363.667 -7.99999V69.5",
  "M363.667 -7.99999H454.333",
  "M363.667 69.5V147",
  "M363.667 69.5H454.333",
  "M363.667 147V224.5",
  "M363.667 147H454.333",
  "M363.667 224.5V302",
  "M363.667 224.5H454.333",
  "M363.667 302H454.333",
  "M454.333 -163V-85.5",
  "M454.333 -163H545",
  "M454.333 -85.5V-7.99999",
  "M454.333 -85.5H545",
  "M454.333 -7.99999V69.5",
  "M454.333 -7.99999H545",
  "M454.333 69.5V147",
  "M454.333 69.5H545",
  "M454.333 147V224.5",
  "M454.333 147H545",
  "M454.333 224.5V302",
  "M454.333 224.5H545",
  "M454.333 302H545",
  "M545 -163V-85.5",
  "M545 -163H635.667",
  "M545 -85.5V-7.99999",
  "M545 -85.5H635.667",
  "M545 -7.99999V69.5",
  "M545 -7.99999H635.667",
  "M545 69.5V147",
  "M545 69.5H635.667",
  "M545 147V224.5",
  "M545 147H635.667",
  "M545 224.5V302",
  "M545 224.5H635.667",
  "M545 302H635.667",
  "M635.667 -163V-85.5",
  "M635.667 -163H726.333",
  "M635.667 -85.5V-7.99999",
  "M635.667 -85.5H726.333",
  "M635.667 -7.99999V69.5",
  "M635.667 -7.99999H726.333",
  "M635.667 69.5V147",
  "M635.667 69.5H726.333",
  "M635.667 147V224.5",
  "M635.667 147H726.333",
  "M635.667 224.5V302",
  "M635.667 224.5H726.333",
  "M635.667 302H726.333",
  "M726.333 -163V-85.5",
  "M726.333 -163H817",
  "M726.333 -85.5V-7.99999",
  "M726.333 -85.5H817",
  "M726.333 -7.99999V69.5",
  "M726.333 -7.99999H817",
  "M726.333 69.5V147",
  "M726.333 69.5H817",
  "M726.333 147V224.5",
  "M726.333 147H817",
  "M726.333 224.5V302",
  "M726.333 224.5H817",
  "M726.333 302H817",
  "M817 -163V-85.5",
  "M817 -163H907.667",
  "M817 -85.5V-7.99999",
  "M817 -85.5H907.667",
  "M817 -7.99999V69.5",
  "M817 -7.99999H907.667",
  "M817 69.5V147",
  "M817 69.5H907.667",
  "M817 147V224.5",
  "M817 147H907.667",
  "M817 224.5V302",
  "M817 224.5H907.667",
  "M817 302H907.667",
  "M907.667 -163V-85.5",
  "M907.667 -163H998.333",
  "M907.667 -85.5V-7.99999",
  "M907.667 -85.5H998.333",
  "M907.667 -7.99999V69.5",
  "M907.667 -7.99999H998.333",
  "M907.667 69.5V147",
  "M907.667 69.5H998.333",
  "M907.667 147V224.5",
  "M907.667 147H998.333",
  "M907.667 224.5V302",
  "M907.667 224.5H998.333",
  "M907.667 302H998.333",
  "M998.333 -163V-85.5",
  "M998.333 -163H1089V-85.5",
  "M998.333 -85.5V-7.99999",
  "M998.333 -85.5H1089",
  "M998.333 -7.99999V69.5",
  "M998.333 -7.99999H1089",
  "M998.333 69.5V147",
  "M998.333 69.5H1089",
  "M998.333 147V224.5",
  "M998.333 147H1089",
  "M998.333 224.5V302",
  "M998.333 224.5H1089",
  "M998.333 302H1089V224.5",
  "M1089 -85.5V-7.99999",
  "M1089 -7.99999V69.5",
  "M1089 69.5V147",
  "M1089 147V224.5",
];

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

      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 1090 303"
          fill="none"
        >
          <defs>
            <radialGradient
              id="paint0"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(545 69.5) rotate(90) scale(232.5 544)"
            >
              <stop stopColor="#717784" />
              <stop offset="1" stopColor="#717784" stopOpacity="0" />
            </radialGradient>
          </defs>

          {cellPaths.map((d, i) => {
            const randomDelay = (Math.random() * 3).toFixed(2) + "s";
            return (
              <path
                key={i}
                d={d}
                stroke="url(#paint0)"
                strokeOpacity="0.25"
                strokeWidth="1.5"
                className="grid-cell"
                style={{ "--delay": randomDelay }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  </section>
);

export default Achievements;
