import React from "react";
import { Button } from "@heroui/react";
import ctaBg from "@/assets/images/cta-bg.png";
import Link from "next/link";
const NextRole = ()=> {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] bg-black text-white flex flex-col justify-center items-center overflow-hidden px-4 py-20">
      
      <div 
        className="absolute inset-0 bg-bottom bg-no-repeat bg-contain opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url(${ctaBg.src})`,
        }}
      />

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[300px] h-[300px] sm:w-[600px] sm:h-[500px] md:w-[800px] md:h-[600px] rounded-full pointer-events-none z-0 opacity-40 sm:opacity-50 mix-blend-screen filter blur-[80px] sm:blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(147,51,234,0.4) 50%, rgba(0,0,0,0) 100%)"
        }}
      />

      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl mx-auto leading-[1.15] text-white">
          Your next role is <br className="hidden sm:inline" /> already looking for you
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base md:text-lg mb-10 max-w-xl px-2 leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
          <Link href={'/auth/signup'}  >
          <Button 
            className="bg-white text-black font-semibold px-8 py-6 rounded-xl text-sm transition-all hover:bg-neutral-200 shadow-lg shadow-white/5"
          >
            Create a free account
          </Button>
          </Link>

          <Link href={'/allRoute/pricing'}>
          <Button 
            variant="bordered"
            className="bg-[#121214]/40 border-neutral-800 text-neutral-300 font-medium px-8 py-6 rounded-xl text-sm hover:bg-neutral-900/80 hover:text-white transition-all backdrop-blur-sm"
          >
            View pricing
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default NextRole;