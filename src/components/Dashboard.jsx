import Sidebar from "../components/Sidebar";
import WelcomeCard from "../components/WelcomeCard";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-[240px] flex-1 p-8 bg-white min-h-screen">
        <div className="flex justify-between">
          <WelcomeCard />
          <div className="space-y-4">
            <StatsCard label="Total natives registered" value="250" />
            <StatsCard label="Total cohorts registered" value="25" />
            <StatsCard label="Checked-In today" value="150" />
          </div>
        </div>

        <footer className="mt-16 text-sm text-center italic text-[#25324B]">
          Copyright 2025. Made with Love in Lagos. <span className="text-red-600">❤️</span>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
