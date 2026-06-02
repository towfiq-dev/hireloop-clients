import React from 'react';
import { Card, Link } from "@heroui/react";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";
const SmartJob = ({job}) => {
  return (
            <Card 
            key={job.id} 
            className="group bg-[#151516]/70 border border-neutral-900/80 backdrop-blur-xl rounded-[24px] p-7 flex flex-col justify-between h-auto min-h-[340px] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.1)]"
          >
            <div className="p-0 flex flex-col h-full justify-between">
              
              <div>
                <h3 className="text-2xl font-bold text-neutral-100 mb-3 tracking-wide transition-colors duration-300 group-hover:text-indigo-400">
                  {job.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base font-normal leading-relaxed mb-6">
                  {job.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">

                <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 border border-neutral-800/40 text-neutral-300 text-xs font-medium px-3 py-1.5 rounded-xl transition-colors duration-300 group-hover:border-neutral-800">
                  <div className="p-0.5 bg-purple-950/40 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  {job.location}
                </span>

                <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 border border-neutral-800/40 text-neutral-300 text-xs font-medium px-3 py-1.5 rounded-xl transition-colors duration-300 group-hover:border-neutral-800">
                  <div className="p-0.5 bg-purple-950/40 rounded-md">
                    <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  {job.type}
                </span>

                <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 border border-neutral-800/40 text-neutral-300 text-xs font-medium px-3 py-1.5 rounded-xl w-full sm:w-auto transition-colors duration-300 group-hover:border-neutral-800">
                  <div className="p-0.5 bg-purple-950/40 rounded-md">
                    <DollarSign className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  {job.salary}
                </span>
              </div>

              <Link href={`/allRoute/browseJobs/${job.id}`}>
              <button className="w-full cursor-pointer bg-[#0A0A0C] flex items-center justify-center gap-2 text-sm font-semibold text-neutral-400 border border-neutral-900 rounded-xl py-3 px-4 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 group-hover:shadow-lg group-hover:shadow-indigo-600/20">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              </Link>
            </div>
          </Card>
  );
};

export default SmartJob;