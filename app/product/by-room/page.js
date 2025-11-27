import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import ByRoomFAQ from "./ByRoomFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows & Doors by Room | WinZone",
  description: "Browse our aluminium windows and doors by room type. Explore bedroom, living room, kitchen, and balcony solutions to find the perfect fit for each space in your home from WinZone.",
  keywords: [
    "aluminium windows by room",
    "bedroom windows",
    "living room windows",
    "kitchen windows",
    "balcony windows",
    "room-specific windows",
    "window solutions by room",
    "room windows",
  ],
};

const byRoomInformation = [
  "Discover WinZone's room-specific aluminium windows and doors. Our solutions are tailored to meet the unique requirements of different rooms, ensuring optimal performance, comfort, and aesthetics for each space in your home.",
  "Our room-specific range includes solutions for bedrooms (focusing on sound insulation and privacy), living rooms (emphasizing natural light and indoor-outdoor connections), kitchens (prioritizing ventilation and easy maintenance), and balconies (featuring weather resistance and security).",
  "Each room has different needs - bedrooms require quiet and privacy, living rooms need maximum light and seamless connections, kitchens need ventilation and easy cleaning, and balconies need weather protection. Our room-specific solutions address these unique requirements.",
  "Explore our room-specific solutions to find the perfect windows and doors for each space. Our team can help you select the right solutions based on your room requirements, ensuring optimal performance and aesthetics throughout your home.",
];

const byRoomAdvantages = [
  "Room-specific solutions tailored to unique requirements",
  "Bedroom windows with excellent sound insulation and privacy",
  "Living room windows with maximum natural light and seamless connections",
  "Kitchen windows with excellent ventilation and easy maintenance",
  "Balcony windows with superior weather resistance and security",
  "All room solutions feature thermal break technology and energy efficiency",
  "Customizable options for each room to fit your space perfectly",
  "Expert guidance to help you choose the right solutions for each room",
];


const ByRoomPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Aluminium Windows & Doors by Room"
        description="Explore room-specific solutions for bedrooms, living rooms, kitchens, and balconies. Find the perfect windows and doors for each space in your home."
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
            title="ROOM-SPECIFIC WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {byRoomInformation.map((item, index) => (
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
            title="WHY CHOOSE ROOM-SPECIFIC WINDOWS & DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/by-room-img/by-room-1.webp"
              width={402}
              height={408}
              alt="Room-Specific Windows & Doors Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {byRoomAdvantages.map((item, index) => (
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
            description="Find answers to common questions about room-specific windows and doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <ByRoomFAQ />
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
                  Our team is here to help you find the perfect room-specific windows and doors solution. Get in touch today!
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

export default ByRoomPage;
