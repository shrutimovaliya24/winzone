import CommonTitle from "@/components/Common/CommonTitle";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { getRelatedProducts } from "@/app/_data/products";
import React from "react";

const RelatedProductsBlock = ({ currentSlug }) => {
  const related = getRelatedProducts(currentSlug, 3);
  if (!related || related.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
        <CommonTitle
          tag="EXPLORE MORE"
          extraTagCss="bg-theme-color/6"
          title="RELATED WINZON SYSTEM PRODUCTS"
          extraTitleCss=""
          description="Discover other window, door, and partition systems from the Winzon family."
          extraDescriptionCss="max-w-[700px]"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group border border-solid border-[#EBEBEB] rounded-xl p-5 sm:p-6 bg-white hover:border-theme-color/40 transition-colors"
            >
              <div className="flex flex-col h-full gap-3">
                <span className="text-xs font-titillium uppercase tracking-wider text-theme-color/70">
                  {p.category}
                </span>
                <h3 className="font-titillium font-semibold text-lg sm:text-xl text-theme-color group-hover:text-theme-color">
                  {p.name}
                </h3>
                <p className="font-archivo text-sm text-[#777777] line-clamp-3">
                  {p.headline}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 font-archivo text-sm font-semibold text-theme-color">
                  View Product
                  <ArrowRightIcon size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsBlock;
