"use client";

import { useState, useEffect, useRef } from 'react';

export default function Extracurriculars() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const extracurriculars = [
    {
      title: "Financial Analysis and Risk Management Association (FARMA) - Waterloo",
      role: "Quantitative Analyst",
      dates: "January 2026 - Present",
      color: "cyan",
      image: "/images/farmsa_logo.jpeg",
      icon: "F",  
      accomplishments: [
        "Analyzed precious metals spreads against consumer inflation expectations using Python (yfinance, FRED API) to identify trading signals with 11.8% copper outperformance",
        "Will be developing strong market analytical, financial and risk management models within the tenure of the role",
        "Progress ongoing..."
      ]
    },
    {
      title: "Computer Science Club - University of Waterloo",
      role: "External Affairs Coordinator",
      dates: "January 2026 - Present",
      color: "purple",
      image: "/images/csc-club.jpeg",
      icon: "B",
      accomplishments: [
        "Led outreach initiatives to foster partnerships which are aimed at enhancing club resources and opportunities for members",
        "Maintained and expanded relationships with top companies such as Google, Atlassian, Tesla, QNX, and more",
        "Progress ongoing..."
      ]
    },
    {
      title: "Student Admistrative Council - St.Augustine Catholic High School",
      role: "President",
      dates: "September 2024 - June 2025",
      color: "pink",
      image: "/images/sta-logo.jpeg",
      icon: "C",
      accomplishments: [
        "Led a 30+ member team and directed logistics for 20+ school-wide events including Games Nights, School Carnivals and more",
        "Ensure careful team management, task delegation, and effective communication to maximize productivity and event success",
        "Oversaw the financial organization of over $35,000 in revenue for an annual Semi-Formal Event",
        "Introduced a data-driven feedback collection initiative which revamped student interest",
        "Managed internal and external communications, liaising with school administration, local community partners, and other clubs, councils, and committeees within the school",
        "Carried out 5+ major speeches to audiences of 200+ students and faculty",
        "2021-2022; Grade 9 Representative, 2022-2023; Treasurer, 2023-2024; Grade 11 Representative"
      ]
    },
    {
      title: "Buisness Leadership Classes/Council - St.Augustine Catholic High School",
      role: "Sponsorship Commitee Manager",
      dates: "January 2025 - June 2025",
      color: "cyan",
      image: "/images/sta-logo.jpeg",
      icon: "C",
      accomplishments: [
        "Led a Sponsorship Committee, and worked with the complete team, to raise $45,000 for the SickKids Foundation for a major business casual style dinner event, for over 300 attendees",
        "Secured sponsorships from top firms like Qualcomm, Starbucks, and TD Bank through strategic outreach",
        "Organized a Silent Auction with high-value prizes, including signed sports memorabilia, TVs, luxury goods and more. All which contributed $10,000+ to the total"
      ]
    },
    {
      title: "Robotics Camp - City of Markham",
      role: "Robotics Camp Counselor",
      dates: "July 2024 - August 2024",
      color: "purple",
      image: "/images/city-of-markham.jpeg",
      icon: "C",
      accomplishments: [
        "Mentored over 300 kids aged 6-13 through robotics and programming challenges, teaching them languages such as Scratch and Python",
        "Ideated and developed a successful new Amazing Race themed design thinking robotics project for the camp",
        "Ensured a safe, inclusive, and engaging learning environment for all campers, while adhering to saftety protocols and guidelines"
      ]
    },
  ];

  // Detect which item is in focus based on scroll - KEEPING THIS FUNCTIONALITY
  useEffect(() => {
    const handleScroll = () => {
      const containerCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - containerCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setFocusedIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colorMap = {
    cyan: { 
      bg: "bg-cyan-400", 
      border: "border-cyan-400", 
      text: "text-cyan-300", 
      shadow: "shadow-cyan-400/50",
      glow: "shadow-cyan-400/30"
    },
    purple: { 
      bg: "bg-purple-400", 
      border: "border-purple-400", 
      text: "text-purple-300", 
      shadow: "shadow-purple-400/50",
      glow: "shadow-purple-400/30"
    },
    pink: { 
      bg: "bg-pink-400", 
      border: "border-pink-400", 
      text: "text-pink-300", 
      shadow: "shadow-pink-400/50",
      glow: "shadow-pink-400/30"
    }
  };

  const scrollToItem = (index) => {
    itemRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  };

  return (
    <section className="min-h-screen bg-slate-950 relative z-10">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/60 backdrop-blur-lg border-b-2 border-cyan-400/30 py-6">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-black text-white text-center mb-4 font-mono" style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.5)'}}>
            EXTRACURRICULARS_&_LEADERSHIP
          </h2>
          
          {/* Blurb */}
          <p className="text-center text-white/80 text-lg max-w-4xl mx-auto mb-6 leading-relaxed">
            Feel free to scroll through a timeline of my efforts, from executing top financial projects as a quant analyst, 
            to coordinating external affairs with companies like <span className="text-cyan-400 font-black">GOOGLE</span> and <span className="text-cyan-400 font-black">TESLA</span>, 
            and even raising <span className="text-cyan-400 font-black">$45,000</span> for the SickKids Foundation. 
            See how I did it all! 
          </p>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3">
            {extracurriculars.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToItem(index)}
                className={`transition-all duration-300 rounded-full border-2 ${
                  focusedIndex === index 
                    ? `${colorMap[item.color].bg} border-${item.color}-300 w-12 h-3 shadow-lg ${colorMap[item.color].glow}` 
                    : 'bg-gray-600 border-gray-700 w-3 h-3 hover:bg-gray-500'
                }`}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div ref={containerRef} className="relative py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 via-pink-400 to-cyan-400 opacity-30 rounded-full"></div>

            <div className="space-y-[5vh]">
              {extracurriculars.map((item, index) => {
                const isFocused = focusedIndex === index;
                const isOpen = openIndex === index;
                const colors = colorMap[item.color];
                
                return (
                  <div
                    key={index}
                    ref={el => itemRefs.current[index] = el}
                    className="relative flex items-center min-h-[35vh] pl-32"
                  >
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute left-8 w-10 h-10 ${colors.bg} rounded-full border-4 border-black transition-all duration-500 z-10 flex items-center justify-center ${
                        isFocused ? `scale-150 ${colors.shadow} shadow-2xl` : 'scale-100 opacity-50'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full ${isFocused ? 'animate-pulse' : ''}`}></div>
                    </div>

                    {/* Connecting Line */}
                    <div 
                      className={`absolute left-[52px] w-16 h-0.5 ${colors.bg} transition-all duration-500 ${
                        isFocused ? 'opacity-100' : 'opacity-20'
                      }`}
                    ></div>

                    {/* Card */}
                    <div
                      className={`w-full transition-all duration-700 ${
                        isFocused 
                          ? `opacity-100 scale-100 blur-0` 
                          : 'opacity-30 scale-95 blur-sm'
                      }`}
                    >
                      <div
                        className={`bg-black/80 rounded-2xl border-4 transition-all duration-500 font-mono ${
                          isFocused
                            ? `${colors.border} shadow-2xl ${colors.glow}` 
                            : 'border-slate-700'
                        }`}
                      >
                        <div className="p-8">
                          <div className="flex items-center gap-6 mb-6">
                            <div className={`w-20 h-20 ${colors.bg} rounded-xl flex items-center justify-center shadow-xl transition-all duration-500 overflow-hidden border-2 border-white ${
                                isFocused ? 'scale-110' : ''
                              }`}>
                              {item.image ? (
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-3xl font-black text-black">{item.icon}</span>
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-3xl font-black text-white mb-2">{item.title}</h3>
                              <p className={`${colors.text} text-2xl font-bold`}>{item.role}</p>
                              <p className="text-gray-400 text-base mt-1">{item.dates}</p>
                            </div>
                          </div>

                          {isFocused && (
                            <button
                              onClick={() => setOpenIndex(isOpen ? null : index)}
                              className={`w-full mt-4 px-6 py-3 rounded-xl ${colors.bg} text-black font-black hover:opacity-90 transition-all flex items-center justify-center gap-2 border-2 border-white`}
                            >
                              <span>{isOpen ? '[HIDE_DETAILS]' : '[VIEW_ACCOMPLISHMENTS]'}</span>
                              <svg
                                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen && isFocused ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-8 pb-8 border-t-2 border-slate-700 pt-6">
                            <div className="space-y-4">
                              {item.accomplishments.map((accomplishment, i) => (
                                <div 
                                  key={i} 
                                  className="flex items-start gap-4 group/item"
                                >
                                  <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 group-hover/item:scale-150 transition-transform`}></div>
                                  <p className="text-gray-300 text-lg group-hover/item:text-white group-hover/item:translate-x-1 transition-all">
                                    {accomplishment}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40vh]"></div>
    </section>
  );
}