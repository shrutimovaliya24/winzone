"use client";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import React from "react";

const galleryImages = [
  {
    src: "/img/duraslim-edge-slide-fold-img/duraslim-edge-slide-fold-1.webp",
    alt: "Duraslim Edge Slide and Fold Doors Installation",
  },
  {
    src: "/img/duraslim-edge-slide-fold-img/duraslim-edge-slide-fold-3.webp",
    alt: "Modern Slide and Fold Door Design",
  },
  {
    src: "/img/duraslim-edge-slide-fold-img/duraslim-edge-slide-fold-4.webp",
    alt: "Flexible Opening Folding Doors",
  },
];

const DuraslimEdgeSlideFoldGallery = () => {
  return (
    <div className="section-container">
      <CommonTitle
        tag="GALLERY"
        extraTagCss="bg-theme-color/6"
        title="DURASLIM EDGE SLIDE & FOLD DOORS GALLERY"
        extraTitleCss=""
        description="Explore our beautiful Duraslim Edge slide and fold door installations"
        extraDescriptionCss="max-w-[650px]"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 md:pt-10 sm:pt-8 pt-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-[0px_0px_32.1px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_0px_40px_0px_rgba(0,0,0,0.12)] transition-all duration-300"
          >
            <div className="aspect-square relative w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DuraslimEdgeSlideFoldGallery;


