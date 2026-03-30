"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const vadodaraFAQs = [
  {
    id: 1,
    question: "Do you provide windows and doors in Vadodara?",
    answer:
      "Yes! WinZone provides premium aluminium windows and doors in Vadodara. We have a strong local presence and serve homes, offices, showrooms, and commercial spaces across Vadodara and nearby areas in Gujarat. Our team ensures timely delivery, professional installation, and ongoing support for all your window and door needs.",
  },
  {
    id: 2,
    question: "What types of windows and doors do you offer in Vadodara?",
    answer:
      "We offer a wide range of aluminium windows and doors in Vadodara including casement windows, sliding windows, tilt and turn windows, lift and slide doors, slide and fold doors, and more. Our range includes Duraslim, Duraslim Edge, and Essential Series to suit different needs and budgets.",
  },
  {
    id: 3,
    question: "Do you provide installation services in Vadodara?",
    answer:
      "Yes! We provide complete installation services in Vadodara. Our experienced team handles everything from consultation and design to manufacturing and professional installation. We ensure proper installation to maximize performance and longevity of your windows and doors.",
  },
  {
    id: 4,
    question: "Are your windows suitable for Vadodara's climate?",
    answer:
      "Absolutely! Our windows and doors are designed to perform well in Vadodara's hot summers and heavy monsoons. They feature thermal break technology for energy efficiency, weather-resistant seals for protection from rain and heat, and durable construction to withstand local weather conditions.",
  },
  {
    id: 5,
    question: "How long does it take to get windows and doors in Vadodara?",
    answer:
      "The timeline depends on your project requirements, customization needs, and order size. Our local presence in Vadodara allows for quicker response times and faster delivery compared to distant suppliers. We provide accurate timelines during consultation and work to meet your project deadlines. Contact us for specific timelines.",
  },
];

const VadodaraFAQ = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? null : id));
  };

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {vadodaraFAQs.map((item) => {
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

export default VadodaraFAQ;
