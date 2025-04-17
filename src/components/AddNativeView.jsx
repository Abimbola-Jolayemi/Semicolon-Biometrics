import React from "react";
import Button from "../reuseables/Button";
import CustomInput from "../reuseables/CustomInput";
import { FingerPrintIcon } from "@heroicons/react/24/solid";

const AddNativeView = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-4/5 p-8 font-ibm bg-white min-h-screen relative mx-auto pb-24">
      {/* Date */}
      <div className="flex justify-end mb-4">
        <p className="text-sm text-gray-500">{today}</p>
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold text-deepGray mb-2 leading-snug">
        Welcome back, <span className="italic font-normal">Timothy</span> 👋
      </h1>

      <h2 className="text-xl font-semibold text-gray-700 mb-8">
        Add a new Native below:
      </h2>

      {/* Form */}
      <div className="max-w-3xl mx-auto">
        {/* Name Inputs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <CustomInput placeholder="First Name *" className="w-full" />
          <CustomInput placeholder="Last Name *" className="w-full" />
        </div>

        {/* Email & Cohort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <CustomInput placeholder="Email Address *" className="w-full" />
          <CustomInput placeholder="Cohort *" className="w-full" />
        </div>

        {/* Instructions */}
        <div className="mb-2">
          <h3 className="text-base font-semibold text-deepGray mb-2">
            Biometrics Instruction
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Gently place the native's right thumb on the scanner (or left thumb if unavailable).
            This fingerprint will be used for attendance marking.
          </p>
        </div>

        {/* Submit & Icon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="w-full sm:w-1/3">
            <Button
              textContent="Add Native"
              className="bg-semicolonRed text-white w-full py-2 rounded-md shadow hover:bg-red-700 transition"
            />
          </div>
          <div className="w-24 h-24 text-lightGray">
            <FingerPrintIcon />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-10"></div>
      <div className="fixed bottom-0 left-0 w-full h-8 flex items-center justify-center text-xs text-gray-400 bg-white">
        © 2025. Made with love in Lagos. <span className="text-red-500 ml-1">❤️</span>
      </div>
    </div>
  );
};

export default AddNativeView;
