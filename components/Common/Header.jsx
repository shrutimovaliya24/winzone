"use client";
import { ArrowRightIcon, Menu, SidebarClose, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

const navInfo = [
  { id: 1, name: "HOME", href: "/" },
  { id: 2, name: "ABOUT US", href: "/about-us" },
  { id: 3, name: "PRODUCT", href: "/product" },
  { id: 4, name: "PROJECT", href: "/project" },
  {
    id: 5,
    name: "LOCATIONS",
    href: "#",
    children: [
      { name: "Rajkot", href: "/rajkot" },
      { name: "Vadodara", href: "/vadodara" },
      { name: "Bangalore", href: "/bangalore" },
      { name: "Mumbai", href: "/mumbai" },
      { name: "Hyderabad", href: "/hyderabad" },
      { name: "Chennai", href: "/chennai" },
    ],
  },
  { id: 6, name: "BLOG", href: "/blog" },
  { id: 7, name: "CAREER", href: "/career" },
  { id: 8, name: "E-CATALOGUE", href: "/e-catalogue" },
];

const locationPaths = ["/rajkot", "/vadodara", "/bangalore", "/mumbai", "/hyderabad", "/chennai"];

const Header = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileLocationOpen, setMobileLocationOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setShow(!show);
  const closeMenu = () => {
    setShow(false);
    setMobileLocationOpen(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLocationActive = locationPaths.includes(pathname);

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
        <nav className="hidden lg:flex items-center">
          {navInfo.map((item) =>
            item.children ? (
              <div
                key={item.id}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`${
                    isLocationActive
                      ? "text-theme-color font-semibold text-base"
                      : "text-[#777777] text-sm"
                  } px-4 py-3 font-titillium flex items-center gap-1`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {item.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 bg-white border border-solid border-[#EBEBEB] rounded-xl shadow-lg py-2 min-w-[180px] z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 font-titillium text-sm hover:bg-[#F7F7F7] hover:text-theme-color transition-colors ${
                          pathname === child.href
                            ? "text-theme-color font-semibold bg-[#F7F7F7]"
                            : "text-[#777777]"
                        }`}
                        onClick={() => setDropdownOpen(false)}
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
                        isLocationActive
                          ? "text-theme-color font-semibold text-base"
                          : "text-[#777777] text-sm"
                      } font-titillium flex items-center gap-1 w-full`}
                      onClick={() => setMobileLocationOpen(!mobileLocationOpen)}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileLocationOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileLocationOpen && (
                      <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-solid border-theme-color/20">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`font-titillium text-sm py-1 ${
                              pathname === child.href
                                ? "text-theme-color font-semibold"
                                : "text-[#777777]"
                            }`}
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
