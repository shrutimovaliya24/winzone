import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import DuraslimEdgeMinimalFAQ from "./DuraslimEdgeMinimalFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Duraslim Edge Ultra-Slim Aluminium Windows & Doors | WinZone",
  description: "Premium Duraslim Edge ultra-slim aluminium windows and doors with minimal frames. Enhance your home with energy-efficient, modern, and stylish ultra-slim windows from WinZone.",
  keywords: [
    "duraslim edge minimal",
    "ultra-slim windows",
    "minimal frame windows",
    "aluminium minimal windows",
    "slim profile windows",
    "energy efficient minimal windows",
    "modern minimal design",
    "architectural windows",
  ],
};

const duraslimEdgeMinimalInformation = [
  "Transform your space with WinZone's premium Duraslim Edge ultra-slim aluminium windows and doors. Our minimal frame systems feature the thinnest possible profiles that maximize glass area while providing excellent thermal performance and modern aesthetics.",
  "Our Duraslim Edge minimal windows feature advanced thermal break technology that ensures optimal energy efficiency. The ultra-slim profile design allows for maximum natural light and unobstructed views while maintaining structural integrity and weather resistance.",
  "Choose from various configurations and opening styles to suit your needs. All our Duraslim Edge minimal windows come with advanced locking mechanisms for enhanced security and weather-resistant seals for optimal performance.",
  "The sleek, minimal design of our Duraslim Edge windows complements any architectural style while providing maximum natural light and unobstructed views. Customize your minimal windows to match your aesthetic preferences and create the perfect modern living environment.",
];

const duraslimEdgeMinimalAdvantages = [
  "Ultra-slim minimal frames maximize glass area and natural light",
  "Unobstructed views with the thinnest possible profiles",
  "Excellent thermal performance with advanced thermal break technology",
  "Energy-efficient design reduces heating and cooling costs",
  "Modern, minimalist aesthetic enhances architectural design",
  "Durable and long-lasting construction for years of reliable performance",
  "Customizable sizes and configurations to fit your space perfectly",
  "Low maintenance - aluminium frames require minimal upkeep",
];


const DuraslimEdgeMinimalPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Duraslim Edge Ultra-Slim Aluminium Windows & Doors"
        description="Experience premium ultra-slim minimal windows with maximum glass area and unobstructed views. Designed for modern architecture and optimal natural light."
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
            title="DURASLIM EDGE MINIMAL WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {duraslimEdgeMinimalInformation.map((item, index) => (
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
            title="WHY CHOOSE DURASLIM EDGE MINIMAL WINDOWS & DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/duraslim-edge-minimal-img/duraslim-edge-minimal-1.webp"
              width={402}
              height={408}
              alt="Duraslim Edge Minimal Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {duraslimEdgeMinimalAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Duraslim Edge minimal windows and doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <DuraslimEdgeMinimalFAQ />
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
                  Our team is here to help you find the perfect Duraslim Edge minimal windows and doors solution. Get in touch today!
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

export default DuraslimEdgeMinimalPage;
