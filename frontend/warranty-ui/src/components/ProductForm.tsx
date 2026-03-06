import React, { useState } from 'react';
import { InputField } from './InputField';
import { Button } from './Button';
import { FiHash, FiTag, FiCalendar, FiBox } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const ProductForm = ({ onSubmit }: { onSubmit?: (data: any) => void }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, purchaseDate, expiryDate });
    } else {
      navigate('/');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 flex-wrap">
          <InputField 
            label="Product Name" 
            placeholder="e.g. MacBook Pro M2" 
            icon={<FiBox />} 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField 
            label="Product ID / Serial Number" 
            placeholder="SN-123456789" 
            icon={<FiHash />} 
            required={false}
          />
          
          <div className="flex flex-col w-full">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Category</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <FiTag size={18} />
              </div>
              <select 
                defaultValue=""
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 hover:border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white appearance-none cursor-pointer shadow-sm text-slate-800 font-medium"
              >
                <option value="" disabled>Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="appliances">Appliances</option>
                <option value="furniture">Furniture</option>
                <option value="automotive">Automotive</option>
                <option value="tools">Tools</option>
                <option value="sports">Sports Equipment</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="hidden md:block"></div>

          <InputField 
            label="Purchase Date" 
            type="date" 
            icon={<FiCalendar />} 
            required 
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
          />
          <InputField 
            label="Warranty End Date" 
            type="date" 
            icon={<FiCalendar />} 
            required 
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4">
          <Button type="button" variant="outline" onClick={() => navigate('/')} className="sm:w-32">
            Cancel
          </Button>
          <Button type="submit" variant="primary" className="sm:w-44">
            Save Product
          </Button>
        </div>
      </form>
    </div>
  );
};
