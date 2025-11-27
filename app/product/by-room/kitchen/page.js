import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import KitchenFAQ from "./KitchenFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows and Doors for Kitchen | WinZone",
  description: "Premium aluminium windows and doors designed specifically for kitchens. Enhance your kitchen with energy-efficient, easy-to-clean, and stylish aluminium windows and doors from WinZone.",
  keywords: [
    "kitchen windows",
    "kitchen doors",
    "aluminium kitchen windows",
    "kitchen window design",
    "kitchen ventilation windows",
    "energy efficient kitchen windows",
    "kitchen exhaust windows",
    "kitchen privacy windows",
  ],
};

const kitchenInformation = [
  "Transform your kitchen into a functional and beautiful space with WinZone's premium aluminium windows and doors. Our kitchen-specific solutions are designed to provide excellent ventilation, easy maintenance, and optimal natural light for cooking and dining.",
  "Our aluminium windows for kitchens feature easy-to-clean surfaces and excellent ventilation properties, ensuring a fresh and comfortable cooking environment. The thermal break technology helps maintain comfortable room temperature while reducing energy costs.",
  "Choose from various styles including casement windows, sliding windows, and tilt-and-turn options. All our kitchen windows come with advanced locking mechanisms for enhanced security and smooth operation for daily use.",
  "The sleek, modern design of our aluminium kitchen windows complements any kitchen style while providing maximum natural light and ventilation control. Customize your kitchen windows to match your aesthetic preferences and create the perfect cooking environment.",
];

const kitchenAdvantages = [
  "Excellent ventilation for fresh air and cooking fumes removal",
  "Easy-to-clean surfaces perfect for kitchen environments",
  "Excellent thermal insulation to maintain comfortable kitchen temperature",
  "Energy-efficient design reduces heating and cooling costs",
  "Low maintenance - aluminium frames require minimal upkeep",
  "Durable and long-lasting construction resistant to moisture and heat",
  "Modern, sleek design that enhances kitchen aesthetics",
  "Customizable sizes and styles to fit your kitchen perfectly",
];


const KitchenPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Aluminium Windows and Doors for Kitchen"
        description="Create a functional and beautiful kitchen environment with our premium aluminium windows and doors. Designed for excellent ventilation, easy maintenance, and optimal natural light."
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
            title="KITCHEN WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {kitchenInformation.map((item, index) => (
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
            title="WHY CHOOSE KITCHEN WINDOWS & DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/kitchen-img/kitchen-1.webp"
              width={402}
              height={408}
              alt="Kitchen Windows Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {kitchenAdvantages.map((item, index) => (
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
            description="Find answers to common questions about kitchen aluminium windows and doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <KitchenFAQ />
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
                  Our team is here to help you find the perfect kitchen windows and doors solution. Get in touch today!
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

export default KitchenPage;
