import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCards = ({ card }) => {
  return (
    <div className="xl:p-7 sm:p-6 p-4 grid gap-4 bg-white rounded-xl border border-solid border-[#EBEBEB] shadow-[0px_0px_32.1px_0px_rgba(0,0,0,0.06)]">
      <div className="flex justify-center font-archivo">
        <Image
          src={card.src || "/img/main-hero-section-product.avif"}
          width={272}
          height={292}
          alt={card.imageAlt || "Product Image"}
          className="transition-all duration-500 lg:hover:scale-105"
        />
      </div>
      <div className="grid gap-2">
        <h3 className="text-xl text-theme-color font-semibold">{card.name}</h3>
        <p className="sm:text-base text-sm text-[#777777]">
          {card.description.length >= 50
            ? card.description.slice(0, 50) + "..."
            : card.description}
        </p>
      </div>
      <Link
        href={card.href || "/product"}
        className="flex gap-2.5 justify-center text-theme-color mt-2 font-semibold py-3 px-4 rounded-xl items-center border border-solid border-theme-color/22 "
      >
        View more
        <div className="p-1 bg-[#F3F3F3] rounded-full">
          <ArrowRightIcon color="#29485F" size="20" />
        </div>
      </Link>
    </div>
  );
};

export default FeatureCards;
