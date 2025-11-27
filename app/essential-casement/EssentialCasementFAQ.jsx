"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const essentialCasementFAQs = [
  {
    id: 1,
    question: "What makes Essential Series windows different?",
    answer:
      "Essential Series windows are designed to offer excellent value with reliable performance and quality. They provide good thermal performance, security, and durability at an affordable price point, making them perfect for budget-conscious homeowners who don't want to compromise on quality. While they may not have all the premium features of higher-end series, they deliver solid performance and value.",
  },
  {
    id: 2,
    question: "Are Essential casement windows energy efficient?",
    answer:
      "Yes! Essential casement windows feature thermal break technology that ensures good energy efficiency. The double glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation, helping to reduce your energy bills.",
  },
  {
    id: 3,
    question: "Are Essential windows secure?",
    answer:
      "Yes! Essential casement windows feature multi-point locking systems that provide enhanced security. The locking mechanisms secure the window at multiple points along the frame, making them difficult to force open. Combined with reinforced frames, they provide good protection for your home.",
  },
  {
    id: 4,
    question: "Can Essential windows be customized?",
    answer:
      "Absolutely! Essential casement windows can be customized in various sizes, configurations, and finishes. You can choose from different glazing options, colors, and hardware finishes to match your aesthetic preferences. Various opening configurations are available to fit your space perfectly.",
  },
  {
    id: 5,
    question: "What maintenance do Essential windows require?",
    answer:
      "Essential windows require minimal maintenance. Regular cleaning of the frames and glass, occasional lubrication of the hardware, and checking of weather seals are typically sufficient. The aluminium frames are resistant to corrosion and don't require painting or special treatments. Our team can provide maintenance guidelines for optimal performance.",
  },
];

const EssentialCasementFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {essentialCasementFAQs.map((item) => {
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

export default EssentialCasementFAQ;


