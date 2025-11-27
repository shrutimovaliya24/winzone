"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const duraslimRangeFAQs = [
  {
    id: 1,
    question: "What is the Duraslim range?",
    answer:
      "The Duraslim range is WinZone's premium ultra-slim aluminium window and door series featuring slim profiles that maximize glass area. The range includes casement windows, tilt and turn windows, and sliding windows and doors - all designed to provide maximum natural light while maintaining excellent thermal performance and structural integrity.",
  },
  {
    id: 2,
    question: "What makes Duraslim different from other ranges?",
    answer:
      "Duraslim features ultra-slim profiles that maximize glass area and natural light while maintaining excellent thermal performance. The advanced thermal break technology ensures optimal energy efficiency, and the modern design enhances architectural aesthetics. It's the premium option for homeowners who want sleek aesthetics with superior functionality.",
  },
  {
    id: 3,
    question: "What products are available in the Duraslim range?",
    answer:
      "The Duraslim range includes casement windows, tilt and turn windows, and sliding windows and doors. Each product type features ultra-slim profiles and is designed for specific applications. Casement windows provide excellent ventilation, tilt and turn offer versatile opening options, and sliding windows provide space-saving solutions.",
  },
  {
    id: 4,
    question: "Is Duraslim range energy efficient?",
    answer:
      "Yes! Duraslim range features advanced thermal break technology that ensures optimal energy efficiency. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation, significantly reducing your energy bills.",
  },
  {
    id: 5,
    question: "Can Duraslim range be customized?",
    answer:
      "Absolutely! Duraslim range can be customized in various sizes, configurations, and finishes. You can choose from different glazing options, colors, and hardware finishes to match your aesthetic preferences. Various opening styles and configurations are available to fit your space perfectly.",
  },
];

const DuraslimRangeFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {duraslimRangeFAQs.map((item) => {
        const isOpen = show === item.id;
        return (
          <div
            key={item.id}
            className="sm:p-6 p-4 bg-white rounded-xl w-full cursor-pointer"
            onClick={() => toggleAnswer(item.id)}
          >
            <div className="flex justify-between gap-4 items-start">
              <h3 className="font-titillium lg:text-xl text-lg text-theme-color font-semibold flex-1">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="h-fit flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d={isOpen ? "M5 12H19" : "M12 5V19M5 12H19"}
                    stroke="#29485F"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#777777] lg:text-lg text-base font-archivo sm:p-4 p-2 sm:mt-4 mt-2 bg-[#F7F7F7] rounded-xl overflow-hidden"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default DuraslimRangeFAQ;


