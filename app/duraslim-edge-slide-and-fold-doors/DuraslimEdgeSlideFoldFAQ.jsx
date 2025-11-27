"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const duraslimEdgeSlideFoldFAQs = [
  {
    id: 1,
    question: "What are slide and fold doors?",
    answer:
      "Slide and fold doors (also known as bi-fold doors) are a type of door system where multiple panels fold and slide to create wide openings. The panels are connected with hinges and slide along a track, allowing them to stack neatly when open. This provides flexible opening options and is perfect for creating seamless indoor-outdoor connections.",
  },
  {
    id: 2,
    question: "What are the advantages of slide and fold doors?",
    answer:
      "Slide and fold doors offer several advantages including flexible opening with wide access, space-efficient design with panels that stack neatly, excellent thermal performance, seamless indoor-outdoor connections, enhanced security, and modern aesthetics. They are ideal for patios, terraces, and large openings where maximum access is desired.",
  },
  {
    id: 3,
    question: "Are slide and fold doors energy efficient?",
    answer:
      "Yes! Duraslim Edge slide and fold doors feature advanced thermal break technology that ensures optimal energy efficiency. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation, significantly reducing your energy bills.",
  },
  {
    id: 4,
    question: "Can slide and fold doors be customized?",
    answer:
      "Absolutely! Duraslim Edge slide and fold doors can be customized in various sizes, panel counts, and finishes. You can choose from different glazing options, colors, and hardware finishes to match your aesthetic preferences. Various panel configurations are available to fit your space perfectly, including 2-panel, 3-panel, 4-panel, and more.",
  },
  {
    id: 5,
    question: "What maintenance do slide and fold doors require?",
    answer:
      "Slide and fold doors require minimal maintenance. Regular cleaning of the tracks and frames, occasional lubrication of the folding and sliding mechanism, and cleaning of the glass surfaces are typically sufficient. The aluminium frames are resistant to corrosion and don't require painting or special treatments. Our team can provide maintenance guidelines for optimal performance.",
  },
];

const DuraslimEdgeSlideFoldFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {duraslimEdgeSlideFoldFAQs.map((item) => {
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

export default DuraslimEdgeSlideFoldFAQ;


