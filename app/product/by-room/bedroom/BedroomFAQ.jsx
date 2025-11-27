"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bedroomFAQs = [
  {
    id: 1,
    question: "What are the best aluminium windows for bedrooms?",
    answer:
      "The best aluminium windows for bedrooms are those with excellent sound insulation, thermal efficiency, and privacy features. Our bedroom windows feature double or triple glazing with acoustic glass, thermal break technology, and various opening styles including casement, sliding, and tilt-and-turn options. These features ensure a quiet, comfortable, and energy-efficient bedroom environment.",
  },
  {
    id: 2,
    question: "How do bedroom windows reduce noise?",
    answer:
      "Our bedroom aluminium windows are specifically designed with excellent sound insulation properties. They feature double or triple glazing with acoustic glass that significantly reduces outside noise. The thermal break technology and tight sealing ensure minimal sound transmission, creating a quiet and peaceful bedroom environment for better sleep quality.",
  },
  {
    id: 3,
    question: "What window styles are best for bedroom ventilation?",
    answer:
      "For bedroom ventilation, we recommend casement windows, tilt-and-turn windows, or sliding windows. Casement windows provide excellent ventilation with full opening capability. Tilt-and-turn windows offer versatile opening options - tilt for ventilation while maintaining security, or full turn for maximum airflow. Sliding windows are perfect for bedrooms where space is limited.",
  },
  {
    id: 4,
    question: "Are bedroom windows energy efficient?",
    answer:
      "Yes! Our aluminium bedroom windows feature thermal break technology that prevents heat transfer, keeping your bedroom cool in summer and warm in winter. This reduces your energy bills significantly. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays, ensuring year-round comfort.",
  },
  {
    id: 5,
    question: "Can I customize bedroom windows for privacy?",
    answer:
      "Absolutely! Our bedroom windows can be customized with various privacy options including frosted glass, tinted glass, or decorative patterns. You can also choose from different glazing options that provide privacy while maintaining natural light. Our team can help you select the perfect privacy solution for your bedroom needs.",
  },
];

const BedroomFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {bedroomFAQs.map((item) => {
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

export default BedroomFAQ;

