"use client";
import SvgIcon from "@/components/Common/SvgIcon";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QuestionAnswerInfo = [
  {
    id: 1,
    question: "How does web hosting work?",
    answer:
      "When you develop a website, unless you publish it on the internet nobody can access your website.",
  },
  {
    id: 2,
    question: "Can I buy web hosting for free?",
    answer:
      "When you develop a website, unless you publish it on the internet nobody can access your website.",
  },
  {
    id: 3,
    question: "Is it important to buy web hosting?",
    answer:
      "When you develop a website, unless you publish it on the internet nobody can access your website.",
  },
  {
    id: 4,
    question: "Can I purchase web hosting on a monthly basis?",
    answer:
      "When you develop a website, unless you publish it on the internet nobody can access your website.",
  },
  {
    id: 5,
    question: "What payment methods can I use?",
    answer:
      "When you develop a website, unless you publish it on the internet nobody can access your website.",
  },
  {
    id: 6,
    question: "Who will set up my server after I buy hosting?",
    answer:
      "When you develop a website, unless you publish it on the internet nobody can access your website.",
  },
];

const QuestionAnswer = () => {
  const [show, setShow] = useState(1);

  const toggleAnswer = (id) => {
    setShow((prevIndex) => (prevIndex === id ? prevIndex : id));
  };

  return (
    <div className="grid gap-4 w-full">
      {QuestionAnswerInfo.map((item, index) => {
        const isOpen = show === item.id;
        return (
          <div
            key={item.id}
            className="sm:p-6 p-4 bg-white rounded-xl w-full"
            onClick={() => toggleAnswer(item.id)}
          >
            <div className="flex justify-between gap-4">
              <h3 className="font-titillium lg:text-xl text-lg text-theme-color font-semibold">
                {item.question}
              </h3>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="h-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d={`${isOpen ? "M5 12H19" : "M12 5V19M5 12H19"}`}
                    stroke="#29485F"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
            {isOpen && (
              <p className="text-[#777777] lg:text-lg text-base font-archivo sm:p-4 p-2 sm:mt-4 mt-2 bg-[#F7F7F7] rounded-xl overflow-hidden">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionAnswer;
