import React, { useState } from 'react';
import {
  HomeIcon, UserIcon, UsersIcon, ChartBarIcon,
  CogIcon, PowerIcon, Bars3Icon, XMarkIcon
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ view, activeView, onClick, icon: Icon, label }) => (
  <div
    className={`flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${
      activeView === view ? 'text-semicolonRed' : 'text-gray-700 hover:text-semicolonRed'
    }`}
    onClick={() => onClick(view)}
  >
    <Icon className="w-7 h-7" />
    <span className="text-xl font-normal font-ibm">{label}</span>
  </div>
);

const Sidebar = ({ onViewChange, activeView }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleSettingsClick = () => console.log('Settings clicked');
  const handleLogoutClick = () => {
    console.log('Logout clicked')

    navigate('/signin');
  };

  return (
    <>
      <div className="lg:hidden fixed top-1 left-3 z-50">
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 text-semicolonRed" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-gray-800" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-customYellow z-40 w-64 p-6 transform transition-transform duration-300 ease-in-out
  ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:w-1/5`}>
        
        <div className="flex flex-col justify-between h-full">
          <div>
            <img
              src="https://res.cloudinary.com/dwyiuc4ov/image/upload/v1710150205/assets/home/grpyw2ac3zst8os5omh6.svg"
              alt="Semicolon Logo"
              className="mb-12"
            />
            <nav className="space-y-8">
              <NavItem view="welcome" activeView={activeView} onClick={onViewChange} icon={HomeIcon} label="Welcome" />
              <NavItem view="addNative" activeView={activeView} onClick={onViewChange} icon={UserIcon} label="Add Native" />
              <NavItem view="log" activeView={activeView} onClick={onViewChange} icon={UsersIcon} label="Log" />
              <NavItem view="analytics" activeView={activeView} onClick={onViewChange} icon={ChartBarIcon} label="Analytics" />
            </nav>
          </div>
          <div className="flex justify-between items-center px-2 mt-8">
            <CogIcon className="w-8 h-8 text-gray-700 cursor-pointer hover:text-red-600" onClick={handleSettingsClick} />
            <PowerIcon className="w-8 h-8 text-gray-700 cursor-pointer hover:text-red-600" onClick={handleLogoutClick} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default React.memo(Sidebar);
