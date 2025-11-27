"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { src: "/img/product-1.webp", alt: "Product Image 1" },
  { src: "/img/product-2.webp", alt: "Product Image 2" },
  { src: "/img/product-3.webp", alt: "Product Image 3" },
  { src: "/img/product-4.webp", alt: "Product Image 4" },
  { src: "/img/product-5.webp", alt: "Product Image 5" },
  { src: "/img/product-1.webp", alt: "Product Image 1" },
  { src: "/img/product-2.webp", alt: "Product Image 2" },
  { src: "/img/product-3.webp", alt: "Product Image 3" },
  { src: "/img/product-4.webp", alt: "Product Image 4" },
  { src: "/img/product-5.webp", alt: "Product Image 5" },
];

const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (!swiper.params) swiper.params = {};
    if (!swiper.params.navigation) swiper.params.navigation = {};

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    if (swiper.navigation) {
      try {
        swiper.navigation.destroy();
      } catch (e) {
        console.log("error", e);
      }
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [mounted]);

  return (
    <div className="w-full">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1280: { slidesPerView: 4.1, spaceBetween: 48 },
          1440: { slidesPerView: 4.5, spaceBetween: 48 },
        }}
        navigation={
          mounted ? { prevEl: prevRef.current, nextEl: nextRef.current } : false
        }
        modules={[Pagination, Autoplay, Navigation]}
        className="product-swiper md:!py-12 sm:!py-10 !py-6"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <div className="w-[318px] h-[362px] overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={318}
                  height={362}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-6 justify-center pt-2 pb-2">
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="rounded-xl px-7 py-3 z-10 flex items-center justify-center bg-white border border-solid border-[#EBEBEB] shadow-md transition hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" color="#29485F" />
        </button>

        <button
          ref={nextRef}
          aria-label="Next slide"
          className="rounded-xl px-7 py-3 z-10 flex items-center justify-center shadow-md bg-theme-color transition hover:scale-105"
        >
          <ArrowRight className="w-5 h-5" color="white" />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
