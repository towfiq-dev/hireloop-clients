"use client";

import { Button } from "@heroui/react";
import { Search, MapPin, BriefcaseBusiness } from "lucide-react";
import { motion } from "motion/react"
const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d1b4b_0%,#050505_45%,#000_100%)]" />

      {/* Glow Effects */}
      <div className="absolute left-1/2 top-[80%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[120px]" />
      <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-10 top-20 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-xl">
          <BriefcaseBusiness className="h-4 w-4 text-orange-400" />
          <span className="font-semibold text-white">50,000+</span>
          <span className="text-gray-400 uppercase tracking-wider text-[12px] md:text-[14px]">New Jobs This Month</span>
        </div>

        <motion.p 
        className="text-white text-[17px]"
        animate={{ rotate: 360 }}
        >Remote Job</motion.p>

        {/* Heading */}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base text-gray-400 sm:text-lg">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

      {/* Search Box */}
<div className="mt-12 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-3 md:p-2 backdrop-blur-xl">
  <div className="flex flex-col gap-3 md:flex-row md:items-center w-full">
    
    {/* Job Title Input Section */}
    <div className="flex w-full md:flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 h-14 focus-within:border-violet-500 transition-colors">
      <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />
      <input
        type="text"
        placeholder="Job title, skill or company"
        className="w-full bg-transparent text-white placeholder-gray-500 outline-none border-none text-sm focus:ring-0 p-0"
      />
    </div>

    {/* Divider - Mobile-e hidden, Desktop-e show hobe */}
    <div className="hidden h-8 w-px bg-white/10 md:block flex-shrink-0" />

    {/* Location Input Section */}
    <div className="flex w-full md:flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 h-14 focus-within:border-violet-500 transition-colors">
      <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
      <input
        type="text"
        placeholder="Location or Remote"
        className="w-full bg-transparent text-white placeholder-gray-500 outline-none border-none text-sm focus:ring-0 p-0"
      />
    </div>

    {/* Search Button */}
    <Button
      size="lg"
      className="w-full md:w-14 h-14 bg-violet-600 text-white hover:bg-violet-500 rounded-xl flex items-center justify-center gap-2 font-medium min-w-0 md:px-0 flex-shrink-0"
    >
      <Search size={20} className="flex-shrink-0" />
      <span className="md:hidden">Search</span>
    </Button>
  </div>
  </div>

        {/* Trending Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-gray-500">Trending Position</span>
          {["Product Designer", "AI Engineering", "DevOps Engineer"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-lg"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;