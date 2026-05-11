import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import CityFAQ from "./CityFAQ";
import CityRelatedProducts from "./CityRelatedProducts";
import CityKeyFeatures from "./CityKeyFeatures";
import CityNearby from "./CityNearby";

const SITE = "https://winzonsystem.com";

const buildSchema = (city) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: `WinZone — Aluminium Windows & Doors ${city.name}`,
      description: city.metadata.description,
      url: `${SITE}/${city.slug}`,
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "State", name: city.state },
      },
      parentOrganization: {
        "@type": "Organization",
        name: "WinZone",
        url: SITE,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: `${SITE}/#locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: city.name,
          item: `${SITE}/${city.slug}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: city.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
});

const CityPageTemplate = ({ city }) => {
  const schema = buildSchema(city);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CommonHeroSection
        title={city.hero.title}
        description={city.hero.description}
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc={city.heroImage}
      />

      {/* Information */}
      <section className="bg-white">
        <div className="section-container grid gap-4">
          <CommonTitle
            tag="ABOUT PRODUCT"
            extraTagCss="bg-theme-color/6"
            title={`${city.name.toUpperCase()} WINDOWS & DOORS INFORMATION`}
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {city.information.map((item, index) => (
              <p key={index} className="text-[#777777] sm:text-lg text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#F7F7F7]">
        <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
          <CommonTitle
            tag="BENEFITS"
            extraTagCss="bg-theme-color/6"
            title={`WHY CHOOSE WINZONE WINDOWS & DOORS IN ${city.name.toUpperCase()}`}
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src={city.benefitsImage}
              width={402}
              height={408}
              alt={`Aluminium Windows and Doors in ${city.name}`}
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {city.advantages.map((item, index) => (
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

      {/* Key Features */}
      <section className="bg-white">
        <CityKeyFeatures city={city} />
      </section>

      {/* Related Products */}
      <CityRelatedProducts city={city} />

      {/* FAQ */}
      <section className="bg-white">
        <div className="section-container">
          <CommonTitle
            tag="FAQ"
            extraTagCss="bg-theme-color/6"
            title="FREQUENTLY ASKED QUESTIONS"
            extraTitleCss=""
            description={`Find answers to common questions about aluminium windows and doors in ${city.name}`}
            extraDescriptionCss="max-w-[650px]"
          />
          <CityFAQ faqs={city.faqs} />
        </div>
      </section>

      {/* Nearby / Other Locations — internal linking for SEO */}
      <CityNearby currentSlug={city.slug} />

      {/* CTA */}
      <section className="bg-[#F7F7F7]">
        <div className="section-container">
          <div className="md:p-8 sm:p-6 p-4 bg-theme-color rounded-xl">
            <div className="grid gap-6 text-center">
              <div className="grid gap-2">
                <h2 className="font-semibold text-2xl-responsive font-titillium text-white">
                  Need More Information?
                </h2>
                <p className="text-[#C6C6C6] lg:text-lg sm:text-base text-sm font-archivo max-w-2xl mx-auto">
                  Our team is ready to help you specify the right windows and doors for your {city.name} project. Get in touch today.
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
                <Link
                  href="/contact-us"
                  className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-white flex gap-2 sm:gap-2.5 font-semibold text-theme-color font-archivo items-center hover:bg-theme-color hover:text-white transition-all duration-300 group text-sm sm:text-base"
                >
                  Contact Us
                  <div className="p-1 bg-theme-color rounded-full group-hover:bg-white transition-all duration-300">
                    <ArrowRightIcon
                      size="20"
                      className="text-white group-hover:text-theme-color transition-all duration-300"
                    />
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

export default CityPageTemplate;

// Helper to build Next.js metadata from a city record. Used by each page.js.
export const buildCityMetadata = (city) => ({
  title: city.metadata.title,
  description: city.metadata.description,
  keywords: city.metadata.keywords,
  alternates: { canonical: `${SITE}/${city.slug}` },
  openGraph: {
    title: city.metadata.title,
    description: city.metadata.description,
    url: `${SITE}/${city.slug}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: city.metadata.title,
    description: city.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
});
