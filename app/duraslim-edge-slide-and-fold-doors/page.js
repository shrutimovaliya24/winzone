import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import DuraslimEdgeSlideFoldFAQ from "./DuraslimEdgeSlideFoldFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Duraslim Edge Slide & Fold Aluminium Doors | WinZone",
  description: "Premium Duraslim Edge slide and fold aluminium doors with flexible opening. Enhance your home with energy-efficient, versatile, and stylish slide and fold doors from WinZone.",
  keywords: [
    "duraslim edge slide and fold",
    "slide and fold doors",
    "bi-fold doors",
    "aluminium folding doors",
    "flexible opening doors",
    "energy efficient folding doors",
    "modern folding doors",
    "architectural doors",
  ],
};

const duraslimEdgeSlideFoldInformation = [
  "Transform your space with WinZone's premium Duraslim Edge slide and fold aluminium doors. Our slide and fold systems feature flexible opening where multiple panels fold and slide to create wide openings, perfect for seamless indoor-outdoor connections.",
  "Our Duraslim Edge slide and fold doors feature advanced thermal break technology that ensures optimal energy efficiency. The flexible folding mechanism allows panels to stack neatly when open, maximizing space efficiency while providing wide opening capability for excellent ventilation and access.",
  "Choose from various configurations and panel counts to suit your needs. All our Duraslim Edge slide and fold doors come with advanced locking mechanisms for enhanced security and weather-resistant seals for optimal performance.",
  "The sleek, modern design of our Duraslim Edge slide and fold doors complements any architectural style while providing flexible opening options and seamless indoor-outdoor connections. Customize your slide and fold doors to match your aesthetic preferences and create the perfect living environment.",
];

const duraslimEdgeSlideFoldAdvantages = [
  "Flexible opening with panels that fold and slide for wide access",
  "Space-efficient design with panels that stack neatly when open",
  "Excellent thermal performance with advanced thermal break technology",
  "Energy-efficient design reduces heating and cooling costs",
  "Seamless indoor-outdoor connection with wide opening capability",
  "Durable and long-lasting construction for years of reliable performance",
  "Modern, sleek design that enhances architectural aesthetics",
  "Customizable panel counts and configurations to fit your space perfectly",
];


const DuraslimEdgeSlideFoldPage = () => {
  return (
    <div>
      <CommonHeroSection
        title="Duraslim Edge Slide & Fold Aluminium Doors"
        description="Experience premium slide and fold doors with flexible opening and wide access. Designed for seamless indoor-outdoor connections."
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
            title="DURASLIM EDGE SLIDE & FOLD DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {duraslimEdgeSlideFoldInformation.map((item, index) => (
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
            title="WHY CHOOSE DURASLIM EDGE SLIDE & FOLD DOORS FROM WINZONE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/duraslim-edge-slide-fold-img/duraslim-edge-slide-fold-1.webp"
              width={402}
              height={408}
              alt="Duraslim Edge Slide & Fold Doors Advantages"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {duraslimEdgeSlideFoldAdvantages.map((item, index) => (
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
            description="Find answers to common questions about Duraslim Edge slide and fold doors"
            extraDescriptionCss="max-w-[650px]"
          />
          <DuraslimEdgeSlideFoldFAQ />
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
                  Our team is here to help you find the perfect Duraslim Edge slide and fold doors solution. Get in touch today!
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

export default DuraslimEdgeSlideFoldPage;
