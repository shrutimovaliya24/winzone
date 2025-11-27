"use client";
import { preLoadImageData } from "@/app/data";
import { useEffect } from "react";

const ImagePreloader = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Preload all images from data file
    preLoadImageData.forEach((item) => {
      const src = item.href; // Extract href from object
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;

      // Set appropriate MIME type based on file extension
      if (src.endsWith(".avif")) {
        link.type = "image/avif";
      } else if (src.endsWith(".webp")) {
        link.type = "image/webp";
      } else if (src.endsWith(".jpg") || src.endsWith(".jpeg")) {
        link.type = "image/jpeg";
      } else if (src.endsWith(".png")) {
        link.type = "image/png";
      }

      document.head.appendChild(link);
    });

    // Small assets and icons (not in main data file)
    const smallAssets = [
      "/img/grid-box.png",
      "/img/people-few-question.png",
      "/img/not-found.svg",
    ];

    smallAssets.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;

      // Set appropriate MIME type
      if (src.endsWith(".webp")) {
        link.type = "image/webp";
      } else if (src.endsWith(".png")) {
        link.type = "image/png";
      } else if (src.endsWith(".svg")) {
        link.type = "image/svg+xml";
      }

      document.head.appendChild(link);
    });
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;
