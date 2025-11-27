"use client";
import { ArrowRightIcon, Menu, SidebarClose } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navInfo = [
  {
    id: 1,
    name: "HOME",
    href: "/",
  },
  {
    id: 2,
    name: "ABOUT US",
    href: "/about-us",
  },
  {
    id: 3,
    name: "PRODUCT",
    href: "/product",
  },
  {
    id: 4,
    name: "PROJECT",
    href: "/project",
  },
  {
    id: 5,
    name: "BLOG",
    href: "/blog",
  },
  {
    id: 6,
    name: "CAREER",
    href: "/career",
  },
  {
    id: 7,
    name: "E-CATALOGUE",
    href: "/e-catalogue",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow(!show);
  const closeMenu = () => setShow(false);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 1024) {
        setShow(false);
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

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
        <nav className="hidden lg:flex items-center">
          {navInfo.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={` ${
                pathname === item.href
                  ? "text-theme-color font-semibold text-base"
                  : "text-[#777777] text-sm"
              } px-4 py-3 font-titillium`}
            >
              {item.name}
            </Link>
          ))}
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
      <div
        className={`block lg:hidden fixed top-0 left-0 w-full h-full z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      <div
        className={`block lg:hidden fixed top-0 left-0 h-full w-full sm:w-[300px] bg-white z-50 p-4 sm:p-6 transition-transform duration-300 ${
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
            <nav className="flex flex-col gap-6">
              {navInfo.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className={` ${
                    pathname === item.href
                      ? "text-theme-color font-semibold text-base"
                      : "text-[#777777] text-sm"
                  } font-titillium`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
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
