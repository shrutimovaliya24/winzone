"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const duraslimEdgeLiftSlideFAQs = [
  {
    id: 1,
    question: "What are lift and slide doors?",
    answer:
      "Lift and slide doors are a type of sliding door system where the door panel lifts slightly before sliding. This lift mechanism reduces friction and makes it easier to operate even large, heavy door panels. The system provides smooth operation and is perfect for large openings where seamless indoor-outdoor connections are desired.",
  },
  {
    id: 2,
    question: "What are the advantages of lift and slide doors?",
    answer:
      "Lift and slide doors offer several advantages including smooth operation with minimal effort, perfect for large openings and heavy panels, excellent thermal performance, seamless indoor-outdoor connections, enhanced security, and modern aesthetics. They are ideal for patios, terraces, and large openings.",
  },
  {
    id: 3,
    question: "Are lift and slide doors energy efficient?",
    answer:
      "Yes! Duraslim Edge lift and slide doors feature advanced thermal break technology that ensures optimal energy efficiency. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation, significantly reducing your energy bills.",
  },
  {
    id: 4,
    question: "Can lift and slide doors be customized?",
    answer:
      "Absolutely! Duraslim Edge lift and slide doors can be customized in various sizes, configurations, and finishes. You can choose from different glazing options, colors, and hardware finishes to match your aesthetic preferences. Various panel configurations are available to fit your space perfectly, including single-panel and multi-panel systems.",
  },
  {
    id: 5,
    question: "What maintenance do lift and slide doors require?",
    answer:
      "Lift and slide doors require minimal maintenance. Regular cleaning of the tracks and frames, occasional lubrication of the lift and slide mechanism, and cleaning of the glass surfaces are typically sufficient. The aluminium frames are resistant to corrosion and don't require painting or special treatments. Our team can provide maintenance guidelines for optimal performance.",
  },
];

const DuraslimEdgeLiftSlideFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {duraslimEdgeLiftSlideFAQs.map((item) => {
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

export default DuraslimEdgeLiftSlideFAQ;


