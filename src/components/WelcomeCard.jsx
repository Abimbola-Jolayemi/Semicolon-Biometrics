import React from "react";

const WelcomeCard = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-4/5 p-10 font-ibm bg-white h-full mb-10">
      <div className="w-full max-w-4xl mx-auto">
        {/* Date */}
        <div className="flex justify-end mb-4">
          <p className="text-sm text-gray-500">{today}</p>
        </div>

        {/* Welcome Header */}
        <h1 className="text-4xl font-bold text-deepGray mb-2 leading-tight">
          Welcome back, <span className="italic font-normal">Timothy</span> 👋
        </h1>

        {/* Sub-header */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Here’s what you can do today:
        </h2>

        {/* Tasks Section */}
        <div className="bg-paleOffWhite rounded-lg p-6 shadow text-base text-gray-800 leading-relaxed mb-10">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Add new cohorts</strong> to the system.
            </li>
            <li>
              <strong>Add new Natives</strong> and assign them to their respective cohorts.
            </li>
            <li>
              <strong>Monitor cohort attendance</strong> in real-time.
            </li>
            <li>
              <strong>Track attendance history</strong> for punctuality and absences.
            </li>
            <li>
              <strong>Ensure data security</strong> through fingerprint-based authentication.
            </li>
          </ul>
        </div>

        {/* Quick Stats */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Stats:</h2>
          <div className="space-y-4 text-base">
            <div className="bg-paleOffWhite rounded-md p-4 shadow-sm text-gray-800">
              <span className="font-medium">Total natives registered:</span> 250
            </div>
            <div className="bg-paleOffWhite rounded-md p-4 shadow-sm text-gray-800">
              <span className="font-medium">Total cohorts registered:</span> 25
            </div>
            <div className="bg-paleOffWhite rounded-md p-4 shadow-sm text-gray-800">
              <span className="font-medium">Checked-In today:</span> 150
            </div>
          </div>
        </div>

        {/* Footer Spacer */}
        <div className="h-20"></div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 w-full h-8 flex items-center justify-center text-xs text-gray-400 bg-white">
          © 2025. Made with love in Lagos. <span className="text-red-500 ml-1">❤️</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
