import React from 'react';
import { FiShield, FiLogOut } from 'react-icons/fi';
import { NotificationDropdown } from './NotificationDropdown';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3.5 flex items-center justify-between sticky top-0 z-40 shadow-sm transition-all duration-300">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
          <FiShield className="text-white" size={20} />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight group-hover:text-black transition-colors">
          WarrantyWise
        </span>
      </Link>
      
      <div className="flex items-center gap-3 md:gap-5">
        <NotificationDropdown />
        <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
        <Link to="/login" className="flex items-center gap-2 text-slate-500 hover:text-rose-600 transition-colors px-3 py-2 rounded-lg hover:bg-rose-50 font-medium text-sm">
          <FiLogOut size={18} />
          <span className="hidden sm:inline">Logout</span>
        </Link>
      </div>
    </nav>
  );
};
