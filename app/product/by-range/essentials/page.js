import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import EssentialsRangeFAQ from "./EssentialsRangeFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Essentials Aluminium Window & Door Range | WinZone",
  description: "Premium Essentials aluminium window and door range with excellent value. Enhance your home with energy-efficient, reliable, and affordable Essential Series solutions from WinZone.",
  keywords: [
    "essentials range",
    "essential windows",
    "aluminium essential windows",
    "value windows",
    "affordable windows",
    "energy efficient essential windows",
    "essential series range",
    "budget windows",
  ],
};

const essentialsRangeInformation = [
  "Discover WinZone's Essentials range of aluminium doors and windows. Our Essential Series offers excellent value with reliable performance, making it perfect for budget-conscious homeowners who don't want to compromise on quality.",
  "The Essentials range includes casement windows, sliding windows, and pro slider windows - all featuring thermal break technology and energy-efficient design. The range provides good thermal performance, security, and durability at an affordable price point.",
  "Perfect for residential projects where value and reliability are priorities. The Essentials range combines quality construction with affordable pricing, making it ideal for homeowners who want good performance without premium costs.",
  "Explore our Essentials range to find the perfect solution for your project. Our team can help you understand the features and benefits of this value-packed range and select the best options for your space and budget.",
];

const essentialsRangeAdvantages = [
  "Excellent value with reliable performance and quality",
  "Good thermal performance with thermal break technology",
  "Energy-efficient design reduces heating and cooling costs",
  "Secure multi-point locking systems for enhanced security",
  "Durable and long-lasting construction for years of reliable performance",
  "Multiple product types including casement, slider, and pro slider",
  "Affordable pricing makes quality windows accessible",
  "Customizable sizes and configurations to fit your space perfectly",
];


const EssentialsRangePage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Essentials Aluminium Window & Door Range"
        description="Experience excellent value with reliable performance. Essentials range designed for budget-conscious homeowners who want quality."
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
            title="ESSENTIALS RANGE INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {essentialsRangeInformation.map((item, index) => (
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
            title="WHY CHOOSE ESSENTIALS RANGE FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/essentials-range-img/essentials-range-1.jpg"
              width={402}
              height={408}
              alt="Essentials Range Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {essentialsRangeAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Essentials range"
            extraDescriptionCss="max-w-[650px]"
          />
          <EssentialsRangeFAQ />
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
                  Our team is here to help you find the perfect Essentials range solution. Get in touch today!
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

export default EssentialsRangePage;
