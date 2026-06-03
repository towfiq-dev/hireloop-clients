"use client";
import { useState } from "react";
import { Briefcase } from "@gravity-ui/icons";
import DashboardForm from "@/components/allNavPage/dashboard/dashboardForm/DashboardForm";

export default function PostJobPage() {
  // Mock configuration for recruiter's authenticated state
  const [mockCompany] = useState({
    name: "Acme Corp (Auto-filled)",
    id: "company_123",
    isApproved: true,
  });

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[#121214] border border-zinc-900 rounded-xl p-8 shadow-2xl">

        {/* Form Header block */}
        <div className="border-b border-zinc-800 pb-6 mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">Post a New Job</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Fill out the details below to publish your open position.
          </p>

          {/* Company verification status panel */}
          <div className="mt-4 inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-400">
            <Briefcase size={14} className="text-zinc-500" />
            Posting as: <span className="font-semibold text-zinc-300">{mockCompany.name}</span>
            <span className="text-emerald-500 font-medium bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50">Approved</span>
          </div>
        </div>

        {/* Hero UI Main Form Handler */}
        <DashboardForm mockCompany={mockCompany}/>
      </div>
    </div>
  );
}