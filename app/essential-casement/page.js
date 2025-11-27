import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import EssentialCasementFAQ from "./EssentialCasementFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Essential Series Aluminium Casement Windows | WinZone",
  description: "Premium Essential Series aluminium casement windows with excellent value. Enhance your home with energy-efficient, secure, and affordable casement windows from WinZone.",
  keywords: [
    "essential casement",
    "casement windows",
    "aluminium casement windows",
    "affordable windows",
    "value windows",
    "energy efficient casement windows",
    "essential series windows",
    "budget windows",
  ],
};

const essentialCasementInformation = [
  "Transform your space with WinZone's premium Essential Series aluminium casement windows. Our Essential casement windows offer excellent value with reliable performance, making them perfect for budget-conscious homeowners who don't want to compromise on quality.",
  "Our Essential casement windows feature thermal break technology that ensures good energy efficiency. The side-hinged opening design provides excellent ventilation control and easy operation. All windows come with secure locking mechanisms and weather-resistant seals.",
  "Choose from various configurations and sizes to suit your needs. All our Essential casement windows come with multi-point locking mechanisms for enhanced security and weather-resistant seals for optimal performance.",
  "The practical design of our Essential casement windows complements any architectural style while providing reliable performance and good value. Customize your casement windows to match your aesthetic preferences and create the perfect living environment.",
];

const essentialCasementAdvantages = [
  "Excellent value with reliable performance and quality",
  "Good thermal performance with thermal break technology",
  "Excellent ventilation control with side-hinged opening",
  "Energy-efficient design reduces heating and cooling costs",
  "Secure multi-point locking systems for enhanced security",
  "Durable and long-lasting construction for years of reliable performance",
  "Practical design that complements any architectural style",
  "Customizable sizes and configurations to fit your space perfectly",
];


const EssentialCasementPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Essential Series Aluminium Casement Windows"
        description="Experience excellent value with reliable performance. Essential Series casement windows designed for budget-conscious homeowners who want quality."
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
            title="ESSENTIAL CASEMENT WINDOWS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {essentialCasementInformation.map((item, index) => (
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
            title="WHY CHOOSE ESSENTIAL CASEMENT WINDOWS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/essential-casement-img/essential-casement-1.png"
              width={402}
              height={408}
              alt="Essential Casement Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {essentialCasementAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Essential Series casement windows"
            extraDescriptionCss="max-w-[650px]"
          />
          <EssentialCasementFAQ />
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
                  Our team is here to help you find the perfect Essential casement windows solution. Get in touch today!
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

export default EssentialCasementPage;
