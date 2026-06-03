import React from 'react';
import StatCard from '../statCard/StatCard';
import { Briefcase, Users, Zap, CheckCircle2 } from 'lucide-react';
const DashboardStats = () => {

    const statsData = [
    {
      id: 1,
      title: "Total Job Posts",
      value: "48",
      icon: Briefcase,
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      glow: "hover:shadow-blue-500/10",
    },
    {
      id: 2,
      title: "Total Applicants",
      value: "1,284",
      icon: Users,
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      glow: "hover:shadow-purple-500/10",
    },
    {
      id: 3,
      title: "Active Jobs",
      value: "18",
      icon: Zap,
      iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      glow: "hover:shadow-amber-500/10",
    },
    {
      id: 4,
      title: "Jobs Closed",
      value: "32",
      icon: CheckCircle2,
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      glow: "hover:shadow-emerald-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconColor={stat.iconColor}
            glow={stat.glow}
          />
        ))}
      </div>
  );
};

export default DashboardStats;