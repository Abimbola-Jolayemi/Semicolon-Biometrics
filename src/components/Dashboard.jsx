// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddNativeView from '../components/AddNativeView';
import AnalyticsView from '../components/AnalyticsView';
import LogView from '../components/LogView';
import WelcomeCard from './WelcomeCard';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('welcome');

  const handleSidebarClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="flex h-screen bg-gray-100">
  <Sidebar onViewChange={handleSidebarClick} activeView={currentView} />
  <div className="flex-grow w-full flex m-auto justify-center bg-white h-full overflow-auto">
    {currentView === 'welcome' && <WelcomeCard />}
    {currentView === 'addNative' && <AddNativeView />}
    {currentView === 'analytics' && <AnalyticsView />}
    {currentView === 'log' && <LogView />}
  </div>
</div>

  );
};

export default Dashboard;