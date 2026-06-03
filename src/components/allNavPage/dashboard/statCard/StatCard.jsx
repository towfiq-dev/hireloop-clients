'use client'
import React from 'react';
import { Card } from '@heroui/react';

const StatCard = ({ title, value, icon: IconComponent, iconColor, glow }) => {
  return (
    <Card
      className={`group relative overflow-hidden bg-[#131926] border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 hover:-translate-y-1 ${glow} hover:shadow-2xl cursor-pointer`}
    >
      {/* CardBody er poriborte standard Tailwind div */}
      <div className="p-6 flex flex-col justify-between h-full min-h-[140px] w-full">
        {/* Icon Layout */}
        <div className="flex items-center justify-between">
          <div className={`p-2.5 rounded-xl border ${iconColor} transition-transform duration-300 group-hover:scale-110`}>
            {IconComponent && <IconComponent size={22} strokeWidth={2} />}
          </div>
          
          {/* Decorative background gradient accent */}
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="mt-4 space-y-1">
          <p className="text-sm font-medium text-slate-400 tracking-wide">
            {title}
          </p>
          <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-primary-400 transition-colors duration-200">
            {value}
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;