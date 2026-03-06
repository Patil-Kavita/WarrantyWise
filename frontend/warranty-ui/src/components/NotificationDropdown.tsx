import React, { useState, useRef, useEffect } from 'react';
import { FiBell, FiAlertTriangle } from 'react-icons/fi';

export const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FiBell size={22} className={isOpen ? "text-blue-600" : ""} />
        <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border border-slate-100 z-50 overflow-hidden transform opacity-100 scale-100 transition-all origin-top-right">
          <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/80 backdrop-blur-sm">
            <h3 className="font-semibold text-slate-800">Notifications</h3>
          </div>
          <div className="max-h-80 overflow-y-auto">
            <div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer flex gap-3 group">
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FiAlertTriangle size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-800 mb-0.5 leading-tight">Warranty for TV has expired</p>
                <p className="text-xs text-slate-500">2 hours ago</p>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
            </div>
            <div className="px-4 py-3 text-center border-t border-slate-100">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Mark all as read</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
