"use client";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

const RelatedProducts = () => {
  const relatedProducts = [
    {
      name: "Essential Casement",
      slug: "/essential-casement",
      description: "Essential Series Casement Windows",
      image: "/img/e-catalogue-product-1.webp",
    },
    {
      name: "Essential Slider",
      slug: "/essential-slider",
      description: "Essential Series Sliding Windows",
      image: "/img/e-catalogue-product-2.webp",
    },
    {
      name: "Essentials Range",
      slug: "/product/by-range/essentials",
      description: "Essentials Window & Door Range",
      image: "/img/e-catalogue-product-3.webp",
    },
  ];

  return (
    <section className="bg-[#F7F7F7]">
      <div className="section-container py-12">
        <CommonTitle
          tag="RELATED PRODUCTS"
          extraTagCss="bg-theme-color/6"
          title="EXPLORE OTHER ESSENTIAL PRODUCTS"
          extraTitleCss=""
          description="Discover our other Essential Series window and door solutions"
          extraDescriptionCss="max-w-[650px]"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 md:pt-10 sm:pt-8 pt-6">
        {relatedProducts.map((product, index) => (
          <Link
            key={index}
            href={product.slug}
            className="xl:p-7 sm:p-6 p-4 grid gap-4 bg-[#F7F7F7] rounded-xl border border-solid border-[#EBEBEB] shadow-[0px_0px_32.1px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_0px_40px_0px_rgba(0,0,0,0.12)] transition-all duration-300 group"
          >
            <div className="flex justify-center w-full">
              <Image
                src={product.image}
                width={272}
                height={292}
                alt={product.description}
                className="w-full max-w-[272px] h-auto object-cover transition-all duration-500 lg:group-hover:scale-105 rounded-lg"
              />
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl text-theme-color font-semibold">
                {product.name}
              </h3>
              <p className="sm:text-base text-sm text-[#777777]">
                {product.description}
              </p>
            </div>
            <div className="flex gap-2.5 justify-center text-theme-color mt-2 font-semibold py-3 px-4 rounded-xl items-center border border-solid border-theme-color/22 group-hover:bg-theme-color group-hover:text-white transition-all duration-300">
              View Details
              <div className="p-1 bg-[#F3F3F3] rounded-full group-hover:bg-[#F7F7F7]">
                <ArrowRightIcon size="20" className="text-theme-color group-hover:text-theme-color" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
};

export default RelatedProducts;


