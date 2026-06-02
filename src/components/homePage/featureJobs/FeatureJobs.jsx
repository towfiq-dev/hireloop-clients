import React from "react";
import { 
  Search, 
  TrendingUp, 
  Building2, 
  Bookmark, 
  MousePointerClick, 
  FileText, 
  Hexagon, 
  LineChart 
} from "lucide-react";
import { Card } from "@heroui/react";

const features = [
  {
    icon: <Search className="w-5 h-5 text-purple-400" />,
    title: "Smart Search",
    desc: "Find your ideal job with advanced filters.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
    title: "Salary Insights",
    desc: "Get real salary data to negotiate confidently.",
  },
  {
    icon: <Building2 className="w-5 h-5 text-purple-400" />,
    title: "Top Companies",
    desc: "Apply to vetted companies that are hiring.",
  },
  {
    icon: <Bookmark className="w-5 h-5 text-purple-400" />,
    title: "Saved Jobs",
    desc: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: <MousePointerClick className="w-5 h-5 text-purple-400" />,
    title: "One-Click Apply",
    desc: "Simplify your job applications for an easier process!",
  },
  {
    icon: <FileText className="w-5 h-5 text-purple-400" />,
    title: "Resume Builder",
    desc: "Create professional resumes with modern templates.",
  },
  {
    icon: <Hexagon className="w-5 h-5 text-purple-400" />,
    title: "Skill-Based Matching",
    desc: "Discover jobs that match your skills and experience.",
  },
  {
    icon: <LineChart className="w-5 h-5 text-purple-400" />,
    title: "Career Growth Resources",
    desc: "Boost your career with quick interview tips.",
  },
];

const FeatureJobs = ()=> {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-10 lg:px-20 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 flex items-center justify-center gap-2">
          <span className="w-1 h-1 bg-indigo-500 inline-block"></span>
          Features Job
          <span className="w-1 h-1 bg-indigo-500 inline-block"></span>
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight max-w-xl mx-auto leading-tight">
          Everything you need to succeed
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start p-2">
            <Card className="bg-[#0D0D11] border border-neutral-900 min-w-[48px] h-12 flex items-center justify-center rounded-xl shrink-0">
              <span className="p-0 flex items-center justify-center">
                {feature.icon}
              </span>
            </Card>
            <div>
              <h3 className="font-semibold text-base text-neutral-200 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeatureJobs