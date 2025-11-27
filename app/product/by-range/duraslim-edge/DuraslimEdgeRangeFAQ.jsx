"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const duraslimEdgeRangeFAQs = [
  {
    id: 1,
    question: "What is the Duraslim Edge range?",
    answer:
      "The Duraslim Edge range is WinZone's premium ultra-slim aluminium window and door series featuring the thinnest possible profiles. The range includes minimal windows, lift and slide doors, and slide and fold doors - all designed to maximize glass area and provide unobstructed views while maintaining excellent thermal performance and structural integrity.",
  },
  {
    id: 2,
    question: "What makes Duraslim Edge different from Duraslim?",
    answer:
      "Duraslim Edge takes the slim profile concept further with minimal frames - the thinnest possible profiles for maximum glass area and unobstructed views. While Duraslim features ultra-slim profiles, Duraslim Edge provides the most minimal frame design, making it ideal for modern architecture where clean lines and maximum glass area are desired.",
  },
  {
    id: 3,
    question: "Are minimal frames as strong as traditional frames?",
    answer:
      "Yes! Despite the minimal frame design, Duraslim Edge windows maintain excellent structural integrity and durability. The frames are engineered with advanced materials and construction techniques to ensure they can withstand wind loads, weather conditions, and daily use while maintaining their minimal aesthetic.",
  },
  {
    id: 4,
    question: "What products are available in the Duraslim Edge range?",
    answer:
      "The Duraslim Edge range includes minimal windows, lift and slide doors, and slide and fold doors. Each product type features ultra-slim minimal frames and is designed for specific applications. Minimal windows are perfect for fixed and opening windows, lift and slide doors are ideal for large openings, and slide and fold doors provide flexible opening options.",
  },
  {
    id: 5,
    question: "Is Duraslim Edge range energy efficient?",
    answer:
      "Yes! Duraslim Edge range features advanced thermal break technology that ensures optimal energy efficiency despite the minimal frames. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation, significantly reducing your energy bills.",
  },
];

const DuraslimEdgeRangeFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {duraslimEdgeRangeFAQs.map((item) => {
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

export default DuraslimEdgeRangeFAQ;


