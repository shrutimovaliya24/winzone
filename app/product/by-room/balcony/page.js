import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import BalconyFAQ from "./BalconyFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows and Doors for Balcony | WinZone",
  description: "Premium aluminium windows and doors designed specifically for balconies. Enhance your balcony with weather-resistant, stylish, and secure aluminium windows and doors from WinZone.",
  keywords: [
    "balcony windows",
    "balcony doors",
    "aluminium balcony windows",
    "balcony window design",
    "weatherproof balcony windows",
    "energy efficient balcony windows",
    "balcony sliding doors",
    "balcony security windows",
  ],
};

const balconyInformation = [
  "Transform your balcony into a beautiful and functional outdoor space with WinZone's premium aluminium windows and doors. Our balcony-specific solutions are designed to provide excellent weather resistance, security, and seamless indoor-outdoor connections.",
  "Our aluminium windows for balconies feature excellent weather resistance and durability, ensuring protection from harsh weather conditions while maintaining beautiful aesthetics. The thermal break technology helps maintain comfortable indoor temperature while reducing energy costs.",
  "Choose from various styles including sliding doors, bi-fold doors, casement windows, and fixed glazing options. All our balcony windows come with advanced locking mechanisms for enhanced security and smooth operation for daily use.",
  "The sleek, modern design of our aluminium balcony windows complements any architectural style while providing maximum natural light and ventilation control. Customize your balcony windows to match your aesthetic preferences and create the perfect connection to your outdoor spaces.",
];

const balconyAdvantages = [
  "Excellent weather resistance for all climate conditions",
  "Seamless indoor-outdoor connection with sliding and bi-fold door options",
  "Excellent thermal insulation to maintain comfortable indoor temperature",
  "Energy-efficient design reduces heating and cooling costs",
  "Low maintenance - aluminium frames require minimal upkeep",
  "Durable and long-lasting construction resistant to weather elements",
  "Modern, sleek design that enhances balcony aesthetics",
  "Customizable sizes and styles to fit your balcony perfectly",
];


const BalconyPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Aluminium Windows and Doors for Balcony"
        description="Create a beautiful and functional balcony space with our premium aluminium windows and doors. Designed for excellent weather resistance, security, and seamless indoor-outdoor connections."
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
            title="BALCONY WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {balconyInformation.map((item, index) => (
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
            title="WHY CHOOSE BALCONY WINDOWS & DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/balcony-img/balcony-1.webp"
              width={402}
              height={408}
              alt="Balcony Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {balconyAdvantages.map((item, index) => (
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
            description="Find answers to common questions about balcony aluminium windows and doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <BalconyFAQ />
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
                  Our team is here to help you find the perfect balcony windows and doors solution. Get in touch today!
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

export default BalconyPage;
