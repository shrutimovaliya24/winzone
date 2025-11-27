import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import ByRangeFAQ from "./ByRangeFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows & Doors by Range | WinZone",
  description: "Browse our complete range of aluminium windows and doors. Explore Duraslim, Duraslim Edge, and Essential Series to find the perfect solution for your home from WinZone.",
  keywords: [
    "aluminium windows by range",
    "window ranges",
    "duraslim range",
    "essential range",
    "window series",
    "aluminium door ranges",
    "product ranges",
    "window collections",
  ],
};

const byRangeInformation = [
  "Discover WinZone's comprehensive range of aluminium windows and doors. Our product ranges are designed to meet different needs, preferences, and budgets, ensuring you find the perfect solution for your home or project.",
  "Our range includes the premium Duraslim series with ultra-slim profiles, the advanced Duraslim Edge series with minimal frames, and the value-packed Essential series. Each range offers unique features and benefits tailored to different applications and requirements.",
  "Whether you're looking for maximum glass area, premium aesthetics, or excellent value, our ranges provide solutions for every need. All our ranges feature thermal break technology, energy efficiency, and durable construction.",
  "Explore our ranges to find the perfect match for your project. Our team can help you understand the differences between ranges and select the best option based on your requirements, budget, and aesthetic preferences.",
];

const byRangeAdvantages = [
  "Multiple ranges to suit different needs and budgets",
  "Premium Duraslim series with ultra-slim profiles",
  "Advanced Duraslim Edge series with minimal frames",
  "Value-packed Essential series for budget-conscious projects",
  "All ranges feature thermal break technology and energy efficiency",
  "Durable construction across all ranges for years of reliable performance",
  "Customizable options within each range to fit your space perfectly",
  "Expert guidance to help you choose the right range for your project",
];


const ByRangePage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Aluminium Windows & Doors by Range"
        description="Explore our comprehensive range of aluminium windows and doors. Find the perfect solution from our Duraslim, Duraslim Edge, and Essential Series."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/product-herosection.webp"
      />

      {/* Product Information Section */}
      <section className="bg-white">
        <div className="section-container grid gap-4">
          <CommonTitle
            tag="ABOUT PRODUCT"
            extraTagCss="bg-theme-color/6"
            title="OUR WINDOW & DOOR RANGES INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {byRangeInformation.map((item, index) => (
              <p key={index} className="text-[#777777] sm:text-lg text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#F7F7F7]">
        <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
          <CommonTitle
            tag="BENEFITS"
            extraTagCss="bg-theme-color/6"
            title="WHY CHOOSE WINZONE WINDOW & DOOR RANGES"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/by-range-img/by-range-1.jpg"
              width={402}
              height={408}
              alt="Window & Door Ranges Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {byRangeAdvantages.map((item, index) => (
                <ul key={index}>
                  <li className="text-[#777777] xl:text-lg lg:text-base sm:text-lg text-base list-disc">
                    {item}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Key Features Section */}
      <section className="bg-white">
        <KeyFeatures />
      </section>

      {/* Related Products Section - Cross-Linking for SEO */}
      <RelatedProducts />

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="section-container">
          <CommonTitle
            tag="FAQ"
            extraTagCss="bg-theme-color/6"
            title="FREQUENTLY ASKED QUESTIONS"
            extraTitleCss=""
            description="Find answers to common questions about our window and door ranges"
            extraDescriptionCss="max-w-[650px]"
          />
          <ByRangeFAQ />
        </div>
      </section>

      {/* Call to Action Section - Dark */}
      <section className="bg-[#F7F7F7]">
        <div className="section-container">
          <div className="md:p-8 sm:p-6 p-4 bg-theme-color rounded-xl">
            <div className="grid gap-6 text-center">
              <div className="grid gap-2">
                <h2 className="font-semibold text-2xl-responsive font-titillium text-white">
                  Need More Information?
                </h2>
                <p className="text-[#C6C6C6] lg:text-lg sm:text-base text-sm font-archivo max-w-2xl mx-auto">
                  Our team is here to help you find the perfect window and door range for your project. Get in touch today!
                </p>
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/contact-us"
                  className="px-7 py-3 rounded-xl bg-white flex gap-2.5 font-semibold text-theme-color font-archivo items-center hover:bg-theme-color hover:text-white transition-all duration-300 group"
                >
                  Contact Us
                  <div className="p-1 bg-theme-color rounded-full group-hover:bg-white transition-all duration-300">
                    <ArrowRightIcon size="20" className="text-white group-hover:text-theme-color transition-all duration-300" />
                  </div>
                </Link>
                <Link
                  href="/product"
                  className="px-7 py-3 rounded-xl bg-transparent flex gap-2.5 font-semibold text-white font-archivo items-center border border-solid border-white/30 hover:bg-white/10 transition-all"
                >
                  Explore Products
                  <div className="p-1 bg-white/20 rounded-full">
                    <ArrowRightIcon color="white" size="20" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ByRangePage;
