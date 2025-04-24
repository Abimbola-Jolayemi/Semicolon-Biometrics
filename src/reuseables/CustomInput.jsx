import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const CustomInput = ({
  type = "text",
  placeholder = "",
  className = "",
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const labelClassName = `
    absolute left-3 transition-all duration-300 font-ibm text-base font-normal pointer-events-none 
    ${isFocused || value ? "-top-2 scale-75 text-red-500 bg-white px-1" : "top-1/2 -translate-y-1/2 text-placeholderGray"}
  `;

  return (
    <div className={`relative h-onboardInputHeight border border-inputBorderRed rounded-md bg-white shadow-sm flex items-center ${className}`}>
      <input
        type={type === "password" && !showPassword ? "password" : "text"} // Toggle between password and text type
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value}
        className={`w-full h-full px-3 pt-4 outline-none font-ibm text-base placeholder:text-placeholderGray placeholder:font-light bg-transparent`}
      />
      <label className={labelClassName}>{placeholder}</label>

      {type === "password" && (
        <div
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)} // Toggle the visibility of the password
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
