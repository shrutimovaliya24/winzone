"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const openableFAQs = [
  {
    id: 1,
    question: "What are the different types of openable windows?",
    answer:
      "Openable windows come in various types including casement windows (side-hinged), tilt-and-turn windows (versatile opening options), awning windows (top-hinged), and hopper windows (bottom-hinged). Each type offers different ventilation and operation benefits. Our team can help you choose the best option for your needs.",
  },
  {
    id: 2,
    question: "How do tilt-and-turn windows work?",
    answer:
      "Tilt-and-turn windows offer two opening modes: tilt mode for ventilation while maintaining security (window tilts inward from the top), and turn mode for full opening (window opens inward like a casement). This versatile design provides excellent ventilation control and security, making them ideal for various applications.",
  },
  {
    id: 3,
    question: "Are openable windows secure?",
    answer:
      "Yes! Our openable windows feature advanced multi-point locking systems that provide enhanced security. The locking mechanisms engage at multiple points along the frame, making them extremely difficult to force open. Combined with reinforced frames and security glazing options, they provide excellent protection for your home.",
  },
  {
    id: 4,
    question: "Are openable windows energy efficient?",
    answer:
      "Yes! Our aluminium openable windows feature thermal break technology that prevents heat transfer, keeping your space cool in summer and warm in winter. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation.",
  },
  {
    id: 5,
    question: "Can openable windows be customized?",
    answer:
      "Absolutely! Our openable windows can be customized in various sizes, opening styles, and finishes. You can choose from different glazing options, colors, and hardware finishes to match your aesthetic preferences. Various configurations including single-hung, double-hung, and multi-panel systems are available to fit your space perfectly.",
  },
];

const OpenableFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {openableFAQs.map((item) => {
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

export default OpenableFAQ;

