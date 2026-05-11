import CommonTitle from "@/components/Common/CommonTitle";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cities } from "@/app/_data/cities";
import React from "react";

const CityNearby = ({ currentSlug }) => {
  const others = cities.filter((c) => c.slug !== currentSlug);

  return (
    <section className="bg-white">
      <div className="section-container">
        <CommonTitle
          tag="OTHER LOCATIONS"
          extraTagCss="bg-theme-color/6"
          title="EXPLORE WINZONE ACROSS INDIA"
          extraTitleCss=""
          description="WinZone delivers premium aluminium windows and doors across these cities"
          extraDescriptionCss="max-w-[650px]"
        />
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 sm:gap-4 lg:pt-12 md:pt-10 sm:pt-8 pt-6">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-solid border-[#EBEBEB] bg-white hover:border-theme-color hover:shadow-[0px_0px_24px_0px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <div className="flex flex-col">
                <span className="text-theme-color font-semibold font-titillium text-sm sm:text-base">
                  {c.name}
                </span>
                <span className="text-[#777777] text-xs font-archivo">
                  {c.state}
                </span>
              </div>
              <div className="p-1 bg-[#F3F3F3] rounded-full group-hover:bg-theme-color transition-all duration-300">
                <ArrowRightIcon
                  size="16"
                  className="text-theme-color group-hover:text-white transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityNearby;
