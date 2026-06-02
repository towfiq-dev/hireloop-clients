'use client'
import React from "react";
import Link from "next/link";
import SmartJob from "./SmartJob";
import { motion } from "motion/react"

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour"
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    description: "Build scalable web applications using MongoDB, Express, React, and Node.js.",
    location: "Dhaka, Bangladesh",
    type: "Remote",
    salary: "€30–€50/hour"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description: "Craft beautiful user interfaces and seamless experiences for high-end platforms.",
    location: "London, UK",
    type: "Hybrid",
    salary: "€20–€35/hour"
  },
  {
    id: 4,
    title: "Next.js Engineer",
    description: "Optimize core web vitals and develop high-performance server-rendered apps.",
    location: "San Francisco, USA",
    type: "Remote",
    salary: "€40–€65/hour"
  },
  {
    id: 5,
    title: "Full Stack Developer",
    description: "Take ownership of both client-side and server-side architecture from scratch.",
    location: "Berlin, Germany",
    type: "Hybrid",
    salary: "€35–€55/hour"
  },
  {
    id: 6,
    title: "Backend Developer",
    description: "Design secure RESTful APIs, manage complex databases, and ensure system uptime.",
    location: "Toronto, Canada",
    type: "Remote",
    salary: "€30–€45/hour"
  }
];

const JobDiscovery=()=> {
  return (
    <section className="bg-[#030303] text-white py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-3xl w-full text-center mb-16 relative z-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full inline-block animate-pulse"></span>
          Smart Job Discovery
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full inline-block animate-pulse"></span>
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight leading-tight max-w-xl mx-auto text-white">
          The roles you'd never find by searching
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mb-16 relative z-10">
        {jobsData.map((job)=> 
        {return <SmartJob 
          key={job.id} 
          job={job}/>
        })
        
        }
      </div>

      <Link href={'/allRoute/browseJobs'}>
      <motion.button 
        className="bg-white text-black font-semibold px-8 py-4 cursor-pointer rounded-xl text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/5 relative z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
      >
        View all job open
      </motion.button>
      </Link>

    </section>
  );
}
export default JobDiscovery;