"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductFAQ = ({ faqs = [] }) => {
  const [show, setShow] = useState(0);
  const toggle = (id) => setShow((prev) => (prev === id ? null : id));

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="grid gap-4 w-full lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      {faqs.map((item, index) => {
        const isOpen = show === index;
        return (
          <div
            key={index}
            className="border border-solid border-[#EBEBEB] rounded-xl bg-white"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`product-faq-panel-${index}`}
              className="w-full flex justify-between items-center text-left px-5 py-4 sm:px-6 sm:py-5 font-titillium font-semibold text-base sm:text-lg text-theme-color"
            >
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className={`ml-4 transition-transform duration-200 text-2xl leading-none text-theme-color/60 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`product-faq-panel-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 sm:px-6 sm:pb-6 font-archivo text-[#777777] sm:text-base text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default ProductFAQ;
