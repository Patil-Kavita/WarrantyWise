import React, { useState } from 'react';
import { FiShield, FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
        
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3.5 rounded-xl shadow-lg shadow-blue-500/30 mb-5">
            <FiShield className="text-white" size={28} />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2 tracking-tight">WarrantyWise</h1>
          <p className="text-slate-500 text-center text-sm">Sign in to manage your warranties</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <InputField 
            type="email"
            label="Email"
            placeholder="you@example.com"
            icon={<FiMail />}
            required
            autoComplete="email"
          />
          
          <div className="relative">
            <InputField 
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="••••••••"
              icon={<FiLock />}
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-9 text-slate-400 hover:text-slate-600 p-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm pt-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <span className="text-slate-600 group-hover:text-slate-800 transition-colors">Remember me</span>
            </label>
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Forgot password?
            </a>
          </div>

          <Button type="submit" fullWidth className="py-2.5 mt-4 text-sm tracking-wide">
            Sign In
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            Create one now
          </a>
        </div>
      </div>
    </div>
  );
};
