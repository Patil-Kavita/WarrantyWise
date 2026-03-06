import React from 'react';
import { cn } from '../utils';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  colorType: 'blue' | 'green' | 'yellow' | 'red';
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, colorType }) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-emerald-100 text-emerald-600',
    yellow: 'bg-amber-100 text-amber-600',
    red: 'bg-rose-100 text-rose-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-center justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div>
        <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wide">{title}</p>
        <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
      </div>
      <div className={cn('p-4 rounded-xl shadow-sm', colorMap[colorType])}>
        {icon}
      </div>
    </div>
  );
};
