import React from "react";
import Button from "../reuseables/Button";
import CustomInput from "../reuseables/CustomInput";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Sidebar (hidden on small screens) */}
      <div className="hidden md:flex w-sideBarWidth1 h-screen bg-customYellow items-center justify-center">
        <img
          src={images.rectangleListRegular}
          alt="list-icon"
          className="w-listIconWidth h-listIconHeight"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center items-center w-full md:w-[684px] h-screen bg-white px-4 py-8">
        {/* Logo */}
        <div className="h-1/4 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg"
            alt="semicolon-logo"
            className="w-40"
          />
        </div>

        {/* Form */}
        <div className="w-full max-w-[600px] mx-auto flex flex-col gap-6">
          {/* First and Last Name */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
            <CustomInput placeholder="First Name *" className="w-full sm:w-[48%]" />
            <CustomInput placeholder="Last Name *" className="w-full sm:w-[48%]" />
          </div>

          {/* Email and Username */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
            <CustomInput placeholder="Email Address *" className="w-full sm:w-[48%]" />
            <CustomInput placeholder="Username *" className="w-full sm:w-[48%]" />
          </div>

          {/* Password and Confirm Password */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
            <CustomInput type="password" placeholder="Password *" className="w-full sm:w-[48%]" />
            <CustomInput type="password" placeholder="Confirm Password *" className="w-full sm:w-[48%]" />
          </div>

          {/* Already have account */}
          <div className="text-center">
            <p className="text-base text-[#AFA9A9] italic font-ibm">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </span>
            </p>
          </div>

          {/* Sign In Button */}
          <div className="w-full sm:w-1/2 mx-auto">
            <Button
              textContent="Sign In"
              onClick={() => navigate("/signin")}
              className="bg-semicolonRed text-white w-full h-12 rounded-md shadow-md hover:bg-red-700 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
