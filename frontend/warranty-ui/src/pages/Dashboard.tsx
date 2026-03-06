import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { StatCard } from '../components/StatCard';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/Button';
import type { Product } from '../types';
import { FiBox, FiCheckCircle, FiClock, FiAlertTriangle, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const MOCK_PRODUCTS: Product[] = [
  { id: 'SN-847362', name: 'MacBook Pro M2', category: 'electronics', purchaseDate: '2023-01-15', expiryDate: '2026-01-15', status: 'Active' },
  { id: 'SN-192837', name: 'Samsung 4K TV', category: 'appliances', purchaseDate: '2021-11-20', expiryDate: '2023-11-20', status: 'Expired' },
  { id: 'SN-564738', name: 'Sony PlayStation 5', category: 'electronics', purchaseDate: '2022-05-10', expiryDate: '2025-05-10', status: 'Active' },
  { id: 'SN-918273', name: 'Dyson V15 Vacuum', category: 'appliances', purchaseDate: '2024-02-05', expiryDate: '2026-02-05', status: 'Active' },
];

export const Dashboard: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Expiring' | 'Expired'>('All');
  const navigate = useNavigate();

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Expiring') return p.status === 'Active'; // Mock logic for expiring
    return p.status === filter;
  });

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Products" value="12" icon={<FiBox size={24} />} colorType="blue" />
          <StatCard title="Active" value="8" icon={<FiCheckCircle size={24} />} colorType="green" />
          <StatCard title="Expiring Soon" value="2" icon={<FiClock size={24} />} colorType="yellow" />
          <StatCard title="Expired" value="2" icon={<FiAlertTriangle size={24} />} colorType="red" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-full lg:w-auto flex-1">
            <SearchBar />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Active', 'Expiring', 'Expired'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  filter === f
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <section>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Your Products</h2>
              <p className="text-slate-500 text-sm mt-1">Manage and track your warranty status</p>
            </div>
            <Button onClick={() => navigate('/add-product')} className="shadow-md shrink-0">
              <FiPlus size={18} /> Add Product
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBox className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">No products found</h3>
              <p className="text-slate-500 mt-1 max-w-sm mx-auto">We couldn't find any products matching your current filters. Try adjusting your search.</p>
              <Button onClick={() => setFilter('All')} variant="outline" className="mt-6 mx-auto">
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
