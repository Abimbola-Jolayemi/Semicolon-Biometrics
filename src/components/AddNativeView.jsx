import React, { useState } from "react";
import Button from "../reuseables/Button";
import CustomInput from "../reuseables/CustomInput";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const AddNativeView = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cohort, setCohort] = useState("");

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!firstName || !lastName || !email || !cohort){
      setError("All fields are required");
      return;
    }

    setError("");

    if(!cohort.startsWith("Cohort")){
      setError("Enter a valid cohort name (e.g Cohort 21)");
      return;
    }

    setError("");

    const generateMockFingerprintId = () => {
      return `FP-${Math.floor(Math.random() * 1000000)}`;
    };

    const addNativeData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      cohort: cohort,
      fingerprintId: generateMockFingerprintId(),
    }

    try {
      const response = await fetch(
        'https://biometric-attendance-system-7.onrender.com/api/v1/admin/native',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(addNativeData)
        }
      );

      const data = await response.json();
      console.log("Server response: ", data);

      setMessage(`${firstName} has successfully been registered!`);
      setIsRegistered(true);
    } catch (error) {
      console.log(error);
      console.error("Register native error: ", error.message);
      setError("Something went wrong. Please try again later.");
      setIsRegistered(false);
    }
  };

  return (
    <div className="w-4/5 p-8 font-ibm bg-white min-h-screen relative mx-auto pb-24">
      <div className="flex justify-end mb-4">
        <p className="text-sm text-gray-500">{today}</p>
      </div>

      <h1 className="text-3xl font-bold text-deepGray mb-2 leading-snug">
        Welcome back, <span className="italic font-normal">Timothy</span> 👋
      </h1>

      <h2 className="text-xl font-semibold text-gray-700 mb-8">
        Add a new Native below:
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <CustomInput
            placeholder="First Name *"
            className="w-full"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <CustomInput
            placeholder="Last Name *"
            className="w-full"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <CustomInput
            placeholder="Email Address *"
            className="w-full"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <CustomInput
            placeholder="Cohort *"
            className="w-full"
            value={cohort}
            onChange={(event) => setCohort(event.target.value)}
          />
        </div>

        {/* Error and success message */}
        {error && <div className="text-red-600">{error}</div>}
        {message && <div className="text-green-600">{message}</div>}

        <div className="mb-2">
          <h3 className="text-base font-semibold text-deepGray mb-2">
            Biometrics Instruction
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Gently place the native's right thumb on the scanner (or left thumb if unavailable).
            This fingerprint will be used for attendance marking.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="w-full sm:w-1/3">
            <Button
              textContent="Add Native"
              className="bg-semicolonRed text-white w-full py-2 rounded-md shadow hover:bg-red-700 transition"
              onClick={handleSubmit}
            />
          </div>
          <div className={`w-24 h-24 text-lightGray ${isRegistered ? 'text-green-500' : ''}`}>  {/* Conditional class */}
            <FingerPrintIcon />
          </div>
        </div>
      </div>

      <div className="h-10"></div>
      <div className="fixed bottom-0 left-0 w-full h-8 flex items-center justify-center text-xs text-gray-400 bg-white">
        © 2025. Made with love in Lagos. <span className="text-red-500 ml-1">❤️</span>
      </div>
    </div>
  );
};

export default AddNativeView;
