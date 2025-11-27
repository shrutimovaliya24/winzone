"use client";

import React, { useEffect, useRef } from "react";

const LEAFLET_CSS =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
const LEAFLET_JS =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";

export default function LocationMap({
  latitude = -37.8136,
  longitude = 144.9631,
  businessName = "Our Business Location",
  address = "Melbourne, VIC, Australia",
  zoom = 15,
  className = "",
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const esc = (s = "") =>
    String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

  useEffect(() => {
    if (!document.querySelector(`link[href="${LEAFLET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = LEAFLET_CSS;
      document.head.appendChild(link);
    }

    const initWhenReady = () => {
      if (!containerRef.current || mapRef.current || !window.L) return;

      const L = window.L;
      const map = L.map(containerRef.current, {
        center: [latitude, longitude],
        zoom,
        scrollWheelZoom: false,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker([latitude, longitude]).addTo(map);
      marker
        .bindPopup(`<strong>${esc(businessName)}</strong><br/>${esc(address)}`)
        .openPopup();

      mapRef.current = map;
      markerRef.current = marker;
    };

    if (window.L) {
      initWhenReady();
    } else if (!document.querySelector(`script[src="${LEAFLET_JS}"]`)) {
      const s = document.createElement("script");
      s.src = LEAFLET_JS;
      s.async = true;
      s.onload = initWhenReady;
      document.head.appendChild(s);
    } else {
      const existing = Array.from(document.scripts).find(
        (p) => p.src === LEAFLET_JS
      );
      existing &&
        existing.addEventListener("load", initWhenReady, { once: true });
    }

    return () => {
      if (mapRef.current) {
        try {
          mapRef.current.remove();
        } catch (_) {}
        mapRef.current = null;
        markerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const marker = markerRef.current;

    map.setView([latitude, longitude], zoom, { animate: true });

    if (marker) {
      marker.setLatLng([latitude, longitude]);
      marker.setPopupContent(
        `<strong>${esc(businessName)}</strong><br/>${esc(address)}`
      );
      marker.openPopup();
    }
  }, [latitude, longitude, zoom, businessName, address]);

  const resetView = () => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], zoom, { animate: true });
      markerRef.current?.openPopup();
    }
  };

  return (
    <div
      className={`w-full overflow-hidden relative ${className}`}
      style={{ minHeight: 220 }}
    >
      <div
        ref={containerRef}
        className="w-full h-[300px] sm:h-[360px] lg:h-[420px] xl:h-[500px]"
        role="application"
        aria-label={`${businessName} location map`}
      />

      <div className="absolute top-3 right-3 z-30 rounded-lg shadow border border-gray-200">
        <button
          onClick={resetView}
          aria-label="Reset map view"
          title="Reset view"
          type="button"
          className="p-2 rounded-md bg-white/95 border border-gray-200 shadow-sm hover:bg-white transition"
        >
          <svg
            className="w-4 h-4 text-gray-700"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 21H5V3H13V9H19V21Z" />
          </svg>
        </button>
      </div>

      <div className="sm:absolute left-4 right-4 bottom-4 z-400 max-sm:pt-6">
        <div className="sm:bg-white/95 sm:p-4 sm:border sm:border-gray-200 sm:rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h4 className="text-base font-semibold text-theme-color font-titillium">
                {businessName}
              </h4>
              <p className="text-sm text-gray-600 font-archivo">{address}</p>
            </div>
            <div className="sm:flex grid gap-2 mt-2 sm:mt-0 font-archivo font-semibold">
              <a
                className="max-md:w-full items-center text-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition"
                href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
              <a
                className="max-md:w-full items-center text-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md transition"
                href={`https://maps.google.com/?q=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Larger
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
