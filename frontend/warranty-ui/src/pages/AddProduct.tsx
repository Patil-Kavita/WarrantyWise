import React from 'react';
import { Navbar } from '../components/Navbar';
import { ProductForm } from '../components/ProductForm';
import { FiInfo } from 'react-icons/fi';

export const AddProduct: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Add New Product</h1>
          <p className="text-slate-500 mt-2">Enter the details below to track a new warranty securely.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <ProductForm />
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-6 sticky top-28 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-white text-blue-600 rounded-xl shadow-sm border border-blue-100">
                  <FiInfo size={20} />
                </div>
                <h3 className="font-semibold text-slate-800 text-lg tracking-tight">Warranty Notifications</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p><strong className="text-slate-800 block mb-0.5">Automated Alerts</strong> Receive notifications 30 days before warranty expiration.</p>
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p><strong className="text-slate-800 block mb-0.5">Clear Status</strong> Expired warranties are clearly marked on your dashboard.</p>
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p><strong className="text-slate-800 block mb-0.5">Centralized</strong> Keep all your warranty documents organized in one place.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
