
import React from 'react';
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  UserPlusIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  EyeIcon,
} from '@heroicons/react/24/solid';

const AnalyticsView = () => {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="w-4/5 p-10 bg-white h-full">
      <div className="flex justify-end mb-6 text-gray-500">
        <p className="text-gray-500 text-sm flex items-center gap-1">
          <CalendarDaysIcon className="w-4 h-4 text-deepGray" />
          {today}
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-deepGray mb-4 flex items-center gap-2">
        <ChartBarIcon className="w-6 h-6 text-deepGray" />
        Analytics Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Attendance Overview */}
        <div className="bg-white shadow rounded-md p-4">
          <h3 className="text-lg font-semibold text-deepGray mb-2 flex items-center gap-2">
            <UserGroupIcon className="w-5 h-5 text-deepGray" />
            Attendance Overview
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-deepGray">85%</span>
              <p className="text-sm text-gray-600">Overall Attendance Rate</p>
            </div>
            <div className="w-16 h-10 bg-gray-200 rounded-md"></div>
          </div>
        </div>

        <div className="bg-white shadow rounded-md p-4">
          <h3 className="text-lg font-semibold text-deepGray mb-2 flex items-center gap-2">
            <ChartBarIcon className="w-5 h-5 text-deepGray" />
            Cohort Performance
          </h3>
          <div className="w-full h-32 bg-gray-200 rounded-md"></div>
          <p className="text-sm text-gray-600 mt-2">Attendance by Cohort</p>
        </div>

        {/* Punctuality Analysis */}
        <div className="bg-white shadow rounded-md p-4">
          <h3 className="text-lg font-semibold text-deepGray mb-2 flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-deepGray" />
            Punctuality Analysis
          </h3>
          <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full"></div>
          <div className="mt-2 text-center">
            <p className="text-sm text-gray-600">
              On Time: <span className="font-semibold text-deepGray">70%</span>
            </p>
            <p className="text-sm text-gray-600">
              Late: <span className="font-semibold text-deepGray">20%</span>
            </p>
            <p className="text-sm text-gray-600">
              Absent: <span className="font-semibold text-deepGray">10%</span>
            </p>
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="bg-white shadow rounded-md p-4 col-span-full md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-semibold text-deepGray mb-2 flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5 text-deepGray" />
            Recent Activity
          </h3>
          <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
            <li>New Native "John Doe" added at 10:00 AM</li>
            <li>Attendance marked for Cohort 21</li>
            <li>Report generated for April 7th</li>
          </ul>
        </div>

        {/* Key Metrics */}
        <div className="bg-white shadow rounded-md p-4 md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-semibold text-deepGray mb-2 flex items-center gap-2">
            <EyeIcon className="w-5 h-5 text-deepGray" />
            Key Metrics
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Total Natives:</span> 150
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Active Cohorts:</span> 5
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">New Natives This Week:</span> 12
            </p>
          </div>
        </div>

        {/* User Engagement */}
        <div className="bg-white shadow rounded-md p-4 md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-semibold text-deepGray mb-2 flex items-center gap-2">
            <UserPlusIcon className="w-5 h-5 text-deepGray" />
            User Engagement
          </h3>
          <div className="w-full h-20 bg-gray-200 rounded-md"></div>
          <p className="text-sm text-gray-600 mt-2">Engagement over time</p>
        </div>
      </div>

      <div className="h-10"></div>
      <div className="fixed bottom-0 left-0 w-full h-8 flex items-center justify-center text-xs text-gray-400 bg-white">
        © 2025. Made with love in Lagos. <span className="text-red-500 ml-1">❤️</span>
      </div>
    </div>
  );
};

export default AnalyticsView;
