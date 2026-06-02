import React from "react";
import { Card } from "@heroui/react";
import { Briefcase, Building2, Users, Star } from "lucide-react";
import statsBg from "@/assets/images/globe.png";

const statsData = [
  {
    icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
    number: "50K",
    label: "Active Jobs",
  },
  {
    icon: <Building2 className="w-5 h-5 text-indigo-400" />,
    number: "12K",
    label: "Companies",
  },
  {
    icon: <Users className="w-5 h-5 text-indigo-400" />,
    number: "2M",
    label: "Job Seekers",
  },
  {
    icon: <Star className="w-5 h-5 text-indigo-400" />,
    number: "97%",
    label: "Satisfaction Rate",
  },
];

const JobStats = ()=> {
  return (
    <section className="relative w-full min-h-[750px] bg-black text-white flex flex-col justify-between items-center overflow-hidden pt-32 px-4 sm:px-8">
    
    <div 
  className="absolute inset-x-0 -bottom-50 top-15 bg-bottom bg-no-repeat bg-contain opacity-40 pointer-events-none z-0 mix-blend-screen select-none transform scale-[2] origin-bottom transition-all duration-700"
  style={{
    backgroundImage: `url(${statsBg.src})`,
    maskImage: "linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
  }}
/>

      <div 
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[320px] bg-indigo-600/20 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none z-0"
      />

      <div className="relative z-20 max-w-4xl w-full text-center mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-200 leading-[1.25] max-w-3xl mx-auto px-2">
          Assisting over <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-extrabold">15,000 job seekers</span> <br className="hidden sm:inline" /> find their dream positions.
        </h2>
      </div>

      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl w-full mt-auto pb-12">
        {statsData.map((stat, index) => (
          <Card 
            key={index} 
            className="group bg-[#0B0B0F]/80 border border-neutral-900/90 backdrop-blur-xl rounded-2xl p-6 min-h-[190px] sm:min-h-[210px] flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-indigo-500/5"
          >
            <div className="p-0 flex flex-col justify-between h-full">

              <div className="w-10 h-10 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-indigo-950/40 group-hover:border-indigo-500/40 group-hover:text-indigo-400">
                {stat.icon}
              </div>
              
              <div className="mt-6">
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400">
                  {stat.number}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium tracking-wide transition-colors duration-300 group-hover:text-neutral-400">
                  {stat.label}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

    </section>
  );
}

export default JobStats;