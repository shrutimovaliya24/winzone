import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgIcon from "../Common/SvgIcon";
import { ArrowRightIcon } from "lucide-react";

const ProjectCardInfo = [
  {
    src: "/img/project-1.webp",
    location: "Mumbai, Maharashtra, India",
    title: "Modern Residential Complex",
    description:
      "Complete window and door installation for a luxury residential complex featuring energy-efficient aluminum windows and premium folding door systems.",
    href: "/project/modern-residential-complex",
  },
  {
    src: "/img/project-2.webp",
    location: "Mumbai, Maharashtra, India",
    title: "Corporate Headquarters",
    description:
      "Modern glass facade installation for a 15-story corporate headquarters building, featuring energy-efficient curtain wall systems and integrated shading solutions for optimal thermal performance.",
    href: "/project/corporate-headquarters",
  },
  {
    src: "/img/project-3.webp",
    location: "Mumbai, Maharashtra, India",
    title: "Boutique Hotel Renovation",
    description:
      "Historic boutique hotel renovation featuring custom WinZone windows that maintain the building's character while providing modern energy efficiency and comfort for guests.",
    href: "/project/boutique-hotel-renovation",
  },
  {
    src: "/img/project-4.webp",
    location: "Mumbai, Maharashtra, India",
    title: "Medical Center",
    description:
      "Comprehensive window and door installation for a new medical center, featuring specialized healthcare-grade materials and enhanced security systems for patient safety.",
    href: "/project/medical-center",
  },
  {
    src: "/img/project-5.webp",
    location: "Mumbai, Maharashtra, India",
    title: "Luxury Condominiums",
    description:
      "High-end condominium project featuring panoramic windows and premium aluminum doors with smart home integration and advanced security features.",
    href: "/project/luxury-condominiums",
  },
  {
    src: "/img/project-6.webp",
    location: "Mumbai, Maharashtra, India",
    title: "Luxury Villa Estate",
    description:
      "Bespoke window and door solutions for an oceanfront luxury villa featuring panoramic folding glass walls and custom aluminum frames.",
    href: "/project/luxury-villa-estate",
  },
];

const ProjectCard = () => {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 section-container gap-6">
      {ProjectCardInfo.map((item, index) => (
        <div
          key={index}
          className="sm:p-6 p-3 font-archivo border border-solid border-[#EBEBEB] bg-white shadow-[0px_0px_32.1px_0px_#0000000F] grid sm:gap-6 gap-2.5 rounded-[10px]"
        >
          <Image
            src={item.src}
            width={362}
            height={266}
            alt={`${item.title} Image`}
            className="w-full"
          />
          <div className="grid gap-3">
            <div className="flex gap-1.5">
              <SvgIcon
                type="location"
                normalColor="#777777"
                className="w-5 h-5"
              />
              <p className="text-[#777777] md:text-sm text-xs font-medium">
                Stanford, CA
              </p>
            </div>
            <div>
              <h4 className="text-theme-color font-semibold md:text-xl sm:text-base text-sm">
                {item.title}
              </h4>
              <p className="text-[#777777] md:text-base sm:text-sm text-xs">
                {item.description.length > 110
                  ? item.description.slice(0, 110) + " ..."
                  : item.description}
              </p>
            </div>
          </div>
          <Link
            href={item.href}
            className="sm:px-7 px-4 py-2.5 rounded-xl bg-white flex gap-2 sm:gap-2.5 font-semibold text-theme-color items-center border border-solid justify-center border-theme-color/22 text-sm sm:text-base"
          >
            View Project
            <div className="p-1 bg-[#F3F3F3] rounded-full">
              <ArrowRightIcon color="#29485F" size="20" />
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ProjectCard;
