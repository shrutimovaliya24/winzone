import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import DuraslimTiltTurnFAQ from "./DuraslimTiltTurnFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Duraslim Aluminium Casement Tilt & Turn Windows | WinZone",
  description: "Premium Duraslim aluminium casement tilt and turn windows with versatile opening options. Enhance your home with energy-efficient, secure, and stylish tilt and turn windows from WinZone.",
  keywords: [
    "duraslim tilt and turn",
    "tilt and turn windows",
    "aluminium tilt and turn windows",
    "versatile windows",
    "energy efficient tilt and turn windows",
    "slim profile windows",
    "modern tilt and turn windows",
    "ventilation windows",
  ],
};

const duraslimTiltTurnInformation = [
  "Transform your space with WinZone's premium Duraslim aluminium casement tilt and turn windows. Our tilt and turn windows offer versatile opening options - tilt for ventilation while maintaining security, or full turn for maximum airflow and easy cleaning.",
  "Our Duraslim tilt and turn windows feature advanced thermal break technology that ensures optimal energy efficiency. The dual opening modes provide excellent ventilation control and security, making them ideal for various applications including bedrooms, living rooms, and high-rise buildings.",
  "Choose from various configurations and sizes to suit your needs. All our Duraslim tilt and turn windows come with advanced multi-point locking mechanisms for enhanced security and weather-resistant seals for optimal performance.",
  "The sleek, modern design of our Duraslim tilt and turn windows complements any architectural style while providing maximum natural light and versatile ventilation control. Customize your tilt and turn windows to match your aesthetic preferences and create the perfect living environment.",
];

const duraslimTiltTurnAdvantages = [
  "Versatile opening options - tilt for ventilation or full turn for maximum airflow",
  "Excellent security with multi-point locking systems in both opening modes",
  "Excellent thermal performance with advanced thermal break technology",
  "Energy-efficient design reduces heating and cooling costs",
  "Easy cleaning with inward opening for safe and convenient maintenance",
  "Durable and long-lasting construction for years of reliable performance",
  "Modern, sleek design that enhances architectural aesthetics",
  "Customizable sizes and configurations to fit your space perfectly",
];


const DuraslimTiltTurnPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Duraslim Aluminium Casement Tilt & Turn Windows"
        description="Experience versatile opening options with premium Duraslim tilt and turn windows. Designed for excellent ventilation, security, and easy maintenance."
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
            title="DURASLIM TILT & TURN WINDOWS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {duraslimTiltTurnInformation.map((item, index) => (
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
            title="WHY CHOOSE DURASLIM TILT & TURN WINDOWS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/duraslim-tilt-turn-img/duraslim-tilt-turn-1.jpg"
              width={402}
              height={408}
              alt="Duraslim Tilt & Turn Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {duraslimTiltTurnAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Duraslim tilt and turn windows"
            extraDescriptionCss="max-w-[650px]"
          />
          <DuraslimTiltTurnFAQ />
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
                  Our team is here to help you find the perfect Duraslim tilt and turn windows solution. Get in touch today!
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

export default DuraslimTiltTurnPage;
