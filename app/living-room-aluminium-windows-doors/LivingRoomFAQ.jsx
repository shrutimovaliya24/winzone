"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const livingRoomFAQs = [
  {
    id: 1,
    question: "What are the best aluminium windows for living rooms?",
    answer:
      "The best aluminium windows for living rooms are those with large glass areas, excellent thermal efficiency, and versatile opening options. Our living room windows feature double or triple glazing, thermal break technology, and various styles including sliding, casement, and bi-fold doors. These features ensure a bright, comfortable, and energy-efficient living space.",
  },
  {
    id: 2,
    question: "How do living room windows maximize natural light?",
    answer:
      "Our living room aluminium windows are designed with large glass areas and slim frames to maximize natural light. The use of high-quality glass with low-E coatings allows maximum light transmission while reducing heat gain. Sliding and bi-fold door options create seamless indoor-outdoor connections, bringing more light into your living space.",
  },
  {
    id: 3,
    question: "What window styles work best for living room ventilation?",
    answer:
      "For living room ventilation, we recommend sliding windows, bi-fold doors, or casement windows. Sliding windows provide easy operation and excellent airflow. Bi-fold doors can fully open to create wide openings for maximum ventilation. Casement windows offer full opening capability with excellent weather protection when closed.",
  },
  {
    id: 4,
    question: "Are living room windows energy efficient?",
    answer:
      "Yes! Our aluminium living room windows feature thermal break technology that prevents heat transfer, keeping your living room cool in summer and warm in winter. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays, ensuring year-round comfort and lower energy bills.",
  },
  {
    id: 5,
    question: "Can I customize living room windows for large openings?",
    answer:
      "Absolutely! Our living room windows can be customized for large openings with structural glazing options, bi-fold doors, or sliding systems. We can create wide openings that seamlessly connect your living room to outdoor spaces. Our team can help you design the perfect solution for your living room needs.",
  },
];

const LivingRoomFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {livingRoomFAQs.map((item) => {
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

export default LivingRoomFAQ;

