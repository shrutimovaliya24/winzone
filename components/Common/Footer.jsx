import React from "react";
import Image from "next/image";
import Link from "next/link";
import SvgIcon from "./SvgIcon";

const footerInfo = [
  {
    title: "QuickLinks",
    subCategory: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "About us", href: "/about-us" },
      { id: 3, name: "Product", href: "/product" },
      { id: 4, name: "Project", href: "/project" },
      { id: 5, name: "Blog", href: "/blog" },
      { id: 6, name: "Contact us", href: "/contact-us" },
    ],
  },
  {
    title: "Our Projects",
    subCategory: [
      {
        id: 1,
        name: "Modern Residential Complex",
        href: "/project/modern-residential-complex",
      },
      {
        id: 2,
        name: "Corporate Headquarters",
        href: "/project/corporate-headquarters",
      },
      {
        id: 3,
        name: "Boutique Hotel Renovation",
        href: "/project/boutique-hotel-renovation",
      },
      { id: 4, name: "Medical Center", href: "/project/medical-center" },
      {
        id: 5,
        name: "Luxury Condominiums",
        href: "/project/luxury-condominiums",
      },
      {
        id: 6,
        name: "Luxury Villa Estate",
        href: "/project/luxury-villa-estate",
      },
    ],
  },
];

const socials = [
  { id: "facebook", type: "facebook", aria: "Facebook" },
  { id: "linkedin", type: "linkedin", aria: "LinkedIn" },
  { id: "instagram", type: "instagram", aria: "Instagram" },
  { id: "twitter", type: "twitter", aria: "Twitter" },
];

const FooterColumn = ({ title, items }) => (
  <div className="grid h-fit gap-6 max-sm:w-[160px]">
    <h3 className="font-semibold text-lg text-white">{title}</h3>
    <div className="grid gap-5">
      {items.map((link) => (
        <Link key={link.id} href={link.href} className="text-[#C6C6C6] text-sm">
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

const SocialButton = ({ type, ariaLabel }) => (
  <div
    className="w-10 h-10 rounded-full items-center flex justify-center bg-[#113148]"
    aria-label={ariaLabel}
    role="link"
  >
    <SvgIcon type={type} normalColor="white" className="w-[17px] h-[17px]" />
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-theme-color">
      <div className="sm:pt-6 pt-4 md:pt-9 lg:pt-12 xl:pt-16 sm:px-8 px-4 container mx-auto pb-6">
        <div className="grid xl:grid-cols-[712px_1fr] lg:grid-cols-[500px_1fr] md:grid-cols-2 md:justify-between justify-center lg:gap-12 md:gap-9 sm:gap-7 gap-5 lg:pb-12 md:pb-10 sm:pb-8 pb-6">
          <div className="grid gap-8 w-full ">
            <div className="grid gap-6">
              <div className="flex gap-2 items-center">
                <Image
                  src="/logo/footer-logo.png"
                  width={28}
                  height={28}
                  alt="Footer logo Image"
                  className="w-7 h-7"
                />
                <h2 className="font-russo text-[22px] text-white">WINZON</h2>
              </div>

              <p className="md:max-w-[407px] text-[#C6C6C6] font-titillium">
                Winzone delivers premium aluminium windows, doors, sliding
                systems, facades, and partitions for modern architecture. With
                innovation, precision engineering, and sustainability, we
                transform spaces into experiences.
              </p>
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <SocialButton key={s.id} type={s.type} ariaLabel={s.aria} />
              ))}
            </div>
          </div>

          <div className="font-archivo xl:px-12 lg:px-10 md:px-8 flex max-sm:flex-wrap gap-6 justify-between">
            {footerInfo.map((col) => (
              <FooterColumn
                key={col.title}
                title={col.title}
                items={col.subCategory}
              />
            ))}
          </div>
        </div>

        <div className="py-3 font-archivo md:flex grid md:justify-between gap-4 border-t border-solid border-white/6">
          <p className="text-[#BEBEBE] ">2025 WinZone. All Rights Reserved.</p>

          <div className="text-sm text-[#C6C6C6] md:flex grid md:gap-6 gap-3">
            <p className="pr-6 md:border-r border-solid border-white/20">
              Privacy Policy
            </p>
            <p className="pr-6 md:border-r border-solid border-white/20">
              Terms of Service
            </p>
            <p>SLA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
