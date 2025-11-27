"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const essentialSliderFAQs = [
  {
    id: 1,
    question: "What makes Essential Series sliding windows different?",
    answer:
      "Essential Series sliding windows are designed to offer excellent value with reliable performance and quality. They provide good thermal performance, security, and durability at an affordable price point, making them perfect for budget-conscious homeowners who want space-saving solutions without compromising on quality.",
  },
  {
    id: 2,
    question: "Are Essential sliding windows energy efficient?",
    answer:
      "Yes! Essential sliding windows feature thermal break technology that ensures good energy efficiency. The double glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation, helping to reduce your energy bills.",
  },
  {
    id: 3,
    question: "How smooth is the sliding operation?",
    answer:
      "Essential sliding windows feature quality sliding hardware with precision-engineered tracks and rollers that ensure smooth, effortless operation. The hardware is designed for durability and minimal maintenance, providing years of reliable performance with easy opening and closing.",
  },
  {
    id: 4,
    question: "Can Essential sliding windows be customized?",
    answer:
      "Absolutely! Essential sliding windows can be customized in various sizes, configurations, and finishes. You can choose from single sliding, double sliding, or multi-panel systems. Different glazing options, colors, and hardware finishes are available to match your aesthetic preferences.",
  },
  {
    id: 5,
    question: "What maintenance do Essential sliding windows require?",
    answer:
      "Essential sliding windows require minimal maintenance. Regular cleaning of the tracks and frames, occasional lubrication of the sliding mechanism, and cleaning of the glass surfaces are typically sufficient. The aluminium frames are resistant to corrosion and don't require painting or special treatments. Our team can provide maintenance guidelines for optimal performance.",
  },
];

const EssentialSliderFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {essentialSliderFAQs.map((item) => {
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

export default EssentialSliderFAQ;


