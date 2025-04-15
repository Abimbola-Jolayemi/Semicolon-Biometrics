// src/pages/AdminSignup.jsx
import React from "react";
import Button from "../reuseables/Button";
import CustomInput from "../reuseables/CustomInput";
import images from "../assets/images";

const Signup = () => {
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

      {/* Right Content */}
      <div className="w-[684px] h-screen bg-white flex-col justify-center">
        {/* Logo */}
        <div className="h-1/3 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg"
            alt="semicolon-logo"
          />
        </div>

        {/* Form */}
        <div className="w-[600px] m-auto h-3/5 items-center flex flex-col justify-evenly">
          {/* First and Last Name */}
          <div className="flex h-20 items-center w-11/12 justify-around">
          <CustomInput placeholder="First Name *" />
            <CustomInput placeholder="Last Name *"/>
          </div>

          {/* Email and Username */}
          <div className="flex h-20 items-center w-11/12 justify-around">
            <CustomInput placeholder="Email Address *"/>
            <CustomInput placeholder="Username *"/>
          </div>

          {/* Password and Confirm Password */}
          <div className="flex h-20 items-center w-11/12 justify-around">
          <CustomInput type="password" placeholder="Password *" />
            <CustomInput type="password" placeholder="Confirm Password *"/>
          </div>

          {/* Already have account */}
          <div className="h-20 flex m-auto justify-center w-64 items-start">
            <p className="text-base text-[#AFA9A9] italic font-ibm text-center">
              Already have an account?{" "}
              <span className="text-blue-600 normal cursor-pointer">Sign In</span>
            </p>
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center w-2/4 h-20 items-start m-auto">
            <Button
              textContent="Sign In"
              className="bg-red-600 text-white w-full h-12 rounded-md shadow-md hover:bg-red-700 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;