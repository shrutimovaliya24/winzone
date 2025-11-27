import SvgIcon from "@/components/Common/SvgIcon";
import Image from "next/image";
import React from "react";

const BlogDetail = ({
  title = "The Complete Guide to Energy-Efficient Windows in 2024",
  catregory = "Design Trends",
  time = "5 min read",
  description = "Discover how modern window technology can reduce your energy bills by up to 30% while enhancing comfort and style in your home.",
  mainImage = "/img/energy-efficient-windows.webp",
  info = [
    {
      topic: "THE COMPLETE GUIDE TO ENERGY-EFFICIENT WINDOWS IN 2024",
      data: [
        {
          description:
            "Energy-efficient windows have become a cornerstone of modern sustainable building practices. As energy costs continue to rise and environmental consciousness grows, homeowners and businesses are increasingly turning to advanced window technologies to reduce their carbon footprint and utility bills.",
        },
      ],
    },
    {
      topic: "ENERGY EFFICIENCY IN WINDOWS IS MEASURED BY SEVERAL KEY FACTORS:",
      data: [
        {
          title: "U-Factor",
          description:
            "The U-factor measures how well a window prevents heat from escaping. Lower U-factor values indicate better insulating properties. Modern energy-efficient windows typically have U-factors between 0.20 and 0.35.",
        },
        {
          title: "Solar Heat Gain Coefficient (SHGC)",
          description:
            "SHGC measures how much solar radiation passes through a window. In hot climates, lower SHGC values are preferred to reduce cooling costs, while in cold climates, higher values can help with heating.",
        },
        {
          title: "Visible Transmittance (VT)",
          description:
            "VT measures how much visible light passes through the window. Higher VT values mean more natural light, which can reduce the need for artificial lighting.",
        },
      ],
    },
    {
      topic: "ADVANCED WINDOW TECHNOLOGIES",
      data: [
        {
          title: "TRIPLE GLAZING",
          description:
            "Triple-glazed windows feature three panes of glass with two insulating air or gas-filled spaces. This configuration provides superior thermal performance compared to double-glazed alternatives.",
        },
        {
          title: "LOW-E COATINGS",
          description:
            "Low-emissivity coatings are microscopically thin metallic layers that reflect infrared energy while allowing visible light to pass through. These coatings significantly improve thermal performance.",
        },
        {
          title: "GAS FILLS",
          description:
            "Argon and krypton gas fills between glass panes provide better insulation than air, further improving energy efficiency.",
        },
      ],
    },
    {
      topic: "BENEFITS OF ENERGY-EFFICIENT WINDOWS",
      data: [
        {
          title: "1. Reduced Energy Bills",
          description:
            "High-performance windows can reduce heating and cooling costs by 20-30%",
        },
        {
          title: "2. Enhanced Comfort",
          description: "Better temperature control and reduced drafts",
        },
        {
          title: "3. UV Protection",
          description:
            "Advanced coatings protect furniture and flooring from fading",
        },
        {
          title: "4. Noise Reduction",
          description:
            "Multiple panes and gas fills provide excellent sound insulation",
        },
        {
          title: "5. Increased Property Value",
          description: "Energy-efficient upgrades boost home value",
        },
      ],
    },
    {
      topic: "CONCLUSION",
      data: [
        {
          description:
            "Investing in energy-efficient windows is one of the most effective ways to improve your building's performance while reducing environmental impact. With advancing technology and increasing awareness of sustainability, now is an excellent time to upgrade to high-performance window solutions.",
        },
        {
          description:
            "Contact our experts today to learn more about how energy-efficient windows can benefit your specific project and location.",
        },
      ],
    },
  ],
}) => {
  return (
    <div className="section-container global-grid-responsive">
      <section className="grid lg:gap-12 md:gap-9 sm:gap-7 gap-5">
        <div className="grid gap-5">
          <h1 className="font-bold font-titillium text-black xl:text-7xl md:text-6xl sm:text-5xl text-4xl">
            {title}
          </h1>
          <div className="flex gap-3 font-archivo">
            <div className="flex gap-1.5 items-center pr-3 border-r border-solid border-[#E7E7E7]">
              <SvgIcon
                type="calendar"
                className="w-5 h-5"
                normalColor="#777777"
              />
              <p className="font-medium text-sm text-[#777777]">{catregory}</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <SvgIcon type="clock" className="w-5 h-5" normalColor="#777777" />
              <p className=" font-medium text-sm text-[#777777]">{time}</p>
            </div>
          </div>
          <p className="font-archivo lg:text-xl sm:text-lg text-base">
            {description}
          </p>
        </div>
        <Image
          src={mainImage}
          width={1169}
          height={562}
          alt={`${title} Image`}
          className="object-cover w-full rounded-xl"
        />
      </section>
      <section>
        <div className="grid xl:gap-12 lg:gap-10 md:gap-8 sm:gap-6 gap-4">
          {info.map((item, index) => {
            const allTitlesExist = item.data.every(
              (info) => info.title !== undefined
            );

            return (
              <div
                className={`grid ${
                  allTitlesExist ? "sm:gap-6 gap-4" : "gap-2 sm:gap-4"
                }`}
                key={index}
              >
                <h3 className="lg:text-[28px] md:text-2xl text-xl text-theme-color font-titillium font-bold">
                  {item.topic}
                </h3>

                {item.data.map((info, number) => (
                  <div
                    key={number}
                    className="grid md:gap-[18px] sm:gap-3 gap-2"
                  >
                    {info.title && (
                      <h4 className="font-semibold text-theme-color lg:text-lg sm:text-base text-sm font-titillium">
                        {info.title}
                      </h4>
                    )}
                    <p className="text-[#777777] font-archivo lg:text-lg sm:text-base text-sm">
                      {info.description}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
