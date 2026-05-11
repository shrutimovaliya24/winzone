"use client";
import { ArrowRightIcon, Menu, SidebarClose, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { cities } from "@/app/_data/cities";
import { products as winzonProducts } from "@/app/_data/products";

const locationChildren = cities.map((c) => ({
  name: c.name,
  href: `/${c.slug}`,
}));

const productChildren = [
  { name: "All Products", href: "/product", separator: true },
  ...winzonProducts.map((p) => ({
    name: p.name,
    href: `/${p.slug}`,
  })),
];

const navInfo = [
  { id: 1, name: "HOME", href: "/" },
  { id: 2, name: "ABOUT US", href: "/about-us" },
  {
    id: 3,
    name: "PRODUCT",
    href: "/product",
    children: productChildren,
    layout: "mega",
  },
  { id: 4, name: "PROJECT", href: "/project" },
  {
    id: 5,
    name: "LOCATIONS",
    href: "#",
    children: locationChildren,
    layout: "list",
  },
  { id: 6, name: "BLOG", href: "/blog" },
  { id: 7, name: "CAREER", href: "/career" },
  { id: 8, name: "E-CATALOGUE", href: "/e-catalogue" },
];

const childPathsForItem = (item) =>
  item.children ? item.children.map((c) => c.href) : [];

const Header = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [mobileOpenId, setMobileOpenId] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setShow(!show);
  const closeMenu = () => {
    setShow(false);
    setMobileOpenId(null);
  };

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 1024) {
        setShow(false);
      }
    };
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  // Close dropdown when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isItemActive = (item) => {
    if (item.children) {
      const paths = childPathsForItem(item);
      // For PRODUCT dropdown the parent /product itself is also active
      if (item.href && item.href !== "#" && pathname === item.href) return true;
      return paths.includes(pathname);
    }
    return pathname === item.href;
  };

  return (
    <header className="border-b border-solid border-theme-color/14">
      <div className="mx-auto container flex justify-between items-center sm:px-6 px-4 max-w-full">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo/logo.png"
            width={146}
            height={36}
            className="w-[120px] sm:w-[147px] h-7 sm:h-9"
            alt="WinZone Logo"
          />
        </Link>
        <button onClick={toggleMenu} className="lg:hidden block py-4 sm:py-5">
          <Menu size={24} className="sm:w-7 sm:h-7" />
        </button>

        {/* Desktop Nav */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center">
          {navInfo.map((item) =>
            item.children ? (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setOpenDropdownId(item.id)}
                onMouseLeave={() => setOpenDropdownId(null)}
              >
                <button
                  className={`${
                    isItemActive(item)
                      ? "text-theme-color font-semibold text-base"
                      : "text-[#777777] text-sm"
                  } px-4 py-3 font-titillium flex items-center gap-1`}
                  onClick={() =>
                    setOpenDropdownId((id) => (id === item.id ? null : item.id))
                  }
                  aria-expanded={openDropdownId === item.id}
                  aria-haspopup="true"
                >
                  {item.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdownId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdownId === item.id && item.layout === "mega" && (
                  <div className="absolute top-full left-0 bg-white border border-solid border-[#EBEBEB] rounded-xl shadow-lg p-4 min-w-[640px] xl:min-w-[760px] z-50">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 font-titillium text-sm rounded hover:bg-[#F7F7F7] hover:text-theme-color transition-colors ${
                            pathname === child.href
                              ? "text-theme-color font-semibold bg-[#F7F7F7]"
                              : "text-[#777777]"
                          } ${child.separator ? "border-b border-solid border-[#EBEBEB] mb-1 pb-2 col-span-3 font-semibold text-theme-color/90 hover:bg-transparent" : ""}`}
                          onClick={() => setOpenDropdownId(null)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {openDropdownId === item.id && item.layout !== "mega" && (
                  <div className="absolute top-full left-0 bg-white border border-solid border-[#EBEBEB] rounded-xl shadow-lg py-2 min-w-[200px] z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 font-titillium text-sm hover:bg-[#F7F7F7] hover:text-theme-color transition-colors ${
                          pathname === child.href
                            ? "text-theme-color font-semibold bg-[#F7F7F7]"
                            : "text-[#777777]"
                        }`}
                        onClick={() => setOpenDropdownId(null)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                key={item.id}
                className={`${
                  pathname === item.href
                    ? "text-theme-color font-semibold text-base"
                    : "text-[#777777] text-sm"
                } px-4 py-3 font-titillium`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="py-5 lg:block hidden">
          <Link
            href="/contact-us"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-theme-color flex gap-2 sm:gap-2.5 font-semibold text-white font-archivo items-center text-sm sm:text-base"
          >
            Get In touch
            <div className="p-1 bg-white rounded-full">
              <ArrowRightIcon color="#29485F" size="20" />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`block lg:hidden fixed top-0 left-0 w-full h-full z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Sidebar */}
      <div
        className={`block lg:hidden fixed top-0 left-0 h-full w-full sm:w-[300px] bg-white z-50 p-4 sm:p-6 transition-transform duration-300 overflow-y-auto ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="grid gap-8">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/logo/logo.png"
                width={146}
                height={36}
                className="w-[120px] sm:w-[147px] h-7 sm:h-9"
                alt="WinZone Logo"
              />
            </Link>
            {show && (
              <SidebarClose
                onClick={() => setShow(false)}
                className="font-extralight"
                color="#29485f"
              />
            )}
          </div>

          <div className="grid gap-6">
            <nav className="flex flex-col gap-4">
              {navInfo.map((item) =>
                item.children ? (
                  <div key={item.id}>
                    <button
                      className={`${
                        isItemActive(item)
                          ? "text-theme-color font-semibold text-base"
                          : "text-[#777777] text-sm"
                      } font-titillium flex items-center gap-1 w-full`}
                      onClick={() =>
                        setMobileOpenId((id) =>
                          id === item.id ? null : item.id,
                        )
                      }
                      aria-expanded={mobileOpenId === item.id}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileOpenId === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileOpenId === item.id && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-solid border-theme-color/20 max-h-[60vh] overflow-y-auto">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`font-titillium text-sm py-1 ${
                              pathname === child.href
                                ? "text-theme-color font-semibold"
                                : "text-[#777777]"
                            } ${child.separator ? "font-semibold text-theme-color/90 border-b border-solid border-[#EBEBEB] pb-2 mb-1" : ""}`}
                            onClick={closeMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    key={item.id}
                    className={`${
                      pathname === item.href
                        ? "text-theme-color font-semibold text-base"
                        : "text-[#777777] text-sm"
                    } font-titillium`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-theme-color flex gap-2 sm:gap-2.5 font-semibold text-white font-archivo items-center w-fit text-sm sm:text-base"
            >
              Get In touch
              <div className="p-1 bg-white rounded-full">
                <ArrowRightIcon color="#29485F" size="20" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
