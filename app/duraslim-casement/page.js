import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import DuraslimCasementFAQ from "./DuraslimCasementFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Duraslim Slim Aluminium Casement Windows | WinZone",
  description: "Premium Duraslim slim aluminium casement windows with excellent thermal performance and modern aesthetics. Enhance your home with energy-efficient, secure, and stylish casement windows from WinZone.",
  keywords: [
    "duraslim casement",
    "slim casement windows",
    "aluminium casement windows",
    "casement window design",
    "energy efficient casement windows",
    "slim profile windows",
    "modern casement windows",
    "thermal break windows",
  ],
};

const duraslimCasementInformation = [
  "Transform your space with WinZone's premium Duraslim slim aluminium casement windows. Our casement windows feature ultra-slim profiles that maximize glass area while providing excellent thermal performance and modern aesthetics.",
  "Our Duraslim casement windows feature advanced thermal break technology that ensures optimal energy efficiency. The slim profile design allows for maximum natural light while maintaining structural integrity and weather resistance.",
  "Choose from various configurations and opening options to suit your needs. All our Duraslim casement windows come with advanced multi-point locking mechanisms for enhanced security and weather-resistant seals for optimal performance.",
  "The sleek, modern design of our Duraslim casement windows complements any architectural style while providing maximum natural light and ventilation control. Customize your casement windows to match your aesthetic preferences and create the perfect living environment.",
];

const duraslimCasementAdvantages = [
  "Ultra-slim profile maximizes glass area and natural light",
  "Excellent thermal performance with advanced thermal break technology",
  "Superior security with multi-point locking systems",
  "Energy-efficient design reduces heating and cooling costs",
  "Low maintenance - aluminium frames require minimal upkeep",
  "Durable and long-lasting construction for years of reliable performance",
  "Modern, sleek design that enhances architectural aesthetics",
  "Customizable sizes and configurations to fit your space perfectly",
];


const DuraslimCasementPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Duraslim Slim Aluminium Casement Windows"
        description="Experience premium slim profile casement windows with excellent thermal performance and modern aesthetics. Designed for maximum natural light and energy efficiency."
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
            title="DURASLIM CASEMENT WINDOWS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {duraslimCasementInformation.map((item, index) => (
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
            title="WHY CHOOSE DURASLIM CASEMENT WINDOWS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/duraslim-casement-img/duraslim-casement-1.jpg"
              width={402}
              height={408}
              alt="Duraslim Casement Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {duraslimCasementAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Duraslim casement windows"
            extraDescriptionCss="max-w-[650px]"
          />
          <DuraslimCasementFAQ />
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
                  Our team is here to help you find the perfect Duraslim casement windows solution. Get in touch today!
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

export default DuraslimCasementPage;
