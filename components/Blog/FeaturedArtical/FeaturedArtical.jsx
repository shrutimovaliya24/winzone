import CommonTitle from "@/components/Common/CommonTitle";
import SvgIcon from "@/components/Common/SvgIcon";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedArticalData = [
  {
    src: "/img/featured-artical-1.webp",
    title: "2024 Window Design Trends: What's Hot This Year",
    catregory: "Design Trends",
    time: "5 min read",
    href: "/blog/2024-window-design-trends",
  },
  {
    src: "/img/featured-artical-2.webp",
    title: "Smart Home Integration: Windows That Think",
    catregory: "Design Trends",
    time: "5 min read",
    href: "/blog/smart-home-integration-windows",
  },
  {
    src: "/img/featured-artical-3.webp",
    title: "Complete Guide to Energy-Efficient Windows",
    catregory: "Design Trends",
    time: "5 min read",
    href: "/blog/energy-efficient-windows-guide",
  },
  {
    src: "/img/featured-artical-4.webp",
    title: "WinZone Pro Series Review: Professional Grade Performance",
    catregory: "Design Trends",
    time: "5 min read",
    href: "/blog/winzone-pro-series-review",
  },
  {
    src: "/img/featured-artical-5.webp",
    title: "Industry Report: Sustainable Building Materials in 2024",
    catregory: "Design Trends",
    time: "5 min read",
    href: "/blog/sustainable-building-materials-2024",
  },
  {
    src: "/img/featured-artical-6.webp",
    title: "DIY Window Maintenance: Essential Tips for Homeowners",
    catregory: "Design Trends",
    time: "5 min read",
    href: "/blog/diy-window-maintenance-tips",
  },
];

const FeaturedArtical = () => {
  return (
    <section className="section-container global-grid-responsive">
      <CommonTitle
        tag="ABOUT PRODUCT"
        extraTagCss="bg-theme-color/6"
        title="FEATURED ARTICLES"
        extraTitleCss=""
        extraDescriptionCss="hidden"
        gridView={true}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {FeaturedArticalData.map((item, index) => (
          <div
            key={index}
            className="shadow-[0px_0px_42.6px_0px_#0000001A] bg-white rounded-xl overflow-hidden sm:flex grid max-sm:justify-center max-sm:justify-items-center"
          >
            <Image
              src={item.src}
              width={223}
              height={243}
              alt={`${item.title} Image`}
              className="xl:w-[223px] xl:h-[243px] sm:w-[180px] w-full h-full max-sm:max-h-[250px] rounded-xl"
            />
            <div className="p-[18px] font-archivo grid gap-4 content-between">
              <div className="grid gap-4">
                <div className="flex gap-3">
                  <div className="flex gap-1.5 items-center pr-3 border-r border-solid border-[#E7E7E7]">
                    <SvgIcon
                      type="calendar"
                      className="w-5 h-5"
                      normalColor="#777777"
                    />
                    <p className="font-medium text-sm text-[#777777]">
                      {item.catregory}
                    </p>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <SvgIcon
                      type="clock"
                      className="w-5 h-5"
                      normalColor="#777777"
                    />
                    <p className=" font-medium text-sm text-[#777777]">
                      {item.time}
                    </p>
                  </div>
                </div>
                <h3 className="text-theme-color font-semibold lg:text-xl sm:text-lg text-base ">
                  {item.title}
                </h3>
              </div>
              <Link
                href={item.href}
                className="px-7 py-3 rounded-xl bg-white flex gap-2.5 font-semibold text-theme-color font-archivo items-center w-fit border border-solid border-theme-color/22"
              >
                Read more
                <div className="p-1 bg-[#F3F3F3] rounded-full">
                  <ArrowRightIcon color="#29485F" size="20" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtical;
