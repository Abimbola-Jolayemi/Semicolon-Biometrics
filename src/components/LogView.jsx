// src/components/LogView.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../reuseables/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const LogView = () => {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();

  const attendanceData = [
    { name: "Adaobi Suleiman", email: "a.sule@eg.com", status: "View" },
    { name: "Tunde Okoye", email: "tunene@aj.com", status: "View" },
    { name: "Ngozi Onwudiwe", email: "ngo.onwu@mail", status: "View" },
  ];

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Attendance History", 14, 20);

    const tableColumn = ["Name", "Email", "% Attendance"];
    const tableRows = [];

    attendanceData.forEach(item => {
      const rowData = [item.name, item.email, item.status];
      tableRows.push(rowData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("attendance-history.pdf");
  };

  return (
    <div className="w-4/5 p-8 font-ibm bg-white h-full min-h-screen relative mx-auto pb-24">
      <div className="flex justify-end mb-2">
        <p className="text-deepGray text-sm">{today}.</p>
      </div>

      <h2 className="text-2xl font-semibold text-deepGray mb-6">
        Cohort Attendance:
      </h2>

      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <select className="block w-full sm:w-1/4 bg-white border border-gray-300 px-4 py-2 rounded leading-tight focus:outline-none focus:ring">
          <option>Cohort 21</option>
          <option>Cohort 22</option>
          <option>Cohort 23</option>
          <option>Cohort 24</option>
          <option>Cohort 25</option>
        </select>

        <input
          type="date"
          className="block w-full sm:w-1/4 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
          defaultValue={formattedDate}
        />

        <select className="block w-full sm:w-1/4 bg-white border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring">
          <option>All</option>
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
        </select>
      </div>

      {/* Generate PDF Button */}
      <div className="flex justify-end mb-4">
        <Button
          textContent="Download file"
          onClick={handleDownload}
          className="w-40 h-10 font-ibm text-white bg-semicolonRed"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 bg-paleOffWhite text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 bg-paleOffWhite text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 bg-paleOffWhite text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                % Attendance
              </th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((person, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{person.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{person.email}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-red-500 font-medium cursor-pointer">
                  <Button textContent="View" onClick={() => navigate("/view-student")} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="px-5 py-3 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Total =
              </td>
              <td className="px-5 py-3 bg-gray-100 text-left text-xl font-semibold text-gray-700">
                30
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="h-10"></div>
      <div className="fixed bottom-0 left-0 w-full h-8 flex items-center justify-center text-xs text-gray-400 bg-white">
        © 2025. Made with love in Lagos. <span className="text-red-500 ml-1">❤️</span>
      </div>
    </div>
  );
};

export default LogView;
