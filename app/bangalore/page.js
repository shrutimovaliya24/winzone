import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import BangaloreFAQ from "./BangaloreFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows & Doors in Bangalore | WinZone",
  description:
    "Looking for aluminium windows and doors in Bangalore? WinZone offers durable, energy-efficient aluminium window and door solutions with expert installation across Bangalore.",
  keywords: [
    "aluminium windows bangalore",
    "aluminium doors bangalore",
    "windows bangalore",
    "doors bangalore",
    "bangalore windows",
    "aluminium windows karnataka",
    "windows and doors bangalore",
    "best aluminium window company bangalore",
    "sliding windows bangalore",
    "casement windows bangalore",
    "window dealer bangalore",
  ],
  alternates: {
    canonical: "https://winzonsystem.com/bangalore",
  },
  openGraph: {
    title: "Aluminium Windows & Doors in Bangalore | WinZone",
    description:
      "Premium aluminium windows and doors in Bangalore. Durable, energy-efficient solutions for homes and commercial spaces.",
    url: "https://winzonsystem.com/bangalore",
    type: "website",
  },
};

const bangaloreInformation = [
  "Looking for stylish and durable aluminium windows and doors in Bangalore? WinZone is here to help! We make it simple and hassle-free, offering complete solutions for your home, office, or commercial project anywhere in Bangalore and nearby areas.",
  "Our Bangalore team understands the local weather and modern architecture, so our aluminium windows in Bangalore and aluminium doors in Bangalore are strong, durable, and energy-efficient — perfect for the city's climate.",
  "From new apartments and villas to offices and commercial spaces, we offer friendly, personalised service, timely delivery, and professional installation. WinZone also provides expert consultation and custom designs, ensuring every project is completed to the highest standards.",
  "Choose WinZone for reliable, stylish, and high-quality windows and doors in Bangalore that last for years.",
];

const bangaloreAdvantages = [
  "Local Bangalore team always nearby for quick, friendly support",
  "Deep understanding of the city's weather and modern building styles",
  "On-time delivery and expert installation for every Bangalore project",
  "Complete solutions for homes, offices, and commercial spaces",
  "High-quality aluminium windows and doors that look great and last long",
  "Energy-efficient designs to keep your space cool and comfortable",
  "Ongoing support whenever you need us",
  "Fully customizable windows and doors to fit your style and space perfectly",
];

const bangaloreSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "WinZone - Aluminium Windows & Doors Bangalore",
      description:
        "Premium aluminium windows and doors in Bangalore. Energy-efficient, durable solutions for homes and commercial spaces across Bangalore and Karnataka.",
      url: "https://winzonsystem.com/bangalore",
      areaServed: {
        "@type": "City",
        name: "Bangalore",
        containedInPlace: { "@type": "State", name: "Karnataka" },
      },
      parentOrganization: {
        "@type": "Organization",
        name: "WinZone",
        url: "https://winzonsystem.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you provide windows and doors in Bangalore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! WinZone provides premium aluminium windows and doors in Bangalore. Our local team serves homes, offices, villas, and commercial spaces across Bangalore and nearby areas in Karnataka.",
          },
        },
        {
          "@type": "Question",
          name: "What types of windows and doors do you offer in Bangalore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer casement windows, sliding windows, tilt and turn windows, lift and slide doors, slide and fold doors, and more. Our range includes Duraslim, Duraslim Edge, and Essential Series to suit different needs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide installation services in Bangalore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We provide complete installation services in Bangalore. Our team handles consultation, design, manufacturing, and professional installation.",
          },
        },
        {
          "@type": "Question",
          name: "Are your windows suitable for Bangalore's climate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our windows and doors are designed for Bangalore's climate with thermal break technology for energy efficiency and weather-resistant seals for year-round protection.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get windows and doors in Bangalore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timelines depend on project requirements and customization. Our Bangalore presence enables quicker response and delivery. Contact us for specific project timelines.",
          },
        },
      ],
    },
  ],
};

const BangalorePage = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bangaloreSchema) }}
      />
      <CommonHeroSection
        title="Aluminium Windows & Doors in Bangalore"
        description="Get premium aluminium windows and doors in Bangalore. Local expertise, quality products, and excellent service for your home or commercial project."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/product-herosection.webp"
      />

      <section className="bg-white">
        <div className="section-container grid gap-4">
          <CommonTitle
            tag="ABOUT PRODUCT"
            extraTagCss="bg-theme-color/6"
            title="BANGALORE WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {bangaloreInformation.map((item, index) => (
              <p key={index} className="text-[#777777] sm:text-lg text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7]">
        <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
          <CommonTitle
            tag="BENEFITS"
            extraTagCss="bg-theme-color/6"
            title="WHY CHOOSE WINZONE WINDOWS & DOORS IN BANGALORE"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/rajkot-img/rajkot-1.webp"
              width={402}
              height={408}
              alt="Aluminium Windows and Doors in Bangalore"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {bangaloreAdvantages.map((item, index) => (
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

      <section className="bg-white">
        <KeyFeatures />
      </section>

      <RelatedProducts />

      <section className="bg-white">
        <div className="section-container">
          <CommonTitle
            tag="FAQ"
            extraTagCss="bg-theme-color/6"
            title="FREQUENTLY ASKED QUESTIONS"
            extraTitleCss=""
            description="Find answers to common questions about aluminium windows and doors in Bangalore"
            extraDescriptionCss="max-w-[650px]"
          />
          <BangaloreFAQ />
        </div>
      </section>

      <section className="bg-[#F7F7F7]">
        <div className="section-container">
          <div className="md:p-8 sm:p-6 p-4 bg-theme-color rounded-xl">
            <div className="grid gap-6 text-center">
              <div className="grid gap-2">
                <h2 className="font-semibold text-2xl-responsive font-titillium text-white">
                  Need More Information?
                </h2>
                <p className="text-[#C6C6C6] lg:text-lg sm:text-base text-sm font-archivo max-w-2xl mx-auto">
                  Our team is here to help you find the perfect windows and doors solution for your Bangalore project. Get in touch today!
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
                <Link
                  href="/contact-us"
                  className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-white flex gap-2 sm:gap-2.5 font-semibold text-theme-color font-archivo items-center hover:bg-theme-color hover:text-white transition-all duration-300 group text-sm sm:text-base"
                >
                  Contact Us
                  <div className="p-1 bg-theme-color rounded-full group-hover:bg-white transition-all duration-300">
                    <ArrowRightIcon size="20" className="text-white group-hover:text-theme-color transition-all duration-300" />
                  </div>
                </Link>
                <Link
                  href="/product"
                  className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-transparent flex gap-2 sm:gap-2.5 font-semibold text-white font-archivo items-center border border-solid border-white/30 hover:bg-white/10 transition-all text-sm sm:text-base"
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

export default BangalorePage;
