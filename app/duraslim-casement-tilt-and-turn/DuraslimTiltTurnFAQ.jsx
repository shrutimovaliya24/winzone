"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const duraslimTiltTurnFAQs = [
  {
    id: 1,
    question: "What are the advantages of tilt and turn windows?",
    answer:
      "Tilt and turn windows offer several advantages including versatile opening options (tilt for ventilation or full turn for maximum airflow), enhanced security with multi-point locking in both modes, easy cleaning with inward opening, excellent energy efficiency, and modern aesthetics. They are ideal for various applications including bedrooms, living rooms, and high-rise buildings.",
  },
  {
    id: 2,
    question: "How do tilt and turn windows work?",
    answer:
      "Tilt and turn windows operate with a single handle that controls two opening modes. When the handle is turned 90 degrees, the window tilts inward from the top for ventilation while maintaining security. When the handle is turned 180 degrees, the window opens fully inward like a casement window, providing maximum airflow and easy access for cleaning.",
  },
  {
    id: 3,
    question: "Are tilt and turn windows secure?",
    answer:
      "Yes! Tilt and turn windows feature advanced multi-point locking systems that engage in both opening modes. The locking mechanisms secure the window at multiple points along the frame, making them extremely difficult to force open. Combined with reinforced frames and optional security glazing, they provide excellent protection for your home.",
  },
  {
    id: 4,
    question: "Are tilt and turn windows energy efficient?",
    answer:
      "Yes! Duraslim tilt and turn windows feature advanced thermal break technology that prevents heat transfer, keeping your space cool in summer and warm in winter. The double or triple glazing with low-E coatings further enhances energy efficiency by minimizing heat loss and blocking harmful UV rays. Weather-resistant seals ensure optimal insulation in both opening modes.",
  },
  {
    id: 5,
    question: "Can tilt and turn windows be customized?",
    answer:
      "Absolutely! Duraslim tilt and turn windows can be customized in various sizes, configurations, and finishes. You can choose from different glazing options, colors, and hardware finishes to match your aesthetic preferences. Various opening configurations are available to fit your space perfectly, and they can be combined with fixed panels for larger openings.",
  },
];

const DuraslimTiltTurnFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {duraslimTiltTurnFAQs.map((item) => {
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

export default DuraslimTiltTurnFAQ;


