import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { Radio } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import Image from "next/image";
import Logo from "@/assets/images/dream.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] text-[#8a8a93] py-12 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-6">
        
        {/* Left Side: Brand Info */}
        <div className="flex flex-col gap-4 max-w-sm">
          {/* Logo Section */}
          <div className="relative h-13 w-40 overflow-hidden rounded-xl">
              <Image
                src={Logo}
                alt="Dream Job Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          
          {/* Description */}
          <p className="text-sm leading-relaxed text-zinc-400 mt-2">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
        </div>

        {/* Right Side: Links Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
          
          {/* Column 1: Product */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#5856d6] font-medium text-base tracking-wide">Product</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Job discovery</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Worker AI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Companies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Salary data</Link></li>
            </ul>
          </div>

          {/* Column 2: Navigations */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#5856d6] font-medium text-base tracking-wide">Navigations</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Help center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Career library</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h4 className="text-[#5856d6] font-medium text-base tracking-wide">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Brand Guideline</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200">Newsroom</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section: Socials & Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
        
        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <Link href="#" className="w-10 h-10 bg-[#0f0f11] rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200 border border-zinc-800/50">
            <FaFacebook size={18} />
          </Link>
          {/* Pinterest/Custom Icon (Purple one in image) */}
          <Link href="#" className="w-10 h-10 bg-[#5856d6] rounded-xl flex items-center justify-center text-white hover:bg-opacity-90 transition-all duration-200 shadow-lg shadow-indigo-500/20">
            <Radio size={18} />
          </Link>
          {/* LinkedIn */}
          <Link href="#" className="w-10 h-10 bg-[#0f0f11] rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200 border border-zinc-800/50">
            <LiaLinkedin size={18} />
          </Link>
        </div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-zinc-500 text-center sm:text-left">
          <span>Copyright 2024 — Programming Hero</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-zinc-300 transition-colors">Terms & Policy</Link>
            <span className="text-zinc-700">—</span>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Guideline</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}