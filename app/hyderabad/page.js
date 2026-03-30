import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import HyderabadFAQ from "./HyderabadFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows & Doors in Hyderabad | WinZone",
  description:
    "Premium aluminium windows and doors in Hyderabad. WinZone delivers energy-efficient, durable aluminium solutions with expert installation across Hyderabad and Telangana.",
  keywords: [
    "aluminium windows hyderabad",
    "aluminium doors hyderabad",
    "windows hyderabad",
    "doors hyderabad",
    "hyderabad windows",
    "aluminium windows telangana",
    "windows and doors hyderabad",
    "best aluminium window company hyderabad",
    "sliding windows hyderabad",
    "casement windows hyderabad",
    "window dealer hyderabad",
  ],
  alternates: {
    canonical: "https://winzonsystem.com/hyderabad",
  },
  openGraph: {
    title: "Aluminium Windows & Doors in Hyderabad | WinZone",
    description:
      "Premium aluminium windows and doors in Hyderabad. Energy-efficient, durable solutions for homes and commercial spaces.",
    url: "https://winzonsystem.com/hyderabad",
    type: "website",
  },
};

const hyderabadInformation = [
  "Check out WinZone's aluminium windows and doors in Hyderabad! We provide full solutions for homes, offices, shops, and factories across Hyderabad and nearby areas.",
  "Our Hyderabad team knows the local climate and building styles, so we make sure your windows and doors are perfect for the city's weather and modern architecture. We also ensure timely delivery and professional installation.",
  "From modern homes to commercial buildings, WinZone provides high-quality aluminium windows and doors with personalised service and quick support whenever you need it.",
  "Whether you are building a new home, renovating, or upgrading your office or shop in Hyderabad, our team is here to help. We offer consultation, design, manufacturing, and installation to make sure your project is done perfectly.",
];

const hyderabadAdvantages = [
  "Right here in Hyderabad, ready to provide personal service and fast support",
  "Deep understanding of Hyderabad's climate and local building styles",
  "Quick delivery and expert installation for every Hyderabad project",
  "Solutions for homes, offices, shops, and industrial buildings — all in one place",
  "High-quality aluminium windows and doors that keep your home cool and comfortable",
  "Energy-efficient designs made for Hyderabad's weather",
  "Ongoing support and local expertise whenever you need it",
  "Customizable options to fit your space and style perfectly",
];

const hyderabadSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "WinZone - Aluminium Windows & Doors Hyderabad",
      description:
        "Premium aluminium windows and doors in Hyderabad. Energy-efficient, durable solutions for homes and commercial spaces across Hyderabad and Telangana.",
      url: "https://winzonsystem.com/hyderabad",
      areaServed: {
        "@type": "City",
        name: "Hyderabad",
        containedInPlace: { "@type": "State", name: "Telangana" },
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
          name: "Do you provide windows and doors in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! WinZone provides premium aluminium windows and doors in Hyderabad. Our team serves homes, offices, shops, and factories across Hyderabad and nearby areas in Telangana.",
          },
        },
        {
          "@type": "Question",
          name: "What types of windows and doors do you offer in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer casement windows, sliding windows, tilt and turn windows, lift and slide doors, slide and fold doors, and more from our Duraslim, Duraslim Edge, and Essential Series.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide installation services in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We provide complete installation services across Hyderabad with consultation, design, manufacturing, and professional installation.",
          },
        },
        {
          "@type": "Question",
          name: "Are your windows suitable for Hyderabad's climate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our windows and doors are designed for Hyderabad's hot summers with thermal break technology for energy efficiency and weather-resistant seals.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get windows and doors in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timelines depend on project requirements and customization. Our Hyderabad presence enables quicker response and delivery. Contact us for specifics.",
          },
        },
      ],
    },
  ],
};

const HyderabadPage = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hyderabadSchema) }}
      />
      <CommonHeroSection
        title="Aluminium Windows & Doors in Hyderabad"
        description="Get premium aluminium windows and doors in Hyderabad. Local expertise, quality products, and excellent service for your home or commercial project."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/product-herosection.webp"
      />

      <section className="bg-white">
        <div className="section-container grid gap-4">
          <CommonTitle
            tag="ABOUT PRODUCT"
            extraTagCss="bg-theme-color/6"
            title="HYDERABAD WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {hyderabadInformation.map((item, index) => (
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
            title="WHY CHOOSE WINZONE WINDOWS & DOORS IN HYDERABAD"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/rajkot-img/rajkot-1.webp"
              width={402}
              height={408}
              alt="Aluminium Windows and Doors in Hyderabad"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {hyderabadAdvantages.map((item, index) => (
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
            description="Find answers to common questions about aluminium windows and doors in Hyderabad"
            extraDescriptionCss="max-w-[650px]"
          />
          <HyderabadFAQ />
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
                  Our team is here to help you find the perfect windows and doors solution for your Hyderabad project. Get in touch today!
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

export default HyderabadPage;
