"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import CommonTitle from "@/components/Common/CommonTitle";
import { products as winzonProducts } from "@/app/_data/products";

// Group the 23 SEO product pages by category so the /product hub
// surfaces every one of them and the visitor can reach each in
// two clicks (home → /product → product detail).
const categories = [
  {
    key: "Window",
    title: "WINDOW SYSTEMS",
    tag: "WINDOWS",
    description:
      "Slim, minimal aluminium window systems engineered to bring in more light, wider views, and modern style.",
  },
  {
    key: "Window+Door",
    title: "WINDOW & DOOR SYSTEMS",
    tag: "WINDOW + DOOR",
    description:
      "Unified hybrid systems that match across windows and doors for a clean, consistent look across the whole opening.",
  },
  {
    key: "Door",
    title: "DOOR SYSTEMS",
    tag: "DOORS",
    description:
      "Premium aluminium doors built for strength, smooth operation, and contemporary design.",
  },
  {
    key: "Partition",
    title: "PARTITION SYSTEMS",
    tag: "PARTITIONS",
    description:
      "Flexible aluminium partitions for offices, homes, hotels, and event spaces that adapt as your space changes.",
  },
];

const ProductCard = ({ product }) => {
  const href = `/${product.slug}`;
  const image = product.hero?.image || "/img/product-herosection.webp";
  const alt = product.hero?.alt || product.fullName;
  return (
    <Link
      href={href}
      className="xl:p-7 sm:p-6 p-4 grid gap-6 bg-white rounded-xl border border-solid border-[#EBEBEB] shadow-[0px_0px_32.1px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_0px_40px_0px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer h-full"
    >
      <div className="flex justify-center w-full overflow-hidden rounded-lg">
        <div className="relative w-full aspect-[16/10] min-h-[240px] max-h-[280px]">
          <Image
            src={image}
            fill
            alt={alt}
            className="object-cover transition-all duration-500 lg:group-hover:scale-110"
          />
        </div>
      </div>
      <div className="grid gap-3 flex-grow">
        <span className="text-xs font-titillium uppercase tracking-wider text-theme-color/70">
          {product.category}
        </span>
        <h3 className="text-xl text-theme-color font-semibold font-titillium">
          {product.name}
        </h3>
        <p className="sm:text-base text-sm text-[#777777] font-archivo leading-relaxed line-clamp-3">
          {product.headline}
        </p>
      </div>
      <div className="flex gap-2.5 justify-center text-theme-color font-semibold py-3 sm:px-6 px-4 rounded-xl items-center border border-solid border-theme-color/22 bg-white hover:bg-theme-color hover:text-white transition-all duration-300 font-archivo w-full sm:whitespace-nowrap">
        <span>View Details</span>
        <div className="p-1 bg-[#F3F3F3] rounded-full group-hover:bg-white transition-all duration-300 flex-shrink-0">
          <ArrowRightIcon
            size="20"
            className="text-theme-color group-hover:text-theme-color transition-all duration-300"
          />
        </div>
      </div>
    </Link>
  );
};

const ProductSection = ({ title, tag, description, products }) => {
  if (!products || products.length === 0) return null;
  return (
    <section className="section-container">
      <CommonTitle
        tag={tag}
        extraTagCss="bg-theme-color/6"
        title={title}
        extraTitleCss="xl:max-w-[548px] lg:max-w-[500px]"
        description={description}
        extraDescriptionCss="xl:max-w-[650px] lg:max-w-[520px]"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:pt-12 md:pt-10 sm:pt-8 pt-6">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
};

const WinzonSystemProductsNavigation = () => {
  const grouped = categories
    .map((cat) => ({
      ...cat,
      products: winzonProducts.filter((p) => p.category === cat.key),
    }))
    .filter((g) => g.products.length > 0);

  return (
    <div className="bg-white">
      <div className="section-container">
        <CommonTitle
          tag="WINZON SYSTEM SERIES"
          extraTagCss="bg-theme-color/6"
          title="EXPLORE THE COMPLETE WINZON SYSTEM RANGE"
          extraTitleCss=""
          description="Browse every Winzon System product — slim windows, doors, hybrid systems, and partitions — grouped by category. Each page covers features, design options, use cases, and FAQs."
          extraDescriptionCss="max-w-[760px]"
        />
      </div>
      {grouped.map((g) => (
        <ProductSection
          key={g.key}
          title={g.title}
          tag={g.tag}
          description={g.description}
          products={g.products}
        />
      ))}
    </div>
  );
};

export default WinzonSystemProductsNavigation;
