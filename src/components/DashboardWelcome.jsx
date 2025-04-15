// src/pages/DashboardWelcome.jsx
import React from 'react';
import Sidebar from './Sidebar';

const DashboardWelcome = () => {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome back, Timothy 👋
          </h2>
          <p className="text-gray-500">{today}</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-6 max-w-xl">
          <h3 className="font-medium mb-4 text-gray-800">What you can do today:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Add new cohorts to the system.</li>
            <li>Add new Natives to the system and assign them to their respective cohorts.</li>
            <li>Monitor Cohort attendance in real-time.</li>
            <li>Track attendance history for punctuality and absences.</li>
            <li>Ensure extra security through our biometric-based authentication.</li>
          </ul>
        </div>

    
      </main>
    </div>
  );
};

export default DashboardWelcome;