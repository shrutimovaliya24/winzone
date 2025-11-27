"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const balconyFAQs = [
  {
    id: 1,
    question: "What are the best aluminium windows for balconies?",
    answer:
      "The best aluminium windows for balconies are those with excellent weather resistance, security features, and seamless indoor-outdoor connections. Our balcony windows feature double or triple glazing, thermal break technology, and various opening styles including sliding doors, bi-fold doors, and casement windows. These features ensure protection, security, and beautiful aesthetics for your balcony space.",
  },
  {
    id: 2,
    question: "How do balcony windows resist weather conditions?",
    answer:
      "Our balcony aluminium windows are specifically designed with excellent weather resistance. They feature durable aluminium frames, weatherproof seals, and high-quality glazing that withstand harsh weather conditions including rain, wind, and extreme temperatures. The thermal break technology ensures energy efficiency while maintaining protection from weather elements.",
  },
  {
    id: 3,
    question: "What door styles are best for balcony access?",
    answer:
      "For balcony access, we recommend sliding doors, bi-fold doors, or casement doors. Sliding doors provide space-saving solutions with smooth operation. Bi-fold doors create wide openings for seamless indoor-outdoor connections. Casement doors offer traditional elegance with excellent ventilation. All options provide secure access and beautiful aesthetics.",
  },
  {
    id: 4,
    question: "Are balcony windows energy efficient?",
    answer:
      "Yes! Our aluminium balcony windows feature thermal break technology that prevents heat transfer, keeping your indoor space cool in summer and warm in winter. This reduces your energy bills significantly. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays, ensuring year-round comfort.",
  },
  {
    id: 5,
    question: "Can I customize balcony windows for security?",
    answer:
      "Absolutely! Our balcony windows can be customized with various security options including multi-point locking systems, reinforced frames, and security glazing. You can also choose from different locking mechanisms that provide enhanced security while maintaining easy operation. Our team can help you select the perfect security solution for your balcony needs.",
  },
];

const BalconyFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {balconyFAQs.map((item) => {
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

export default BalconyFAQ;

