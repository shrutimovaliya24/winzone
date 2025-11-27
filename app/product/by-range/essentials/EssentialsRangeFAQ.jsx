"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const essentialsRangeFAQs = [
  {
    id: 1,
    question: "What is the Essentials range?",
    answer:
      "The Essentials range is WinZone's value-packed aluminium window and door series offering excellent value with reliable performance. The range includes casement windows, sliding windows, and pro slider windows - all featuring thermal break technology and energy-efficient design at an affordable price point.",
  },
  {
    id: 2,
    question: "What makes Essentials different from other ranges?",
    answer:
      "Essentials range is designed to offer excellent value with reliable performance and quality. While it may not have all the premium features of higher-end series, it provides good thermal performance, security, and durability at an affordable price point, making it perfect for budget-conscious homeowners who don't want to compromise on quality.",
  },
  {
    id: 3,
    question: "What products are available in the Essentials range?",
    answer:
      "The Essentials range includes casement windows, sliding windows (Essential Slider), and enhanced sliding windows (Essential Pro Slider). Each product type features thermal break technology and is designed for specific applications. Casement windows provide excellent ventilation, sliding windows offer space-saving solutions, and pro slider provides enhanced features.",
  },
  {
    id: 4,
    question: "Is Essentials range energy efficient?",
    answer:
      "Yes! Essentials range features thermal break technology that ensures good energy efficiency. The double glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation, helping to reduce your energy bills.",
  },
  {
    id: 5,
    question: "Can Essentials range be customized?",
    answer:
      "Absolutely! Essentials range can be customized in various sizes, configurations, and finishes. You can choose from different glazing options, colors, and hardware finishes to match your aesthetic preferences. Various opening styles and configurations are available to fit your space perfectly.",
  },
];

const EssentialsRangeFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {essentialsRangeFAQs.map((item) => {
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

export default EssentialsRangeFAQ;


