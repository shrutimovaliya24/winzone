import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import DuraslimRangeFAQ from "./DuraslimRangeFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Duraslim Aluminium Doors & Windows | WinZone",
  description: "Premium Duraslim series aluminium doors and windows with ultra-slim profiles. Enhance your home with energy-efficient, modern, and stylish Duraslim solutions from WinZone.",
  keywords: [
    "duraslim range",
    "slim windows",
    "aluminium slim windows",
    "duraslim series",
    "ultra-slim profile windows",
    "energy efficient slim windows",
    "modern slim windows",
    "premium windows",
  ],
};

const duraslimRangeInformation = [
  "Discover WinZone's premium Duraslim series of ultra-slim aluminium doors and windows. Our Duraslim series features slim profiles that maximize glass area while providing excellent thermal performance and modern aesthetics.",
  "The Duraslim range includes casement windows, tilt and turn windows, and sliding windows and doors - all featuring ultra-slim profiles for maximum natural light. The advanced thermal break technology ensures optimal energy efficiency while maintaining structural integrity.",
  "Perfect for modern homes and commercial projects where sleek aesthetics and maximum glass area are desired. The Duraslim range combines the benefits of slim profiles with superior functionality, making it ideal for contemporary architecture.",
  "Explore our Duraslim range to find the perfect solution for your project. Our team can help you understand the features and benefits of this premium range and select the best options for your space.",
];

const duraslimRangeAdvantages = [
  "Ultra-slim profiles maximize glass area and natural light",
  "Excellent thermal performance with advanced thermal break technology",
  "Energy-efficient design reduces heating and cooling costs",
  "Modern, sleek design that enhances architectural aesthetics",
  "Multiple product types including casement, tilt and turn, and sliding",
  "Durable and long-lasting construction for years of reliable performance",
  "Superior security with multi-point locking systems",
  "Customizable sizes and configurations to fit your space perfectly",
];


const DuraslimRangePage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Duraslim Aluminium Doors & Windows"
        description="Experience premium ultra-slim windows with excellent thermal performance and modern aesthetics. Designed for maximum natural light and energy efficiency."
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
            title="DURASLIM RANGE INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {duraslimRangeInformation.map((item, index) => (
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
            title="WHY CHOOSE DURASLIM RANGE FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/duraslim-range-img/duraslim-range-1.webp"
              width={402}
              height={408}
              alt="Duraslim Range Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {duraslimRangeAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Duraslim range"
            extraDescriptionCss="max-w-[650px]"
          />
          <DuraslimRangeFAQ />
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
                  Our team is here to help you find the perfect Duraslim range solution. Get in touch today!
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

export default DuraslimRangePage;
