import Image from "next/image";
import { memo } from "react";
import SvgIcon from "../Common/SvgIcon";

const FEATURE_LIST_LEFT = [
  {
    src: "mission",
    title: "Our Mission",
    description:
      "To revolutionize modern living through innovative window and door solutions that combine superior quality, cutting-edge design, and exceptional service.",
  },
  {
    src: "vision",
    title: "Our Vision",
    description:
      "To be the leading provider of premium architectural solutions, setting new standards for quality, innovation, and customer satisfaction in the industry.",
  },
];

const FEATURE_LIST_RIGHT = [
  {
    src: "values",
    title: "Our Values",
    description:
      "Excellence, integrity, innovation, and customer-centricity drive everything we do. We are committed to delivering outstanding results and building lasting relationships.",
  },
  {
    src: "team",
    title: "Our Team",
    description:
      "A passionate team of designers, engineers, and craftspeople dedicated to bringing your architectural vision to life with precision and expertise.",
  },
];

const FeatureCard = memo(({ item }) => (
  <div className="sm:p-6 p-4 shadow-[0px_4px_85.2px_0px_#00000017] border border-solid border-[#E9E9E9] sm:flex grid gap-4 rounded-3xl">
    <div className="p-3 bg-[#113148] w-fit h-fit rounded-full">
      <SvgIcon type={item.src} normalColor="white" className="w-6 h-6" />
    </div>
    <div className="grid sm:gap-2 gap-1 font-archivo md:max-w-[263px]">
      <h3 className="lg:text-xl text-lg lg:leading-[20px] text-theme-color font-semibold">
        {item.title}
      </h3>
      <p className="sm:text-base text-sm text-[#777777]">{item.description}</p>
    </div>
  </div>
));
FeatureCard.displayName = "FeatureCard";

const MissionVission = memo(() => (
  <section className="py-6 md:py-9 lg:py-12 xl:py-16 sm:px-8 px-4 container mx-auto xl:flex grid justify-center lg:gap-8 sm:gap-6 gap-4">
    <div className="xl:grid md:flex grid lg:gap-8 sm:gap-6 gap-4 justify-center">
      {FEATURE_LIST_LEFT.map((item) => (
        <FeatureCard key={item.title} item={item} />
      ))}
    </div>

    <div className="flex justify-center">
      <Image
        src="/img/mission-vission-about-us.webp"
        width={469}
        height={422}
        alt="Why Choose Us Feature Image"
        className="transition-all duration-500 lg:hover:scale-105 w-full max-w-full sm:max-w-[460px] lg:max-w-[469px] h-auto object-cover"
      />
    </div>

    <div className="xl:grid md:flex grid lg:gap-8 sm:gap-6 gap-4 justify-center">
      {FEATURE_LIST_RIGHT.map((item) => (
        <FeatureCard key={item.title} item={item} />
      ))}
    </div>
  </section>
));

MissionVission.displayName = "MissionVission";

export default MissionVission;
