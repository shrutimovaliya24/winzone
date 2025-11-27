import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import DuraslimEdgeLiftSlideFAQ from "./DuraslimEdgeLiftSlideFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Duraslim Edge Lift & Slide Aluminium Doors | WinZone",
  description: "Premium Duraslim Edge lift and slide aluminium doors with smooth operation. Enhance your home with energy-efficient, secure, and stylish lift and slide doors from WinZone.",
  keywords: [
    "duraslim edge lift and slide",
    "lift and slide doors",
    "aluminium lift and slide doors",
    "sliding door systems",
    "large opening doors",
    "energy efficient lift and slide",
    "modern sliding doors",
    "architectural doors",
  ],
};

const duraslimEdgeLiftSlideInformation = [
  "Transform your space with WinZone's premium Duraslim Edge lift and slide aluminium doors. Our lift and slide systems feature smooth operation where the door panel lifts slightly before sliding, reducing friction and ensuring effortless operation even with large, heavy panels.",
  "Our Duraslim Edge lift and slide doors feature advanced thermal break technology that ensures optimal energy efficiency. The lift mechanism allows for smooth operation with minimal effort, making them perfect for large openings and heavy door panels. The system provides excellent weather resistance and security.",
  "Choose from various configurations and sizes to suit your needs. All our Duraslim Edge lift and slide doors come with advanced locking mechanisms for enhanced security and weather-resistant seals for optimal performance.",
  "The sleek, modern design of our Duraslim Edge lift and slide doors complements any architectural style while providing seamless indoor-outdoor connections. Customize your lift and slide doors to match your aesthetic preferences and create the perfect living environment.",
];

const duraslimEdgeLiftSlideAdvantages = [
  "Smooth operation with lift mechanism reduces friction and effort",
  "Perfect for large openings and heavy door panels",
  "Excellent thermal performance with advanced thermal break technology",
  "Energy-efficient design reduces heating and cooling costs",
  "Seamless indoor-outdoor connection with wide opening capability",
  "Durable and long-lasting construction for years of reliable performance",
  "Modern, sleek design that enhances architectural aesthetics",
  "Customizable sizes and configurations to fit your space perfectly",
];


const DuraslimEdgeLiftSlidePage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Duraslim Edge Lift & Slide Aluminium Doors"
        description="Experience premium lift and slide doors with smooth operation and large opening capability. Designed for seamless indoor-outdoor connections."
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
            title="DURASLIM EDGE LIFT & SLIDE DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {duraslimEdgeLiftSlideInformation.map((item, index) => (
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
            title="WHY CHOOSE DURASLIM EDGE LIFT & SLIDE DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/duraslim-edge-lift-slide-img/duraslim-edge-lift-slide-1.webp"
              width={402}
              height={408}
              alt="Duraslim Edge Lift & Slide Doors Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {duraslimEdgeLiftSlideAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Duraslim Edge lift and slide doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <DuraslimEdgeLiftSlideFAQ />
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
                  Our team is here to help you find the perfect Duraslim Edge lift and slide doors solution. Get in touch today!
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

export default DuraslimEdgeLiftSlidePage;
