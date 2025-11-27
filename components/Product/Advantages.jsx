import Image from "next/image";
import React from "react";
import CommonTitle from "../Common/CommonTitle";

const Information = [
  "We are leading manufacturers and suppliers of high quality Louvers Design Windows in India.",
  "Aluminum Louvers Design are window coverings or ventilation systems made from aluminum materials. They consist of a series of horizontal or vertical slats or blades that are spaced apart to allow for airflow and light control. These Louvers Interior Design can be adjusted or angled to regulate the amount of light, visibility, and ventilation entering a space.",
  "Aluminum louvers include their functionality, durability, versatility, and architectural appeal. In addition to controlling light, visibility, ventilation, and protection, they add a modern touch. Whether used for residential, commercial, or industrial applications, aluminum Louvers Design For Wall are a popular choice due to their practical and aesthetic benefit",
  "Alcom System’s Louvers Design solutions offer the perfect combination of functionality and modern aesthetics. Our aluminium louvers provide excellent ventilation, light control and privacy best for both indoor and outdoor use. Whether you need Louvers Design For Wall facades or sleek Louvers Interior Design for windows, our products are crafted to meet architectural and decorative needs, enhancing homes, offices and commercial spaces.",
];

const Advantages = () => {
  return (
    <section className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
      <CommonTitle
        tag="ABOUT PRODUCT"
        extraTagCss="bg-theme-color/6"
        title="ADVANTAGES"
        extraTitleCss=""
        extraDescriptionCss="hidden"
        gridView={true}
      />
      <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
        <Image
          src="/img/product-advantage.webp"
          width={402}
          height={408}
          alt="Product Advantage Image"
          className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
        />
        <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
          {Information.map((item, index) => (
            <ul key={index}>
              <li className="text-[#777777] xl:text-lg lg:text-base sm:text-lg text-base list-disc">
                {item}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
