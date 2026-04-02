import React, { useState } from 'react';
import { LuSettings2, LuChevronDown } from 'react-icons/lu';
import { FaCommentDots } from 'react-icons/fa6';

const Hero = () => {
  const [isAdvanced, setIsAdvanced] = useState(true); // Default to Advanced based on your request
  const [activeTab, setActiveTab] = useState('GENERATION');
  const [model, setModel] = useState('MidJourney');
  const [size, setSize] = useState('1024 x 1024');

  const popularTags = ["Creative", "Hyperreality", "Steampunk", "Illustration"];

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 px-4 bg-[#010101] overflow-hidden text-white font-sans">

      {/* 1. Header Section - Visible in both modes */}
      {!isAdvanced && (
        <div className="text-center mb-12">
          <h1 className="text-7xl md:text-[90px] font-extrabold mb-6 leading-tight tracking-tighter">
            Create <span className="text-[#D1A3B0]">incredible</span> <br/>
            <span className="text-[#6B8E4E]">visuals</span> in seconds!
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Enter parameters and render unique architectural visuals for your brand
          </p>
        </div>
      )}

      {/* 2. Mode Toggle (Standart / Advanced) */}
      <div className="flex items-center justify-center gap-5 mb-12 font-bold z-20">
        <span className={!isAdvanced ? "text-white" : "text-gray-600"}>Standart</span>
        <button
          onClick={() => setIsAdvanced(!isAdvanced)}
          className={`w-14 h-7 rounded-full p-1 flex items-center transition duration-300 ${isAdvanced ? 'bg-[#450A0A]' : 'bg-gray-800'}`}
        >
          <div className={`w-5 h-5 rounded-full shadow-lg transform transition-transform ${isAdvanced ? 'bg-[#E11D48] translate-x-7' : 'bg-white'}`}></div>
        </button>
        <span className={isAdvanced ? "text-white" : "text-gray-600"}>Advanced</span>
      </div>

      {/* 3. Main Dashboard Container */}
      <div className="w-full max-w-6xl z-10">

        {/* --- ADVANCED MODE VIEW --- */}
        {isAdvanced ? (
          <div className="bg-[#0A0A0A]/40 backdrop-blur-3xl border-t border-white/5 p-8 rounded-3xl animate-in fade-in duration-500">

            {/* Tabs */}
            <div className="flex gap-8 border-b border-white/5 mb-10 text-sm font-bold tracking-widest text-gray-500">
              {['GENERATION', 'VARIATIONS', 'UPSCALE'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 transition-all ${activeTab === tab ? 'text-white border-b-2 border-[#991B1B]' : 'hover:text-gray-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Inputs */}
              <div className="space-y-8">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-3 uppercase tracking-wider">Visual Prompt</label>
                  <textarea
                    placeholder="Describe what you want to render..."
                    className="w-full bg-[#151515] border border-white/5 rounded-xl p-5 h-32 focus:outline-none focus:border-red-900/50 transition resize-none text-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-3 uppercase tracking-wider">Negative Constraints (Optional)</label>
                  <textarea
                    placeholder="Items or styles you want to exclude..."
                    className="w-full bg-[#151515] border border-white/5 rounded-xl p-5 h-24 focus:outline-none focus:border-red-900/50 transition resize-none text-gray-200"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-gray-500 text-xs font-bold uppercase">Popular:</span>
                  {popularTags.map(tag => (
                    <button key={tag} className="bg-[#1A1A1A] text-gray-400 px-4 py-1.5 rounded-lg text-xs border border-white/5 hover:text-white transition">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Settings */}
              <div className="space-y-8">
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-3 uppercase tracking-wider">Rendering Engine</label>
                  <div className="relative group">
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full bg-[#151515] border border-white/5 rounded-xl p-4 appearance-none focus:outline-none cursor-pointer text-gray-300"
                    >
                      <option>MidJourney v6</option>
                      <option>Stable Diffusion XL</option>
                      <option>DALL-E Professional</option>
                    </select>
                    <LuChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-3 uppercase tracking-wider">Export Resolution</label>
                  <div className="relative group">
                    <select
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="w-full bg-[#151515] border border-white/5 rounded-xl p-4 appearance-none focus:outline-none cursor-pointer text-gray-300"
                    >
                      <option>1024 x 1024</option>
                      <option>1920 x 1080 (HD)</option>
                      <option>3840 x 2160 (4K)</option>
                    </select>
                    <LuChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white" />
                  </div>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-[#991B1B] hover:bg-red-700 py-5 rounded-2xl font-black text-lg tracking-[0.2em] shadow-[0_0_40px_rgba(153,27,27,0.2)] transition-all transform active:scale-95">
                    EXECUTE RENDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* --- STANDARD MODE VIEW --- */
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/5 p-2 rounded-2xl flex items-center shadow-2xl">
              <input
                type="text"
                placeholder="Describe your vision..."
                className="w-full bg-transparent text-gray-200 px-6 py-4 outline-none text-lg font-medium placeholder:text-gray-700"
              />
              <button className="bg-[#991B1B] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold tracking-widest text-sm transition">
                RENDER
              </button>
              <button className="p-4 text-gray-400 bg-[#0A0A0A] ml-2 rounded-xl border border-white/5 hover:text-white">
                <LuSettings2 size={22} />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="text-gray-500 font-semibold mr-2">Quick Tags:</span>
              {popularTags.map(tag => (
                <button key={tag} className="bg-[#1A1A1A] text-gray-400 px-5 py-2 rounded-lg border border-white/5 hover:text-white transition">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Chat Component */}
      <div className="fixed bottom-10 left-10 z-50 flex items-center gap-4">
        <button className="bg-[#65A30D] p-5 rounded-full text-white shadow-lg hover:scale-110 transition">
          <FaCommentDots size={26} />
        </button>
        <div className="bg-[#171717] text-white px-5 py-3 rounded-xl text-sm font-bold border border-white/5 shadow-2xl">
          Support Chat
        </div>
      </div>
    </section>
  );
};

export default Hero;
