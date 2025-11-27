"use client";
import React, { useRef } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { productsData } from "../data";
import FeatureCards from "./FeatureCards";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FeatureSwiperCard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          580: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="lg:!pt-12 md:!pt-10 sm:!pt-8 !pt-6 grid"
        modules={[Pagination, Autoplay, Navigation]}
      >
        {productsData.map((product, index) => (
          <SwiperSlide key={index}>
            <FeatureCards card={product} />
          </SwiperSlide>
        ))}

        <div className="flex gap-6 justify-center lg:pt-13 md:pt-10 sm:pt-8 pt-6 pb-2">
          <button
            ref={prevRef}
            className=" rounded-xl px-7 py-3 z-10 flex items-center justify-center bg-white border border-solid border-[#EBEBEB] shadow-md transition hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" color="#29485F" />
          </button>
          <button
            ref={nextRef}
            className="rounded-xl px-7 py-3 z-10 flex items-center justify-center shadow-md bg-theme-color transition hover:scale-105"
          >
            <ArrowRight className="w-5 h-5" color="white" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default FeatureSwiperCard;
