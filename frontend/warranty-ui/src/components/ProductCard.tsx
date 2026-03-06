import React from 'react';
import type { Product } from '../types';
import { FiBox, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isActive = product.status === 'Active';
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-all duration-200 group relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-1 h-full ${isActive ? 'bg-emerald-500' : 'bg-rose-500'}`} />
      <div className="flex justify-between items-start mb-5 pl-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <FiBox size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 text-lg">{product.name}</h4>
            <p className="text-sm text-slate-500">ID: {product.id}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full ${
          isActive 
            ? 'bg-emerald-100 text-emerald-700' 
            : 'bg-rose-100 text-rose-700'
        }`}>
          {isActive ? <FiCheckCircle size={14} /> : <FiAlertCircle size={14} />}
          {product.status}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 pl-2">
        <div>
          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Purchased</p>
          <p className="text-sm font-medium text-slate-800">{product.purchaseDate}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Warranty Expires</p>
          <p className="text-sm font-medium text-slate-800">{product.expiryDate}</p>
        </div>
      </div>
    </div>
  );
};
