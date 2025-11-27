"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const byRoomFAQs = [
  {
    id: 1,
    question: "Why do I need different windows for different rooms?",
    answer:
      "Different rooms have different requirements. Bedrooms need sound insulation and privacy, living rooms need maximum natural light and seamless connections, kitchens need ventilation and easy maintenance, and balconies need weather resistance and security. Room-specific solutions ensure optimal performance and comfort for each space in your home.",
  },
  {
    id: 2,
    question: "What makes bedroom windows different?",
    answer:
      "Bedroom windows are designed with excellent sound insulation properties to ensure a quiet sleeping environment. They also offer privacy options like frosted or tinted glass, and feature secure locking mechanisms. The focus is on creating a peaceful, comfortable, and secure bedroom environment.",
  },
  {
    id: 3,
    question: "What makes living room windows different?",
    answer:
      "Living room windows are designed to maximize natural light and create seamless indoor-outdoor connections. They often feature large glass areas, sliding or bi-fold doors, and slim frames. The focus is on creating bright, welcoming spaces with excellent ventilation and visual connections to outdoor areas.",
  },
  {
    id: 4,
    question: "Can I use the same windows throughout my home?",
    answer:
      "While you can use the same windows throughout, room-specific solutions provide better performance and comfort. For example, bedroom windows with better sound insulation will provide a quieter environment, while kitchen windows with better ventilation will improve air quality. Our team can help you decide the best approach for your project.",
  },
  {
    id: 5,
    question: "Do room-specific windows cost more?",
    answer:
      "Room-specific windows are priced based on their features and specifications. While some room-specific features may add to the cost, they provide better performance and value for each space. Our team can help you find the right balance between features and budget for each room in your home.",
  },
];

const ByRoomFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {byRoomFAQs.map((item) => {
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

export default ByRoomFAQ;


