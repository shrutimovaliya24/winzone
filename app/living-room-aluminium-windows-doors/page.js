import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import LivingRoomFAQ from "./LivingRoomFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows and Doors for Living Room | WinZone",
  description: "Premium aluminium windows and doors designed specifically for living rooms. Enhance your living room with energy-efficient, stylish, and modern aluminium windows and doors from WinZone.",
  keywords: [
    "living room windows",
    "living room doors",
    "aluminium living room windows",
    "living room window design",
    "sliding living room windows",
    "energy efficient living room windows",
    "living room ventilation",
    "bi-fold living room doors",
  ],
};

const livingRoomInformation = [
  "Transform your living room into a bright and welcoming space with WinZone's premium aluminium windows and doors. Our living room-specific solutions are designed to maximize natural light, provide excellent ventilation, and create seamless indoor-outdoor connections.",
  "Our aluminium windows for living rooms feature large glass areas with slim frames, allowing maximum natural light to flood your space. The thermal break technology helps maintain comfortable room temperature year-round, reducing energy costs while keeping your living room bright and airy.",
  "Choose from various styles including sliding windows, bi-fold doors, casement windows, and structural glazing options. All our living room windows come with advanced locking mechanisms for enhanced security and smooth operation for daily use.",
  "The sleek, modern design of our aluminium living room windows complements any interior style while providing maximum natural light and ventilation control. Customize your living room windows to match your aesthetic preferences and create the perfect connection to your outdoor spaces.",
];

const livingRoomAdvantages = [
  "Maximum natural light with large glass areas and slim frames",
  "Excellent thermal insulation to maintain comfortable living room temperature",
  "Seamless indoor-outdoor connection with bi-fold and sliding door options",
  "Energy-efficient design reduces heating and cooling costs",
  "Low maintenance - aluminium frames require minimal upkeep",
  "Durable and long-lasting construction for years of reliable performance",
  "Modern, sleek design that enhances living room aesthetics",
  "Customizable sizes and styles to fit your living room perfectly",
];

const LivingRoomPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Aluminium Windows and Doors for Living Room"
        description="Create a bright and welcoming living room environment with our premium aluminium windows and doors. Designed for maximum natural light, excellent ventilation, and seamless indoor-outdoor connections."
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
            title="LIVING ROOM WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {livingRoomInformation.map((item, index) => (
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
            title="WHY CHOOSE LIVING ROOM WINDOWS & DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/living-room-img/living-room-1.jpg"
              width={402}
              height={408}
              alt="Living Room Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {livingRoomAdvantages.map((item, index) => (
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
            description="Find answers to common questions about living room aluminium windows and doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <LivingRoomFAQ />
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
                  Our team is here to help you find the perfect living room windows and doors solution. Get in touch today!
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

export default LivingRoomPage;

