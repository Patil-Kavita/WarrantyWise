import React, { useState } from 'react';
import { FiShield, FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

import { api } from '../api';

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const data = await api.register(username, password);
        if (data.error) return alert(data.error);
        alert('Registered successfully! Logging you in...');
        localStorage.setItem('userId', data.user.id);
        navigate('/');
      } else {
        const data = await api.login(username, password);
        if (data.error) return alert(data.error);
        localStorage.setItem('userId', data.user_id);
        navigate('/');
      }
    } catch (err) {
      alert('Could not connect to the backend server. Is it running?');
    }
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

        <form onSubmit={handleAuth} className="space-y-5">
          <InputField 
            type="text"
            label="Username"
            placeholder="johndoe"
            icon={<FiMail />}
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <div className="relative">
            <InputField 
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="••••••••"
              icon={<FiLock />}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {isRegistering ? 'Create Account' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button type="button" onClick={() => setIsRegistering(!isRegistering)} className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            {isRegistering ? 'Sign In' : 'Create one now'}
          </button>
        </div>
      </div>
    </div>
  );
};
