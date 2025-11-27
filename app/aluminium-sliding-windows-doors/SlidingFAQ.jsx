"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidingFAQs = [
  {
    id: 1,
    question: "What are the advantages of sliding windows?",
    answer:
      "Sliding windows offer several advantages including space-saving design, smooth operation, excellent ventilation, and modern aesthetics. They eliminate the need for swing clearance, making them perfect for areas with limited space. The sliding mechanism provides easy operation and allows for maximum opening area for ventilation.",
  },
  {
    id: 2,
    question: "How do sliding windows work?",
    answer:
      "Sliding windows operate on a track system where one or more panels slide horizontally to open. The panels glide smoothly on high-quality rollers and tracks, allowing for easy operation. Our sliding windows feature weather-resistant seals and advanced locking mechanisms for security and weather protection.",
  },
  {
    id: 3,
    question: "Are sliding windows energy efficient?",
    answer:
      "Yes! Our aluminium sliding windows feature thermal break technology that prevents heat transfer, keeping your space cool in summer and warm in winter. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation.",
  },
  {
    id: 4,
    question: "Can sliding windows be customized?",
    answer:
      "Absolutely! Our sliding windows can be customized in various sizes, configurations, and finishes. You can choose from single sliding, double sliding, or multi-panel systems. Various glazing options, colors, and hardware finishes are available to match your aesthetic preferences and architectural requirements.",
  },
  {
    id: 5,
    question: "What maintenance do sliding windows require?",
    answer:
      "Sliding windows require minimal maintenance. Regular cleaning of the tracks and frames, occasional lubrication of the sliding mechanism, and cleaning of the glass surfaces are typically sufficient. The aluminium frames are resistant to corrosion and don't require painting or special treatments. Our team can provide maintenance guidelines for optimal performance.",
  },
];

const SlidingFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {slidingFAQs.map((item) => {
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

export default SlidingFAQ;

