import React, { useState } from "react";
import Button from "../reuseables/Button";
import CustomInput from "../reuseables/CustomInput";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Signup = () => {
  const navigate = useNavigate();

  // States for form values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // States for handling success and error messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !userName || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    const signUpData = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
    };

    try {
      const response = await fetch(
        "https://biometric-attendance-system-7.onrender.com/api/v1/admin/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpData),
        }
      );

      const data = await response.json();
      console.log("Server response:", data);

      if (password.length < 8 || password.length > 50) {
        setError("Password must be between 8 and 50 characters.");
        return;
      }

      if (!userName.trim()) {
        setError("Username cannot be empty.");
        return;
      }

      setMessage(`${userName} has successfully been registered!`);
      navigate("/signin");
    } catch (error) {
      console.log(error);
      console.error("Registration error:", error.message);
      setError(error.message);
    }
  };

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
            <CustomInput
              placeholder="First Name *"
              className="w-full sm:w-[48%]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <CustomInput
              placeholder="Last Name *"
              className="w-full sm:w-[48%]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email and Username */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8">
            <CustomInput
              placeholder="Username *"
              className="w-full sm:w-[48%]"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <CustomInput
              type="password"
              placeholder="Password *"
              className="w-full sm:w-[48%]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Success/Error Message */}
          {/* Success/Error Message */}
          {message && (
            <div className="text-green-600 text-center mt-4">
              <p>{message}</p>
            </div>
          )}
          {error && (
            <div className="text-red-600 text-center mt-4">
              <p>{error}</p>
            </div>
          )}

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
              textContent="Sign Up"
              onClick={handleSubmit}
              className="bg-semicolonRed text-white w-full h-12 rounded-md shadow-md hover:bg-red-700 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
