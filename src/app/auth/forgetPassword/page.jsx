'use client';
import React, { useState } from 'react';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ForgotPassword = () => {

  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12 relative">
      
      {showToast && (
        <div className="absolute top-5 right-5 bg-emerald-500 text-white px-5 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce z-50">
          <CheckCircle size={22} />
          <div>
            <p className="font-bold">Email Sent!</p>
            <p className="text-xs text-emerald-100">Check your inbox for the reset link.</p>
          </div>
        </div>
      )}

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-md w-full border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#001D3D] mb-3">Forgot Password?</h1>
          <p className="text-gray-500 leading-relaxed">
            No worries, it happens! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-cyan-100 transition-all text-gray-800"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#00B4D8] hover:bg-[#0096C7] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-100 active:scale-[0.98]"
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer */}
        <div className="mt-10 text-center">
          <Link 
            href="/auth/signin" 
            className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold hover:underline group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"/>
            Back to Sign In
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ForgotPassword;