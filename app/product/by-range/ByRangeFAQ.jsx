"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const byRangeFAQs = [
  {
    id: 1,
    question: "What are the different window and door ranges available?",
    answer:
      "WinZone offers three main ranges: Duraslim Series (premium with ultra-slim profiles), Duraslim Edge Series (advanced with minimal frames), and Essential Series (value-packed with reliable performance). Each range is designed for different needs, preferences, and budgets, ensuring you find the perfect solution for your project.",
  },
  {
    id: 2,
    question: "What's the difference between Duraslim and Duraslim Edge?",
    answer:
      "Duraslim Series features ultra-slim profiles that maximize glass area while maintaining excellent thermal performance. Duraslim Edge Series takes this further with minimal frames - the thinnest possible profiles for maximum glass area and unobstructed views. Both offer premium features, with Edge being the most advanced option for modern architecture.",
  },
  {
    id: 3,
    question: "Which range is best for my budget?",
    answer:
      "Essential Series offers the best value for budget-conscious projects while maintaining quality and performance. Duraslim Series provides premium features at a mid-range price point. Duraslim Edge Series is the premium option with the most advanced features. Our team can help you choose the right range based on your budget and requirements.",
  },
  {
    id: 4,
    question: "Do all ranges have the same energy efficiency?",
    answer:
      "All ranges feature thermal break technology and energy-efficient design. However, Duraslim and Duraslim Edge series may offer slightly better thermal performance due to their advanced construction. All ranges meet high energy efficiency standards, helping reduce your energy bills regardless of which range you choose.",
  },
  {
    id: 5,
    question: "Can I mix different ranges in my project?",
    answer:
      "Yes, you can mix different ranges in your project based on your needs and budget. For example, you might choose Duraslim Edge for main living areas and Essential Series for other areas. Our team can help you create a cohesive design while optimizing your budget across different ranges.",
  },
];

const ByRangeFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {byRangeFAQs.map((item) => {
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

export default ByRangeFAQ;


