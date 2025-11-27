"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const duraslimEdgeMinimalFAQs = [
  {
    id: 1,
    question: "What makes Duraslim Edge minimal windows special?",
    answer:
      "Duraslim Edge minimal windows feature ultra-slim frames that maximize glass area and provide unobstructed views. The minimal frame design allows for maximum natural light while maintaining excellent thermal performance and structural integrity. They are perfect for modern architecture where clean lines and maximum glass area are desired.",
  },
  {
    id: 2,
    question: "Are minimal frames as strong as traditional frames?",
    answer:
      "Yes! Despite the minimal frame design, Duraslim Edge windows maintain excellent structural integrity and durability. The frames are engineered with advanced materials and construction techniques to ensure they can withstand wind loads, weather conditions, and daily use while maintaining their minimal aesthetic.",
  },
  {
    id: 3,
    question: "Are minimal windows energy efficient?",
    answer:
      "Yes! Duraslim Edge minimal windows feature advanced thermal break technology that ensures optimal energy efficiency despite the minimal frames. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation.",
  },
  {
    id: 4,
    question: "Can minimal windows be customized?",
    answer:
      "Absolutely! Duraslim Edge minimal windows can be customized in various sizes, configurations, and finishes. You can choose from different glazing options, colors, and hardware finishes to match your aesthetic preferences. Various opening styles and configurations are available to fit your space perfectly.",
  },
  {
    id: 5,
    question: "What maintenance do minimal windows require?",
    answer:
      "Duraslim Edge minimal windows require minimal maintenance. Regular cleaning of the frames and glass, occasional lubrication of the hardware, and checking of weather seals are typically sufficient. The aluminium frames are resistant to corrosion and don't require painting or special treatments. Our team can provide maintenance guidelines for optimal performance.",
  },
];

const DuraslimEdgeMinimalFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {duraslimEdgeMinimalFAQs.map((item) => {
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

export default DuraslimEdgeMinimalFAQ;


