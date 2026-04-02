import React from 'react';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#010101]/60 backdrop-blur-xl px-8 py-5 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E11D48]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#9333EA]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></div>
        </div>
        <span className="text-white font-bold text-2xl tracking-tighter">elementra</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-9 text-gray-300 font-medium text-sm">
        {['Home', 'About', 'Features', 'Join Us', 'News'].map(link => (
          <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
        ))}
      </div>

      {/* Social & CTA */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-4 text-gray-400">
          <FaXTwitter size={18} className="hover:text-white cursor-pointer transition" />
          <FaInstagram size={20} className="hover:text-white cursor-pointer transition" />
        </div>
        <button className="bg-[#B91C1C] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-tight hover:bg-red-700 transition transform active:scale-95">
          GET IN TOUCH
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
