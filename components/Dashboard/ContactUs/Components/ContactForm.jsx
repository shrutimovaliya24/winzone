"use client";
import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowRightIcon, Send } from "lucide-react";
import PhoneInput from "./PhoneInput";

const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    telephone: Yup.string()
      .matches(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
      .required("Phone number is required"),
    message: Yup.string()
      .max(500, "Message must be less than 500 characters")
      .required("Message is required"),
    subscribe: Yup.boolean(),
  });

  const initialValues = {
    name: "",
    email: "",
    telephone: "",
    message: "",
    subscribe: false,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Get the selected country dial code
      const countryList = require("country-telephone-data").allCountries;
      const selectedCountryData = countryList.find(
        (c) => c.iso2.toUpperCase() === selectedCountry
      );
      const dialCode = selectedCountryData
        ? `+${selectedCountryData.dialCode}`
        : "+1";

      // Combine dial code with phone number
      const fullPhoneNumber = `${dialCode} ${values.telephone}`;

      const response = await fetch("https://formspree.io/f/xovkelgz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          telephone: fullPhoneNumber,
        }),
      });

      if (response.ok) {
        toast.success(
          "Message sent successfully! We will get back to you soon.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        resetForm();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="xl:p-10 lg:p-8 md:p-6 sm:p-4 p-2.5 border border-solid border-theme-color/20 rounded-xl bg-white w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, handleSubmit: formikSubmit }) => (
          <form
            onSubmit={formikSubmit}
            className="grid xl:gap-12 lg:gap-10 md:gap-8 sm:gap-6 gap-4"
          >
            <div className="grid xl:gap-4 lg:gap-4 md:gap-4 sm:gap-3 gap-2.5 font-titillium">
              <div className="grid xl:gap-10 lg:gap-8 md:gap-6 sm:gap-5 gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-4 lg:gap-4 md:gap-4 sm:gap-3 gap-2.5">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-2 mb-1.5 xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Type Your Name"
                      className={`w-full xl:px-4 lg:px-4 md:px-3 sm:px-3 px-2.5 xl:py-3 lg:py-3 md:py-2.5 sm:py-2.5 py-2 rounded-xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-xs focus:ring-2 focus:ring-slate-500 transition-colors lg:max-w-[278px] max-w-full ${
                        touched.name && errors.name
                          ? "border-red-500 bg-red-50"
                          : "bg-[#F7F7F7]"
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-gray-700 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-2 mb-1.5"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Type Your Email"
                      className={`w-full xl:px-4 lg:px-4 md:px-3 sm:px-3 px-2.5 xl:py-3 lg:py-3 md:py-2.5 sm:py-2.5 py-2 rounded-xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-xs focus:ring-2 focus:ring-slate-500 transition-colors lg:max-w-[278px] max-w-full ${
                        touched.email && errors.email
                          ? "border-red-500 bg-red-50"
                          : "bg-[#F7F7F7]"
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <PhoneInput
                  name="telephone"
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  touched={touched}
                  errors={errors}
                />

                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-gray-700 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-2 mb-1.5"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Describe Your Requirements....."
                    className={`w-full xl:px-4 lg:px-4 md:px-3 sm:px-3 px-2.5 xl:py-3 lg:py-3 md:py-2.5 sm:py-2.5 py-2 rounded-xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-xs focus:ring-2 placeholder-[#777777] focus:ring-slate-500 transition-colors resize-none max-w-full ${
                      touched.message && errors.message
                        ? "border-red-500 bg-red-50"
                        : "bg-[#F7F7F7]"
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div className="flex items-start xl:space-x-3 lg:space-x-3 md:space-x-2.5 sm:space-x-2 space-x-2">
                <Field
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  className="xl:mt-1 lg:mt-1 md:mt-0.5 sm:mt-0.5 mt-0.5 xl:h-4 xl:w-4 lg:h-4 lg:w-4 md:h-3.5 md:w-3.5 sm:h-3.5 sm:w-3.5 h-3.5 w-3.5 text-slate-600 focus:ring-slate-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="subscribe"
                  className="xl:text-base lg:text-base md:text-sm sm:text-xs text-xs text-gray-600 leading-relaxed"
                >
                  Please Tick Here If You Would Like To Be Kept Up To Date With
                  News And Updates.
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto inline-flex items-center justify-center xl:px-8 xl:py-3 lg:px-7 lg:py-3 md:px-6 md:py-2.5 sm:px-5 sm:py-2.5 px-4 py-2 bg-theme-color text-white font-medium rounded-lg hover:bg-slate-800 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-archivo xl:text-base lg:text-base md:text-sm sm:text-xs text-xs"
            >
              <span className="mr-2">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <div
                className={`${
                  isSubmitting ? "animate-pulse" : ""
                } p-1 bg-white rounded-full`}
              >
                <ArrowRightIcon color="#29485F" size="18" />
              </div>
            </button>
          </form>
        )}
      </Formik>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactForm;
