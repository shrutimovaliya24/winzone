"use client";
import React from "react";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap.jsx"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] lg:h-[450px] xl:h-[500px] rounded-lg bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
});

export default function ClientOnlyLocationMap(props) {
  return <LocationMap {...props} />;
}
