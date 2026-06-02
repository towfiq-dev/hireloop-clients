'use client'
import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Plus, ArrowRight, Crown, BarChart3, Zap } from "lucide-react";
import { motion } from "motion/react"
const JobPricing = ()=> {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-black text-white py-25 px-4 sm:px-10 lg:px-20 min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <div className="max-w-3xl w-full text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 flex items-center justify-center gap-2">
          <span className="w-1 h-1 bg-indigo-500 inline-block"></span>
          Pricing
          <span className="w-1 h-1 bg-indigo-500 inline-block"></span>
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight leading-tight">
          Pay for the leverage, <br /> not the listings
        </h2>
      </div>

      {/* Toggle Button */}
      <div className="flex bg-[#16161C] p-1 rounded-full mb-16 items-center border border-neutral-800">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-4 py-1.5 text-sm cursor-pointer font-medium rounded-full transition-all ${
            !isYearly ? "bg-white text-black font-semibold" : "text-neutral-400"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-4 py-1.5 cursor-pointer text-sm font-medium rounded-full flex items-center gap-2 transition-all ${
            isYearly ? "bg-white text-black font-semibold" : "text-neutral-400"
          }`}
        >
          Yearly
          <span className="bg-magenta-500 text-white text-[10px] bg-fuchsia-600 px-1.5 py-0.5 rounded-full font-bold">
            25%
          </span>
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full items-stretch">
        
        {/* Starter Plan */}
        <Card className="bg-[#0A0A0C] border border-neutral-800/60 rounded-3xl p-6 flex flex-col justify-between">
          <CardHeader className="flex justify-between items-center p-0 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800">
                <Crown className="w-4 h-4 text-fuchsia-400" />
              </div>
              <span className="text-xl font-medium text-neutral-200">Starter</span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-neutral-500 text-xs block">/month</span>
            </div>
          </CardHeader>
          <span className="p-0 mb-8">
            <p className="text-sm font-medium text-neutral-300 mb-4">Start building your insights hub:</p>
            <ul className="space-y-3">
              {["Daily AI match brief (top 5)", "Verified salary bands", "Company insight dashboards", "1-click apply, unlimited"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                  <Plus className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </span>
          <CardFooter className="p-0">
            <Button className="w-full bg-[#26262B] text-neutral-300 font-medium hover:bg-neutral-800 rounded-xl py-6 flex justify-between items-center px-4">
              <span>Choose This Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Growth Plan (Highlighted) */}
        <motion.div 
        className="bg-[#0F0F14] border-2 border-neutral-700/50 rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
        >
          <CardHeader className="flex justify-between items-center p-0 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800">
                <BarChart3 className="w-4 h-4 text-fuchsia-400" />
              </div>
              <span className="text-xl font-medium text-neutral-200">Growth</span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold">${isYearly ? "12" : "17"}</span>
              <span className="text-neutral-500 text-xs block">/month</span>
            </div>
          </CardHeader>
          <span className="p-0 mb-8">
            <p className="text-sm font-medium text-neutral-300 mb-4">Start building your insights hub:</p>
            <ul className="space-y-3">
              {["Daily AI match brief (top 5)", "Verified salary bands", "Company insight dashboards", "1-click apply, unlimited"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                  <Plus className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </span>
          <CardFooter className="p-0">
            <Button className="w-full bg-white text-black font-semibold hover:bg-neutral-200 rounded-xl py-6 flex justify-between items-center px-4">
              <span>Choose This Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </motion.div>

        {/* Premium Plan */}
        <Card className="bg-[#0A0A0C] border border-neutral-800/60 rounded-3xl p-6 flex flex-col justify-between">
          <CardHeader className="flex justify-between items-center p-0 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800">
                <Zap className="w-4 h-4 text-fuchsia-400" />
              </div>
              <span className="text-xl font-medium text-neutral-200">Premium</span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold">${isYearly ? "74" : "99"}</span>
              <span className="text-neutral-500 text-xs block">/month</span>
            </div>
          </CardHeader>
          <span className="p-0 mb-8">
            <p className="text-sm font-medium text-neutral-300 mb-4">Start building your insights hub:</p>
            <ul className="space-y-3">
              {["Everything in Pro", "Multi-profile career portfolios", "Shared talent rooms", "Recruiter view (read-only)"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                  <Plus className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </span>
          <CardFooter className="p-0">
            <Button className="w-full bg-[#26262B] text-neutral-300 font-medium hover:bg-neutral-800 rounded-xl py-6 flex justify-between items-center px-4">
              <span>Choose This Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>

      </div>
    </section>
  );
}
export default JobPricing;