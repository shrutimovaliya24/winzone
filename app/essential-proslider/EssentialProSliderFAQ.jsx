"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const essentialProSliderFAQs = [
  {
    id: 1,
    question: "What makes Essential Pro Slider different from standard Essential?",
    answer:
      "Essential Pro Slider windows offer enhanced features and improved performance compared to the standard Essential series. They include upgraded sliding hardware for smoother operation, enhanced multi-point locking systems for superior security, improved thermal performance, and better overall build quality. While maintaining excellent value, Pro Slider provides upgraded functionality for homeowners who want more features.",
  },
  {
    id: 2,
    question: "Are Essential Pro Slider windows energy efficient?",
    answer:
      "Yes! Essential Pro Slider windows feature advanced thermal break technology that ensures excellent energy efficiency. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation, significantly reducing your energy bills.",
  },
  {
    id: 3,
    question: "How smooth is the Pro Slider operation?",
    answer:
      "Essential Pro Slider windows feature enhanced sliding hardware with precision-engineered tracks and rollers that ensure very smooth, effortless operation. The upgraded hardware is designed for durability and minimal maintenance, providing years of reliable performance with easy opening and closing even with large panels.",
  },
  {
    id: 4,
    question: "Can Essential Pro Slider windows be customized?",
    answer:
      "Absolutely! Essential Pro Slider windows can be customized in various sizes, configurations, and finishes. You can choose from single sliding, double sliding, or multi-panel systems. Different glazing options, colors, and hardware finishes are available to match your aesthetic preferences. Various configurations are available to fit your space perfectly.",
  },
  {
    id: 5,
    question: "What maintenance do Essential Pro Slider windows require?",
    answer:
      "Essential Pro Slider windows require minimal maintenance. Regular cleaning of the tracks and frames, occasional lubrication of the sliding mechanism, and cleaning of the glass surfaces are typically sufficient. The aluminium frames are resistant to corrosion and don't require painting or special treatments. Our team can provide maintenance guidelines for optimal performance.",
  },
];

const EssentialProSliderFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {essentialProSliderFAQs.map((item) => {
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

export default EssentialProSliderFAQ;


