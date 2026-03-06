import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { StatCard } from '../components/StatCard';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/Button';
import type { Product } from '../types';
import { FiBox, FiCheckCircle, FiClock, FiAlertTriangle, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

export const Dashboard: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Expiring' | 'Expired'>('All');
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userId = localStorage.getItem('userId');
    if (!userId || userId === 'undefined' || userId === 'null') {
      localStorage.removeItem('userId'); // Clear corrupted state
      navigate('/login');
      return;
    }

    const loadItems = async () => {
      try {
        const data = await api.getItems(parseInt(userId));
        if (data.error) throw new Error(data.error);

        // Map backend schema to frontend Product schema
        const mappedProducts = data.map((item: any) => ({
          id: item.id.toString(),
          name: item.item_name,
          category: 'electronics', // Defaulting as category isn't in backend yet
          purchaseDate: item.expiry_date, // Using expiry_date as proxy for now
          expiryDate: item.expiry_date,
          status: new Date(item.expiry_date) > new Date() ? 'Active' : 'Expired'
        }));
        setProducts(mappedProducts);
      } catch (err) {
        console.error("Failed to fetch items", err);
      }
    };
    loadItems();
  }, [navigate]);

  const filteredProducts = products.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Expiring') return p.status === 'Active';
    return p.status === filter;
  });

  // Calculate dynamic stats
  const totalCount = products.length;
  const activeCount = products.filter(p => p.status === 'Active').length;
  const expiredCount = products.filter(p => p.status === 'Expired').length;

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Products" value={totalCount.toString()} icon={<FiBox size={24} />} colorType="blue" />
          <StatCard title="Active" value={activeCount.toString()} icon={<FiCheckCircle size={24} />} colorType="green" />
          <StatCard title="Expiring Soon" value="0" icon={<FiClock size={24} />} colorType="yellow" />
          <StatCard title="Expired" value={expiredCount.toString()} icon={<FiAlertTriangle size={24} />} colorType="red" />
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
