import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import ProductFAQ from "./ProductFAQ";
import RelatedProductsBlock from "./RelatedProductsBlock";
import React from "react";

const SITE_URL = "https://winzonsystem.com";
const BRAND_NAME = "Winzon System";
const BRAND_LOGO = `${SITE_URL}/logo/logo.png`;

/**
 * Build the Next.js metadata object for a product page.
 * Includes title, description, keywords, canonical, OpenGraph, Twitter Card,
 * and explicit robots: index, follow.
 */
export function buildProductMetadata(product) {
  const url = `${SITE_URL}/${product.slug}`;
  const ogImage = product.hero?.image
    ? product.hero.image.startsWith("http")
      ? product.hero.image
      : `${SITE_URL}${product.hero.image}`
    : `${SITE_URL}/img/product-herosection.webp`;

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url,
      siteName: BRAND_NAME,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: product.hero?.alt || product.fullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.description,
      images: [ogImage],
    },
  };
}

const buildJsonLd = (product) => {
  const url = `${SITE_URL}/${product.slug}`;
  const image = product.hero?.image
    ? product.hero.image.startsWith("http")
      ? product.hero.image
      : `${SITE_URL}${product.hero.image}`
    : `${SITE_URL}/img/product-herosection.webp`;

  const productNode = {
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.fullName,
    alternateName: product.name,
    description: product.seo.description,
    category: product.category,
    image,
    url,
    brand: {
      "@type": "Brand",
      name: BRAND_NAME,
      logo: BRAND_LOGO,
    },
    manufacturer: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
      logo: BRAND_LOGO,
    },
  };

  const breadcrumbNode = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/product`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: url,
      },
    ],
  };

  const graph = [productNode, breadcrumbNode];

  if (Array.isArray(product.faqs) && product.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: product.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

const Paragraph = ({ children }) => (
  <p className="text-[#777777] sm:text-lg text-base whitespace-pre-line leading-relaxed">
    {children}
  </p>
);

const ProductPageTemplate = ({ product }) => {
  if (!product) return null;
  const jsonLd = buildJsonLd(product);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — CommonHeroSection renders the page's single <h1> as its title */}
      <CommonHeroSection
        title={product.fullName}
        description={product.headline}
        extraTitleCss="xl:max-w-[720px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc={product.hero?.image || "/img/product-herosection.webp"}
      />

      {/* Headline tagline + intro paragraphs */}
      <section className="bg-white">
        <div className="section-container grid sm:gap-6 gap-4">
          <CommonTitle
            tag="HEADLINE"
            extraTagCss="bg-theme-color/6"
            title={product.headline}
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {product.intro?.map((p, i) => (
              <Paragraph key={i}>{p}</Paragraph>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      {product.introduction?.length > 0 && (
        <section className="bg-[#F7F7F7]">
          <div className="section-container grid sm:gap-6 gap-4">
            <CommonTitle
              tag="INTRODUCTION"
              extraTagCss="bg-theme-color/6"
              title={`MEET THE ${product.name.toUpperCase()}`}
              extraTitleCss=""
              extraDescriptionCss="hidden"
              gridView={true}
            />
            <div className="grid sm:gap-4 gap-2 font-archivo">
              {product.introduction.map((p, i) => (
                <Paragraph key={i}>{p}</Paragraph>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features */}
      {product.keyFeatures?.length > 0 && (
        <section className="bg-white">
          <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
            <CommonTitle
              tag="KEY FEATURES"
              extraTagCss="bg-theme-color/6"
              title="WHAT MAKES IT SPECIAL"
              extraTitleCss=""
              description={`Engineered features of the ${product.name}.`}
              extraDescriptionCss="max-w-[650px]"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {product.keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="border border-solid border-[#EBEBEB] rounded-xl p-5 sm:p-6 bg-white h-full"
                >
                  <h3 className="font-titillium font-semibold text-lg sm:text-xl text-theme-color mb-3">
                    {f.title}
                  </h3>
                  <p className="font-archivo text-[#777777] sm:text-base text-sm whitespace-pre-line leading-relaxed">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Winzon System */}
      {product.whyChoose?.items?.length > 0 && (
        <section className="bg-[#F7F7F7]">
          <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
            <CommonTitle
              tag="WHY CHOOSE WINZON SYSTEM"
              extraTagCss="bg-theme-color/6"
              title="THE WINZON DIFFERENCE"
              extraTitleCss=""
              extraDescriptionCss="hidden"
              gridView={true}
            />
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {product.whyChoose.items.map((f, i) => (
                <div
                  key={i}
                  className="border border-solid border-[#EBEBEB] rounded-xl p-5 sm:p-6 bg-white"
                >
                  <h3 className="font-titillium font-semibold text-base sm:text-lg text-theme-color mb-2">
                    {f.title}
                  </h3>
                  <p className="font-archivo text-[#777777] text-sm sm:text-base leading-relaxed">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
            {product.whyChoose.closing && (
              <p className="text-[#777777] sm:text-lg text-base font-archivo italic">
                {product.whyChoose.closing}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Design & Customization */}
      {(product.designCustomization?.items?.length > 0 ||
        product.designCustomization?.intro?.length > 0) && (
        <section className="bg-white">
          <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
            <CommonTitle
              tag="DESIGN & CUSTOMIZATION"
              extraTagCss="bg-theme-color/6"
              title="MADE FOR YOUR SPACE"
              extraTitleCss=""
              extraDescriptionCss="hidden"
              gridView={true}
            />
            {product.designCustomization.intro?.length > 0 && (
              <div className="grid sm:gap-4 gap-2 font-archivo">
                {product.designCustomization.intro.map((p, i) => (
                  <Paragraph key={i}>{p}</Paragraph>
                ))}
              </div>
            )}
            {product.designCustomization.items?.length > 0 && (
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 list-none p-0">
                {product.designCustomization.items.map((item, i) => (
                  <li
                    key={i}
                    className="border border-solid border-[#EBEBEB] rounded-xl p-5 sm:p-6 bg-white"
                  >
                    <h3 className="font-titillium font-semibold text-base sm:text-lg text-theme-color mb-2">
                      {item.title}
                    </h3>
                    <p className="font-archivo text-[#777777] text-sm sm:text-base leading-relaxed">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {product.designCustomization.closing && (
              <Paragraph>{product.designCustomization.closing}</Paragraph>
            )}
          </div>
        </section>
      )}

      {/* Use Cases */}
      {product.useCases?.items?.length > 0 && (
        <section className="bg-[#F7F7F7]">
          <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
            <CommonTitle
              tag="USE CASES"
              extraTagCss="bg-theme-color/6"
              title="WHERE IT FITS BEAUTIFULLY"
              extraTitleCss=""
              extraDescriptionCss="hidden"
              gridView={true}
            />
            {product.useCases.intro && (
              <Paragraph>{product.useCases.intro}</Paragraph>
            )}
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 list-none p-0">
              {product.useCases.items.map((item, i) => (
                <li
                  key={i}
                  className="border border-solid border-[#EBEBEB] rounded-xl p-5 sm:p-6 bg-white"
                >
                  <h3 className="font-titillium font-semibold text-base sm:text-lg text-theme-color mb-2">
                    {item.title}
                  </h3>
                  <p className="font-archivo text-[#777777] text-sm leading-relaxed">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            {product.useCases.closing && (
              <Paragraph>{product.useCases.closing}</Paragraph>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      {product.faqs?.length > 0 && (
        <section className="bg-white">
          <div className="section-container">
            <CommonTitle
              tag="FAQ"
              extraTagCss="bg-theme-color/6"
              title="FREQUENTLY ASKED QUESTIONS"
              extraTitleCss=""
              description={`Common questions about the ${product.name} from Winzon System.`}
              extraDescriptionCss="max-w-[650px]"
            />
            <ProductFAQ faqs={product.faqs} />
          </div>
        </section>
      )}

      {/* Related Products — internal cross-linking for SEO */}
      <RelatedProductsBlock currentSlug={product.slug} />

      {/* Closing CTA */}
      {product.closingCta && (
        <section className="bg-[#F7F7F7]">
          <div className="section-container">
            <div className="md:p-8 sm:p-6 p-4 bg-theme-color rounded-xl">
              <div className="grid gap-6 text-center">
                <div className="grid gap-3">
                  <h2 className="font-semibold text-2xl-responsive font-titillium text-white">
                    {product.closingCta.title}
                  </h2>
                  {product.closingCta.body?.map((p, i) => (
                    <p
                      key={i}
                      className="text-[#C6C6C6] lg:text-lg sm:text-base text-sm font-archivo max-w-3xl mx-auto"
                    >
                      {p}
                    </p>
                  ))}
                  {product.closingCta.cta && (
                    <p className="text-white lg:text-lg sm:text-base text-sm font-archivo font-semibold max-w-3xl mx-auto pt-2">
                      {product.closingCta.cta}
                    </p>
                  )}
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
      )}
    </article>
  );
};

export default ProductPageTemplate;
