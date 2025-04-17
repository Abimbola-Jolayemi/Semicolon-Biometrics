import React from "react";
import images from "../assets/images";
import Button from "../reuseables/Button";
import CustomInput from "../reuseables/CustomInput";
import { useNavigate } from "react-router-dom";

const AdminSignIn2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-white flex-col md:flex-row">
      {/* Left Sidebar (hidden on small screens) */}
      <div className="hidden md:flex w-sideBarWidth1 h-screen bg-customYellow items-center justify-center">
        <img
          src={images.rectangleListRegular}
          alt="list-icon"
          className="w-listIconWidth h-listIconHeight"
        />
      </div>

      {/* Right Panel */}
      <div className="flex flex-col justify-center items-center w-full md:w-[684px] h-screen bg-white">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg"
            alt="semicolon-logo"
          />
        </div>

        {/* Form */}
        <div className="flex flex-col items-center w-full space-y-5">
          {/* Username */}
          <CustomInput placeholder="Username *" className="w-[55%]" />

          {/* Password */}
          <CustomInput type="password" placeholder="Password *" className="w-[55%]" />

          {/* Sign Up Prompt */}
          <p className="text-base font-ibm italic text-[#AFA9A9] text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-ibm font-normal cursor-pointer"
            >
              Sign Up
            </span>
          </p>

          {/* Sign In Button */}
          <Button
            textContent="Sign In"
            onClick={() => navigate("/dashboard")}
            className="bg-semicolonRed text-white w-[55%] h-12 rounded-md shadow-md hover:bg-red-700 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn2;
