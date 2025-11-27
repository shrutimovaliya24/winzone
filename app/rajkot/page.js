import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import RajkotFAQ from "./RajkotFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows & Doors in Rajkot | WinZone",
  description: "Premium aluminium windows and doors in Rajkot. Enhance your home with energy-efficient, secure, and stylish aluminium windows and doors from WinZone's Rajkot location.",
  keywords: [
    "aluminium windows rajkot",
    "aluminium doors rajkot",
    "windows rajkot",
    "doors rajkot",
    "rajkot windows",
    "rajkot doors",
    "aluminium windows gujarat",
    "windows and doors rajkot",
  ],
};

const rajkotInformation = [
  "Discover WinZone's premium aluminium windows and doors in Rajkot. We provide comprehensive solutions for residential, commercial, and industrial projects throughout Rajkot and surrounding areas in Gujarat.",
  "Our Rajkot location offers local expertise and service, ensuring timely delivery and installation. We understand the local climate and architectural preferences, providing solutions that are perfectly suited for Rajkot's weather conditions and building styles.",
  "From modern residential complexes to commercial buildings, we've been serving Rajkot with quality aluminium windows and doors. Our local presence ensures personalized service, quick response times, and ongoing support for all your window and door needs.",
  "Whether you're building a new home, renovating, or upgrading your commercial space in Rajkot, our team is here to help. We offer consultation, design, manufacturing, and installation services to ensure your project is completed to the highest standards.",
];

const rajkotAdvantages = [
  "Local presence in Rajkot for personalized service and quick response",
  "Understanding of local climate and architectural preferences",
  "Timely delivery and installation for Rajkot projects",
  "Comprehensive solutions for residential, commercial, and industrial projects",
  "Quality aluminium windows and doors with excellent thermal performance",
  "Energy-efficient solutions suitable for Rajkot's climate",
  "Local expertise and service for ongoing support",
  "Customizable solutions to fit your Rajkot project perfectly",
];


const RajkotPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Aluminium Windows & Doors in Rajkot"
        description="Experience premium aluminium windows and doors in Rajkot. Local expertise, quality products, and excellent service for your Rajkot project."
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
            title="RAJKOT WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {rajkotInformation.map((item, index) => (
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
            title="WHY CHOOSE WINZONE WINDOWS & DOORS IN RAJKOT"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/rajkot-img/rajkot-1.jpg"
              width={402}
              height={408}
              alt="Rajkot Windows & Doors Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {rajkotAdvantages.map((item, index) => (
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
            description="Find answers to common questions about aluminium windows and doors in Rajkot"
            extraDescriptionCss="max-w-[650px]"
          />
          <RajkotFAQ />
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
                  Our team is here to help you find the perfect windows and doors solution for your Rajkot project. Get in touch today!
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

export default RajkotPage;
