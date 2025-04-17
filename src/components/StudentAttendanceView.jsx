import React from 'react';
import Sidebar from './Sidebar';
import {
  UserIcon,
  ArrowLeftIcon,
  ClockIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const StudentAttendanceView = () => {
  const student = {
    name: 'Adaobi Suleiman',
    id: 'SEM2025-001',
    cohort: 'Cohort 21',
    attendance: '92%',
    breakdown: {
      present: 45,
      late: 3,
      absent: 2,
    },
    records: [
      { date: 'April 15, 2025', status: 'Present', timeIn: '8:01 AM'},
      { date: 'April 14, 2025', status: 'Late', timeIn: '8:18 AM'},
      { date: 'April 13, 2025', status: 'Absent', timeIn: '--'},
      
    ],
  };

  const statusColor = {
    Present: 'text-green-600',
    Late: 'text-yellow-500',
    Absent: 'text-red-500',
  };

  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow p-10 bg-white min-h-screen overflow-auto">
        <button onClick={() => navigate("/dashboard")} className="flex items-center text-sm text-[#25324B] mb-4 hover:underline">
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>

        <div className="flex items-center gap-4 mb-6">
          <UserIcon className="w-10 h-10 text-[#25324B]" />
          <div>
            <h2 className="text-xl font-semibold text-[#25324B]">{student.name}</h2>
            <p className="text-sm text-gray-600">{student.id} • {student.cohort}</p>
          </div>
          <div className="ml-auto bg-gray-100 px-4 py-2 rounded-md">
            <p className="text-sm font-medium text-[#25324B]">
              Attendance Rate: <span className="font-bold">{student.attendance}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow p-4 rounded-md flex items-center gap-3">
            <CheckCircleIcon className="w-6 h-6 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Present</p>
              <p className="font-semibold text-[#25324B]">{student.breakdown.present} days</p>
            </div>
          </div>
          <div className="bg-white shadow p-4 rounded-md flex items-center gap-3">
            <ClockIcon className="w-6 h-6 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Late</p>
              <p className="font-semibold text-[#25324B]">{student.breakdown.late} days</p>
            </div>
          </div>
          <div className="bg-white shadow p-4 rounded-md flex items-center gap-3">
            <XCircleIcon className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Absent</p>
              <p className="font-semibold text-[#25324B]">{student.breakdown.absent} days</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#25324B] mb-2 flex items-center gap-2">
          <CalendarDaysIcon className="w-5 h-5 text-[#25324B]" />
          Attendance Records
        </h3>

        <div className="overflow-x-auto mt-2">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="text-left bg-paleOffWhite text-sm text-[#25324B]">
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Time In</th>
                
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {student.records.map((record, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{record.date}</td>
                  <td className={`p-3 font-medium ${statusColor[record.status]}`}>
                    {record.status}
                  </td>
                  <td className="p-3">{record.timeIn}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-10"></div>
      <div className="fixed bottom-0 left-0 w-full h-8 flex items-center justify-center text-xs text-gray-400 bg-white">
        © 2025. Made with love in Lagos. <span className="text-red-500 ml-1">❤️</span>
      </div>
      </div>
    </div>
  );
};

export default StudentAttendanceView;
