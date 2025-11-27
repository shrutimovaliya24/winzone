import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import SlidingFAQ from "./SlidingFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Sliding Windows and Doors | WinZone",
  description: "Premium aluminium sliding windows and doors for modern spaces. Enhance your home with energy-efficient, space-saving, and stylish sliding aluminium windows and doors from WinZone.",
  keywords: [
    "sliding windows",
    "sliding doors",
    "aluminium sliding windows",
    "sliding window design",
    "space-saving windows",
    "energy efficient sliding windows",
    "sliding door systems",
    "modern sliding windows",
  ],
};

const slidingInformation = [
  "Transform your space with WinZone's premium aluminium sliding windows and doors. Our sliding systems are designed to provide space-saving solutions, excellent ventilation, and seamless indoor-outdoor connections for modern living.",
  "Our aluminium sliding windows feature smooth operation with high-quality hardware, ensuring effortless daily use. The thermal break technology helps maintain comfortable room temperature year-round, reducing energy costs while maximizing space efficiency.",
  "Choose from various configurations including single sliding, double sliding, and multi-panel systems. All our sliding windows come with advanced locking mechanisms for enhanced security and weather-resistant seals for optimal performance.",
  "The sleek, modern design of our aluminium sliding windows complements any architectural style while providing maximum natural light and ventilation control. Customize your sliding windows to match your aesthetic preferences and create the perfect connection to your outdoor spaces.",
];

const slidingAdvantages = [
  "Space-saving design perfect for modern living spaces",
  "Smooth operation with high-quality sliding hardware",
  "Excellent thermal insulation to maintain comfortable room temperature",
  "Energy-efficient design reduces heating and cooling costs",
  "Low maintenance - aluminium frames require minimal upkeep",
  "Durable and long-lasting construction for years of reliable performance",
  "Modern, sleek design that enhances architectural aesthetics",
  "Customizable sizes and configurations to fit your space perfectly",
];


const SlidingPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Aluminium Sliding Windows and Doors"
        description="Create seamless indoor-outdoor connections with our premium aluminium sliding windows and doors. Designed for space-saving efficiency, excellent ventilation, and modern aesthetics."
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
            title="SLIDING WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {slidingInformation.map((item, index) => (
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
            title="WHY CHOOSE SLIDING WINDOWS & DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/sliding-img/sliding-1.jpg"
              width={402}
              height={408}
              alt="Sliding Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {slidingAdvantages.map((item, index) => (
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
            description="Find answers to common questions about aluminium sliding windows and doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <SlidingFAQ />
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
                  Our team is here to help you find the perfect sliding windows and doors solution. Get in touch today!
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

export default SlidingPage;
