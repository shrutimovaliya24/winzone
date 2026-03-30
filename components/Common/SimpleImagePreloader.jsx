"use client";
import { useEffect } from "react";

const ImagePreloader = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only preload critical above-the-fold images (hero + logo)
    const criticalImages = [
      "/img/dahsboard-hero-section.webp",
      "/logo/logo.png",
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;

      if (src.endsWith(".webp")) {
        link.type = "image/webp";
      } else if (src.endsWith(".png")) {
        link.type = "image/png";
      }

      document.head.appendChild(link);
    });

    return () => {
      // Cleanup preload links on unmount
      const preloadLinks = document.head.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach((link) => link.remove());
    };
  }, []);

  return null;
};

export default ImagePreloader;
