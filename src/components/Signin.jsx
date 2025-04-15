import React from "react";
import images from "../assets/images"; // Ensure your icon is in here
import Button from "../reuseables/Button"; // Your reusable button component

const AdminSignIn2 = () => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Sidebar */}
      <div className="w-sideBarWidth1 h-screen bg-customYellow flex items-center justify-center">
        <img
          src={images.rectangleListRegular}
          alt="list-icon"
          className="w-listIconWidth h-listIconHeight"
        />
      </div>

      {/* Right Panel */}
      <div className="flex flex-col justify-center items-center w-[684px] h-screen bg-white">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg"
            alt="semicolon-logo"
          />
        </div>

        {/* Form */}
        <div className="flex flex-col w-[55%] space-y-5">
          {/* Username */}
          <input
            type="text"
            placeholder="Username *"
            className="w-full h-12 border border-inputBorderRed rounded-md px-3 outline-none font-ibm placeholder:text-placeholderGray placeholder:font-light"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password *"
            className="w-full h-12 border border-inputBorderRed rounded-md px-3 outline-none font-ibm placeholder:text-placeholderGray placeholder:font-light"
          />

          {/* Sign Up Prompt */}
          <p className="text-base font-ibm italic text-[#AFA9A9] text-center">
            Don’t have an account?{" "}
            <span className="text-blue-600 font-ibm font-normal cursor-pointer">
              Sign Up
            </span>
          </p>

          {/* Sign In Button */}
          <Button
            textContent="Sign In"
            className="bg-red-600 text-white w-full h-12 rounded-md shadow-md hover:bg-red-700 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn2;
