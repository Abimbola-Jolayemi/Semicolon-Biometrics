import React, { useState } from "react";

const CustomInput = ({ type = "text", placeholder = "", className = "" }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    setIsFocused(false);
    setHasValue(event.target.value.length > 0);
  };
  const handleChange = (event) => setHasValue(event.target.value.length > 0);

  const labelClassName = `
    absolute left-3 transition-all duration-300 font-ibm text-base font-normal pointer-events-none 
    ${isFocused || hasValue ? "-top-2 scale-75 text-red-500 bg-white px-1" : "top-1/2 -translate-y-1/2 text-placeholderGray"}
  `;

  return (
    <div className="relative w-onboardInputWidth h-onboardInputHeight border border-inputBorderRed rounded-lg bg-white shadow-sm flex items-center">
      <input
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`w-full h-full px-3 pt-4 outline-none font-ibm text-base placeholder:text-placeholderGray placeholder:font-light bg-transparent ${className}`}
      />
      <label className={labelClassName}>{placeholder}</label>
    </div>
  );
};

export default CustomInput;