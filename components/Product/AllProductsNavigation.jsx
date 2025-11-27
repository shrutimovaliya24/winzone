"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import CommonTitle from "@/components/Common/CommonTitle";

const allProducts = {
  byRoom: [
    {
      name: "Bedroom",
      slug: "/product/by-room/bedroom",
      description: "Aluminium Windows and Doors for Bedroom",
      image: "/img/bedroom-img/bedroom-1.jpg",
    },
    {
      name: "Living Room",
      slug: "/living-room-aluminium-windows-doors",
      description: "Aluminium Windows and Doors for Living Room",
      image: "/img/living-room-img/living-room-1.jpg",
    },
    {
      name: "Kitchen",
      slug: "/product/by-room/kitchen",
      description: "Aluminium Windows and Doors for Kitchen",
      image: "/img/kitchen-img/kitchen-1.webp",
    },
    {
      name: "Balcony",
      slug: "/product/by-room/balcony",
      description: "Aluminium Windows and Doors for Balcony",
      image: "/img/balcony-img/balcony-1.webp",
    },
  ],
  byType: [
    {
      name: "Sliding",
      slug: "/aluminium-sliding-windows-doors",
      description: "Sliding Aluminium Windows and Doors",
      image: "/img/sliding-img/sliding-1.jpg",
    },
    {
      name: "Openable",
      slug: "/aluminium-openable-windows-doors",
      description: "Openable Aluminium Windows and Doors",
      image: "/img/openable-img/openable-1.webp",
    },
  ],
  duraslim: [
    {
      name: "Duraslim Casement",
      slug: "/duraslim-casement",
      description: "Duraslim Slim Aluminium Casement Windows",
      image: "/img/duraslim-casement-img/duraslim-casement-1.jpg",
    },
    {
      name: "Duraslim Tilt & Turn",
      slug: "/duraslim-casement-tilt-and-turn",
      description: "Duraslim Aluminium Casement Tilt & Turn Windows",
      image: "/img/duraslim-tilt-turn-img/duraslim-tilt-turn-1.jpg",
    },
    {
      name: "Duraslim Edge Lift & Slide",
      slug: "/duraslim-edge-lift-and-slide-doors",
      description: "Duraslim Edge Lift & Slide Aluminium Doors",
      image: "/img/duraslim-edge-lift-slide-img/duraslim-edge-lift-slide-1.webp",
    },
    {
      name: "Duraslim Edge Minimal",
      slug: "/duraslim-edge-minimal",
      description: "Duraslim Edge Ultra-Slim Aluminium Windows & Doors",
      image: "/img/duraslim-edge-minimal-img/duraslim-edge-minimal-1.webp",
    },
    {
      name: "Duraslim Edge Slide & Fold",
      slug: "/duraslim-edge-slide-and-fold-doors",
      description: "Duraslim Edge Slide & Fold Aluminium Doors",
      image: "/img/duraslim-edge-slide-fold-img/duraslim-edge-slide-fold-1.webp",
    },
    {
      name: "Duraslim Sliding",
      slug: "/duraslim-sliding-windows-and-doors",
      description: "Duraslim Slim Aluminium Sliding Windows & Doors",
      image: "/img/duraslim-sliding-img/duraslim-sliding-1.webp",
    },
  ],
  essential: [
    {
      name: "Essential Casement",
      slug: "/essential-casement",
      description: "Essential Series Aluminium Casement Windows",
      image: "/img/essential-casement-img/essential-casement-1.png",
    },
    {
      name: "Essential Pro Slider",
      slug: "/essential-proslider",
      description: "Essential Pro Slider Aluminium Windows & Doors",
      image: "/img/essential-proslider-img/essential-pro-slider-1.png",
    },
    {
      name: "Essential Slider",
      slug: "/essential-slider",
      description: "Essential Series Sliding Aluminium Windows & Doors",
      image: "/img/essential-slider-img/essential-slider-1.webp",
    },
  ],
  categoryLanding: [
    {
      name: "By Range",
      slug: "/product/by-range",
      description: "Aluminium Windows & Doors by Range",
      image: "/img/by-range-img/by-range-1.jpg",
    },
    {
      name: "By Room",
      slug: "/product/by-room",
      description: "Aluminium Windows & Doors by Room",
      image: "/img/by-room-img/by-room-1.webp",
    },
  ],
  rangeDetail: [
    {
      name: "Duraslim Edge Range",
      slug: "/product/by-range/duraslim-edge",
      description: "Duraslim Edge Aluminium Window & Door Range",
      image: "/img/duraslim-edge-range-img/duraslim-edge-range-1.webp",
    },
    {
      name: "Duraslim Range",
      slug: "/product/by-range/duraslim",
      description: "Duraslim Aluminium Window & Door Range",
      image: "/img/duraslim-range-img/duraslim-range-1.webp",
    },
    {
      name: "Essentials Range",
      slug: "/product/by-range/essentials",
      description: "Essentials Aluminium Window & Door Range",
      image: "/img/essentials-range-img/essentials-range-1.jpg",
    },
  ],
  location: [
    {
      name: "Rajkot",
      slug: "/rajkot",
      description: "Aluminium Windows & Doors in Rajkot",
      image: "/img/rajkot-img/rajkot-1.jpg",
    },
  ],
};

const ProductCard = ({ product }) => {
  return (
    <Link
      href={product.slug}
      className="xl:p-7 sm:p-6 p-4 grid gap-6 bg-white rounded-xl border border-solid border-[#EBEBEB] shadow-[0px_0px_32.1px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_0px_40px_0px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer h-full"
    >
      <div className="flex justify-center w-full overflow-hidden rounded-lg">
        <div className="relative w-full aspect-[16/10] min-h-[240px] max-h-[280px]">
          <Image
            src={product.image}
            fill
            alt={product.description}
            className="object-cover transition-all duration-500 lg:group-hover:scale-110"
          />
        </div>
      </div>
      <div className="grid gap-3 flex-grow">
        <h3 className="text-xl text-theme-color font-semibold font-titillium">
          {product.name}
        </h3>
        <p className="sm:text-base text-sm text-[#777777] font-archivo leading-relaxed">
          {product.description}
        </p>
      </div>
      <div className="flex gap-2.5 justify-center text-theme-color font-semibold py-3 sm:px-6 px-4 rounded-xl items-center border border-solid border-theme-color/22 bg-white hover:bg-theme-color hover:text-white transition-all duration-300 font-archivo w-full sm:whitespace-nowrap">
        <span>View Details</span>
        <div className="p-1 bg-[#F3F3F3] rounded-full group-hover:bg-white transition-all duration-300 flex-shrink-0">
          <ArrowRightIcon size="20" className="text-theme-color group-hover:text-theme-color transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
};

const ProductSection = ({ title, tag, products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="section-container">
      <CommonTitle
        tag={tag}
        extraTagCss="bg-theme-color/6"
        title={title}
        extraTitleCss="xl:max-w-[548px] lg:max-w-[500px]"
        description={`Explore our ${title.toLowerCase()} collection of premium aluminium windows and doors.`}
        extraDescriptionCss="xl:max-w-[650px] lg:max-w-[520px]"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:pt-12 md:pt-10 sm:pt-8 pt-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

const AllProductsNavigation = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <ProductSection
        title="PRODUCTS BY ROOM"
        tag="BY ROOM"
        products={allProducts.byRoom}
      />
      <ProductSection
        title="PRODUCTS BY TYPE"
        tag="BY TYPE"
        products={allProducts.byType}
      />
      <ProductSection
        title="DURASLIM SERIES"
        tag="DURASLIM"
        products={allProducts.duraslim}
      />
      <ProductSection
        title="ESSENTIAL SERIES"
        tag="ESSENTIAL"
        products={allProducts.essential}
      />
      <ProductSection
        title="CATEGORY PAGES"
        tag="CATEGORY"
        products={allProducts.categoryLanding}
      />
      <ProductSection
        title="RANGE DETAILS"
        tag="RANGE"
        products={allProducts.rangeDetail}
      />
      <ProductSection
        title="LOCATION"
        tag="LOCATION"
        products={allProducts.location}
      />
    </div>
  );
};

export default AllProductsNavigation;

