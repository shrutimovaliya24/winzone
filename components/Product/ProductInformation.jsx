import React from "react";
import CommonTitle from "../Common/CommonTitle";

const Information = [
  "We are leading manufacturers and suppliers of high quality Louvers Design Windows in India.",
  "Aluminum Louvers Design are window coverings or ventilation systems made from aluminum materials. They consist of a series of horizontal or vertical slats or blades that are spaced apart to allow for airflow and light control. These Louvers Interior Design can be adjusted or angled to regulate the amount of light, visibility, and ventilation entering a space.",
  "Aluminum louvers include their functionality, durability, versatility, and architectural appeal. In addition to controlling light, visibility, ventilation, and protection, they add a modern touch. Whether used for residential, commercial, or industrial applications, aluminum Louvers Design For Wall are a popular choice due to their practical and aesthetic benefit",
  "Alcom System’s Louvers Design solutions offer the perfect combination of functionality and modern aesthetics. Our aluminium louvers provide excellent ventilation, light control and privacy best for both indoor and outdoor use. Whether you need Louvers Design For Wall facades or sleek Louvers Interior Design for windows, our products are crafted to meet architectural and decorative needs, enhancing homes, offices and commercial spaces.",
];

const ProductInformation = () => {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="section-container grid gap-4">
        <CommonTitle
          tag="ABOUT PRODUCT"
          extraTagCss="bg-theme-color/6"
          title="SYSTEM INFORMATION"
          extraTitleCss=""
          extraDescriptionCss="hidden"
          gridView={true}
        />
        <div className="grid sm:gap-4 gap-2 font-archivo">
          {Information.map((item, index) => (
            <p key={index} className="text-[#777777] sm:text-lg text-base">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
