import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import EssentialProSliderFAQ from "./EssentialProSliderFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Essential Pro Slider Aluminium Windows & Doors | WinZone",
  description: "Premium Essential Pro Slider aluminium windows and doors with enhanced features. Enhance your home with energy-efficient, smooth-operating, and value-packed sliding windows from WinZone.",
  keywords: [
    "essential pro slider",
    "pro slider windows",
    "aluminium pro slider windows",
    "enhanced sliding windows",
    "value pro windows",
    "energy efficient pro slider",
    "essential pro series",
    "premium value windows",
  ],
};

const essentialProSliderInformation = [
  "Transform your space with WinZone's premium Essential Pro Slider aluminium windows and doors. Our Pro Slider windows offer enhanced features and improved performance compared to the standard Essential series, providing excellent value with upgraded functionality.",
  "Our Essential Pro Slider windows feature advanced thermal break technology that ensures excellent energy efficiency. The enhanced sliding mechanism provides smoother operation and better performance. All windows come with upgraded locking mechanisms and weather-resistant seals.",
  "Choose from various configurations including single sliding, double sliding, and multi-panel systems. All our Essential Pro Slider windows come with enhanced multi-point locking mechanisms for superior security and weather-resistant seals for optimal performance.",
  "The enhanced design of our Essential Pro Slider windows complements any architectural style while providing improved performance and excellent value. Customize your Pro Slider windows to match your aesthetic preferences and create the perfect living environment.",
];

const essentialProSliderAdvantages = [
  "Enhanced features with improved performance over standard Essential series",
  "Excellent value with upgraded functionality and quality",
  "Smooth sliding operation with enhanced hardware",
  "Excellent thermal performance with advanced thermal break technology",
  "Energy-efficient design reduces heating and cooling costs",
  "Superior security with enhanced multi-point locking systems",
  "Durable and long-lasting construction for years of reliable performance",
  "Customizable sizes and configurations to fit your space perfectly",
];


const EssentialProSliderPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Essential Pro Slider Aluminium Windows & Doors"
        description="Experience enhanced features with improved performance. Essential Pro Slider windows designed for homeowners who want upgraded functionality at excellent value."
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
            title="ESSENTIAL PRO SLIDER WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {essentialProSliderInformation.map((item, index) => (
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
            title="WHY CHOOSE ESSENTIAL PRO SLIDER WINDOWS & DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/essential-proslider-img/essential-pro-slider-1.png"
              width={402}
              height={408}
              alt="Essential Pro Slider Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {essentialProSliderAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Essential Pro Slider windows and doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <EssentialProSliderFAQ />
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
                  Our team is here to help you find the perfect Essential Pro Slider windows and doors solution. Get in touch today!
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

export default EssentialProSliderPage;
