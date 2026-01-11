"use client";

import { useState, useEffect } from 'react';
import Extracurriculars from './Extracurriculars';
import Contact from './Contact';

export default function Home() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      color: 'cyan',
      description: 'A modern, responsive portfolio built with Next.js and Tailwind CSS. Features smooth animations and a clean design.',
      tech: ['Next.js', 'React', 'Tailwind'],
      link: 'https://github.com/thatdudePranay/portfolio-website',
      link2: '#'
    },
    {
      id: 2,
      title: 'ALPHA-BL Portfolio Optimizer',
      color: 'purple',
      description: 'A portfolio creation/optimization model, designed to maximize returns against the market. Core tools: Alpha, Beta, Sortino and Sharpe Ratios, and the Black-Litterman Optimization technique.',
      tech: ['Python', 'yfinance', 'Pandas'],
      link: 'https://github.com/aadya-khanna/ALPHA-BL',
      link2: '#'
    },
    {
      id: 3,
      title: 'LoanOracle',
      color: 'pink',
      description: 'A machine learning model designed to predict loan default risk. Trained on 45,000+ data points; 0.52 Gini Score, 0.70 Avg F1 Score, and much more!',
      tech: ['Python', 'XGBoost', 'Streamlit'],
      link: 'https://github.com/neilhaoyuan/credit_risk_loaner',
      link2: 'https://loanoracle.streamlit.app/'
    },
    {
      id: 4,
      title: 'EmotionLensAI',
      color: 'cyan',
      description: 'A Tensorflow powered AI model designed to differentiate/classify 7 different human emotions, with a structured CNN and data augmentation.',
      tech: ['Python', 'Tensorflow', 'Numpy'],
      link: 'https://github.com/thatdudePranay/EmotionLensAI',
      link2:'#'
    },
    {
      id: 5,
      title: 'GunSmashBros',
      color: 'purple',
      description: 'A 2D PVP, Platformer-style shooting game. With multi device gamplay and inspiration drawn from Super Smash Bros.',
      tech: ['Java','OOP', 'Sockets'],
      link: 'https://github.com/tTong32/Gun-Smash-Bros',
      link2:'#'
    },
    {
      id: 6,
      title: 'Potential next project??',
      color: 'pink',
      description: 'Stay tuned for any future progress, updates, or new projects that I may be working on! Loading...',
      tech: ['...', '...', '...'],
      link: '#',
      link2: '#'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500',
        text: 'text-cyan-500',
        bg: 'bg-cyan-500/20',
        hoverBorder: 'hover:border-cyan-300'
      },
      purple: {
        border: 'border-purple-500',
        text: 'text-purple-500',
        bg: 'bg-purple-500/20',
        hoverBorder: 'hover:border-purple-300'
      },
      pink: {
        border: 'border-pink-500',
        text: 'text-pink-500',
        bg: 'bg-pink-500/20',
        hoverBorder: 'hover:border-pink-300'
      }
    };
    return colors[color];
  };

  // Back to Top functionality
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative">
      {/* Global Retro Background Elements - EXTENDS TO END */}
      <div className="fixed inset-0 z-0">
        {/* Retro Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.6) 2px, transparent 2px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.6) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(60deg) translateZ(-200px)',
          transformOrigin: 'center bottom',
          filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))'
        }}></div>
        
        {/* Neon glow spots*/}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/25 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div>
        
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl z-50 border-b-2 border-cyan-500/30">
        <div className="max-w-9xl mx-auto px-2 md:px-16 py-2 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded border-2 border-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-bold text-base md:text-xl">PS</span>
            </div>
            <span className="hidden md:block text-white font-bold tracking-wider text-lg" style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.5)'}}>
              Hi there! Welcome to my personal portfolio!
            </span>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <p className="hidden md:block text-sm text-white/80 font-semibold mr-2">
              Quick Links:
            </p>
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/pranay-subramanian-1a0126305"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 bg-purple-500/20 border-2 border-purple-500 rounded flex items-center justify-center hover:bg-purple-500/40 hover:scale-110 transition-all shadow-lg hover:shadow-purple-500/50"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/thatdudePranay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 bg-cyan-500/20 border-2 border-cyan-500 rounded flex items-center justify-center hover:bg-cyan-500/40 hover:scale-110 transition-all shadow-lg hover:shadow-cyan-500/50"
              title="GitHub"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* Resume Download */}
            <a 
              href="/PranaySubramanian_resume2026.pdf"
              download
              className="w-9 h-9 md:w-10 md:h-10 bg-pink-500/20 border-2 border-pink-500 rounded flex items-center justify-center hover:bg-pink-500/40 hover:scale-110 transition-all shadow-lg hover:shadow-pink-500/50"
              title="Download Resume"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Home screen section */}
      <section id="home" className="min-h-[100vh] min-h-screen flex items-center justify-center px-4 md:px-16 pt-16 md:pt-32 pb-12 md:pb-20 relative md:sticky md:top-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950" style={{zIndex: 10}}>
        
        {/* Floating Retro Elements - ONLY ON HERO SECTION */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Original 3 squares - DIMMER ON MOBILE */}
          <div className="absolute top-32 left-20 w-16 h-16 border-2 md:border-4 border-cyan-500/20 md:border-cyan-500/70 rounded-lg animate-float-1 shadow-md md:shadow-xl shadow-cyan-500/10 md:shadow-cyan-500/50"></div>
          <div className="absolute top-1/3 right-32 w-20 h-20 border-2 md:border-4 border-pink-500/20 md:border-pink-500/70 rounded-lg animate-float-2 shadow-md md:shadow-xl shadow-pink-500/10 md:shadow-pink-500/50"></div>
          <div className="absolute bottom-40 left-1/4 w-14 h-14 border-2 md:border-4 border-purple-500/20 md:border-purple-500/70 rounded-lg animate-float-3 shadow-md md:shadow-xl shadow-purple-500/10 md:shadow-purple-500/50"></div>
          
          {/* Additional circles for more effect - DIMMER ON MOBILE */}
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 md:border-3 border-cyan-400/15 md:border-cyan-400/60 rounded-full animate-float-1 shadow-sm md:shadow-lg shadow-cyan-400/5 md:shadow-cyan-400/40" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-18 h-18 border-2 md:border-3 border-pink-400/15 md:border-pink-400/60 rounded-full animate-float-2 shadow-sm md:shadow-lg shadow-pink-400/5 md:shadow-pink-400/40" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-[1800px] mx-auto w-full text-center md:text-left relative z-10 px-4 md:px-8">
          <div className="mb-6 md:mb-10">
            <h1 className="text-4xl md:text-[80px] font-semibold text-white leading-tight md:leading-[0.9] mb-4 md:mb-8" style={{
              textShadow: '0 0 10px rgba(34, 211, 238, 0.3), 2px 2px 0px rgba(236, 72, 153, 0.2)'
            }}>
              PRANAY
              <br/>
              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SUBRAMANIAN
              </span>
            </h1>
            
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mb-3 md:mb-6">
              <div className="hidden md:block h-px w-8 md:w-16 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <p className="text-xs md:text-xl text-white-300 font-semibold">
                COMPUTER SCIENCE × FINANCE @ UWATERLOO
              </p>
            </div>
            <p className="text-sm md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
              scroll pls, next.js was hard
            </p>
          </div>

          {/* Navigation Grid - Theme 59 Style */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mt-8 md:mt-32">
            {[
              { label: 'About', num: '01', target: 'about' },
              { label: 'Projects', num: '02', target: 'projects' },
              { label: 'Skills', num: '03', target: 'skills' },
              { label: 'Experiences', num: '04', target: 'experiences' },
              { label: 'Contact', num: '05', target: 'contact' }
            ].map((item) => (
              <a
                key={item.num}
                href={`#${item.target}`}
                onClick={(e) => {
                e.preventDefault();
                  document.getElementById(item.target)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className={`group bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-2xl p-4 md:p-6 transition-all hover:-translate-y-1 ${
                  item.num === '05' ? 'col-span-2 justify-self-center w-1/2 md:col-span-1 md:w-auto md:justify-self-auto' : ''
                }`}
              >
                <p className="text-white/50 text-xs md:text-sm mb-1 md:mb-2">{item.num}</p>
                <p className="text-white font-bold text-base md:text-lg">{item.label}</p>
              </a>
            ))}
            </div>
          </div>

        {/* Scroll Indicator - Hide on mobile */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-cyan-500/60">
            <span className="text-xs tracking-wider font-mono">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-cyan-500/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section - BLACK LAYER */}
      <section id="about" className="flex items-center justify-center px-4 md:px-16 py-16 md:py-20 relative md:sticky md:top-0 bg-black min-h-screen" style={{zIndex: 20}}>
        <div className="max-w-6xl w-full">
          <h2 className="text-2xl md:text-6xl font-bold text-white mb-6 md:mb-12 text-center md:text-left" style={{textShadow: '0 0 15px rgba(34, 211, 238, 0.3)'}}>
            ABOUT ME!
          </h2>

          {/* Content container - mobile: columns, desktop: rows */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
            
            {/* Images section - Shows first on mobile, right side on desktop */}
            <div className="w-3/4 sm:w-2/3 md:w-2/5 mx-auto md:mx-0 flex flex-col gap-4 order-1 md:order-2">
              
              {/* Main photo retro border */}
              <div className="relative group">
                {/* Glow border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Image container */}
                <div className="relative bg-black rounded-2xl border-4 border-cyan-500 overflow-hidden shadow-2xl shadow-cyan-500/50 group-hover:border-cyan-300 transition-all duration-300">
                  <img 
                    src="/images/niceheadshot.jpg" 
                    alt="Pranay Subramanian"
                    className="w-full h-auto max-h-[25vh] md:max-h-none object-cover"

                  />
                  {/* Retro scan line effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
            </div>

            {/* Text Section - Shows second on mobile, left side on desktop */}
            <div className="w-full md:w-3/5 order-2 md:order-1">
              <div className="space-y-4 md:space-y-6 text-sm md:text-xl text-white/80 leading-relaxed font-sans">
                <p className="p-4 md:p-6 bg-black/40 border-2 border-cyan-500/30 rounded-lg backdrop-blur-sm">
                  Hi there! I'm Pranay Subramanian, a passionate CFM student at the University of Waterloo. 
                  I'm currently a First Year, in my 1B term, and have been greatly invested in growing my skillset, knowledge base, and experience
                  in the ever vital fields of SWE, Finance, and Data Science. One of my current fascinations and areas of work has been exploring ML development, and application of ML to create strong, real world financial models!
                </p>
                <p className="p-4 md:p-6 bg-black/40 border-2 border-pink-500/30 rounded-lg backdrop-blur-sm">
                  When I'm not analyzing markets, deep into a VS Code window for a project like this, or late night grinding for my next assessment,
                  you can find me playing basketball, watching F1, out in nature hiking, or spending time with friends and family!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* Projects Section - PURPLE RETRO BACKGROUND VISIBLE*/}
      <section id="projects" className="relative py-12 md:py-0 md:sticky md:top-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 md:min-h-screen md:flex md:flex-col" style={{zIndex: 30}} >
        {/* Header */}
        <div className="md:pt-16 px-4 md:flex-shrink-0">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-center" style={{textShadow: '0 0 15px rgba(34, 211, 238, 0.3)'}}>
            PROJECTS
          </h2>
        </div>

        {/* accordian on movile sticky on desktop */}
        <div className="px-4 pb-12 md:pb-20 md:flex-1">
          <div className="w-full mx-auto" style={{maxWidth: '1200px'}}>
            
            {/* MOBILE: Accordion View */}
            <div className="md:hidden space-y-4">
              {projects.map((project) => {
                const colors = getColorClasses(project.color);
                const isExpanded = expandedProject === project.id;
                return (
                  <div key={project.id} className={`border-3 ${colors.border} rounded-lg overflow-hidden transition-all duration-300`}>
                    <button
                      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                      className={`w-full px-4 py-4 bg-black/40 hover:opacity-80 transition-all duration-300 flex items-center justify-between border-b-2 ${colors.border}`}
                    >
                      <h3 className={`${colors.text} font-bold text-left`}>{project.title}</h3>
                      <span className={`${colors.text} text-xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="bg-black/60 border-t-3 border-inherit p-4 space-y-3">
                        {project.description.split('. ').filter(Boolean).map((sentence, idx) => (
                          <p key={idx} className="text-white/80 text-sm leading-relaxed">
                            {sentence}{idx < project.description.split('. ').filter(Boolean).length - 1 ? '.' : ''}
                          </p>
                        ))}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className={`px-3 py-1 ${colors.bg} border ${colors.border} ${colors.text} rounded text-xs font-mono`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-block ${colors.text} hover:opacity-70 transition-opacity font-bold`}
                          >
                            [VIEW_PROJECT] →
                          </a>
                        )}
                        <div></div>
                        {project.link2 !== '#' && (
                          <a
                          href={project.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block ${colors.text} hover:opacity-70 transition-opacity font-bold`}
                        >
                          [OPEN_APP] →
                        </a>
                        )
                        }
                        {project.link === '#' && (
                          <span className={`inline-block ${colors.text} opacity-50 font-bold cursor-not-allowed`}>
                            [COMING_SOON] →
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* DESKTOP: Grid View */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-6 mb-12 md:mb-20 justify-center">
            
            {/* Project Card 1 */}
            <div className="bg-black/60 border-3 border-cyan-500 rounded-lg max-w-[360px] w-full mx-auto p-4 md:p-4 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-cyan-500 mb-2 md:mb-3">Portfolio Website</h3>
              <p className="text-white/80 text-sm md:text-sm mb-2 md:mb-3">
                A modern, responsive portfolio built with Next.js and Tailwind CSS. 
                Features smooth animations and a clean design.
              </p>
              <div className="mt-3 md:mt-4">
                <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Next.js</span>
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">React</span>
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Tailwind</span>
                </div>
                <a 
                  href="https://github.com/thatdudePranay/portfolio-website" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-300 transition-colors font-bold"
                >
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-black/60 border-3 border-purple-500 rounded-lg max-w-[360px] w-full mx-auto p-4 md:p-4 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-purple-500 mb-2 md:mb-3">ALPHA-BL Portfolio Optimizer</h3>
              <p className="text-white/80 text-sm md:text-sm mb-2">
                A portfolio creation/optimization model, designed to maximize returns against the market.
              </p>
              <p className="text-white/80 text-sm md:text-sm mb-2 md:mb-3">
                Core tools: Alpha, Beta, Sortino and Sharpe Ratios, and the Black-Litterman Optimization technique.
              </p>
              <div className="mt-2 md:mt-3">
                <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">Python</span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">yfinance</span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">Pandas</span>
                </div>
                <a 
                  href="https://github.com/aadya-khanna/ALPHA-BL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-300 transition-colors font-bold"
                >
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-black/60 border-3 border-pink-500 rounded-lg max-w-[360px] w-full mx-auto p-4 md:p-4 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-pink-500 mb-2 md:mb-3">LoanOracle</h3>
              <p className="text-white/80 text-sm md:text-sm mb-2">
                A machine learning model designed to predict loan default risk
                based on a borrower's financial data/profile. 
              </p>
              <p className="text-white/80 text-sm md:text-sm mb-2 md:mb-3">
                Trained on 45,000+ data points; 0.52 Gini Score, 0.70 Avg F1 Score, and much more!
              </p>
              <div className="mt-2 md:mt-3">
                <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">Python</span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">XGBoost</span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">Streamlit</span>
                </div>
                <a 
                href="https://loanoracle.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className = "text-pink-500 hover:text-pink-300 transition-colors font-bold"
                >
                  [OPEN_APP] -
                </a>
                <a 
                  href="https://github.com/neilhaoyuan/credit_risk_loaner" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-300 transition-colors font-bold"
                >
                   - [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-black/60 border-3 border-cyan-500 rounded-lg max-w-[360px] w-full mx-auto p-4 md:p-4 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-cyan-500 mb-2 md:mb-3">EmotionLensAI</h3>
              <p className="text-white/80 text-sm md:text-sm mb-2">
                A Tensorflow powered AI model designed to differentiate/classify 7 different human emotions, with a structured CNN and data augmentation.
              </p>

              <div className="mt-2 md:mt-3">
                <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Python</span>
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Tensorflow</span>
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Numpy</span>
                </div>
                <a 
                  href="https://github.com/thatdudePranay/EmotionLensAI" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-300 transition-colors font-bold"
                >
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="bg-black/60 border-3 border-purple-500 rounded-lg max-w-[360px] w-full mx-auto p-4 md:p-4 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-purple-500 mb-2 md:mb-3">GunSmashBros</h3>
              <p className="text-white/80 text-sm md:text-sm mb-2">
                A 2D PVP, Platformer-style shooting game. With multi device gamplay and inspiration drawn from Super Smash Bros.
              </p>
              <div className="mt-2 md:mt-3">
                <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">Java</span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">OOP</span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">Sockets</span>
                </div>
                <a 
                  href="https://github.com/tTong32/Gun-Smash-Bros" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-300 transition-colors font-bold"
                >
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="bg-black/60 border-3 border-pink-500 rounded-lg max-w-[360px] w-full mx-auto p-4 md:p-4 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-pink-500 mb-2 md:mb-3">Potential next project??</h3>
              <p className="text-white/80 text-sm md:text-sm mb-2 md:mb-3">
                Stay tuned for any future progress, updates, or new projects that I may be working on!
              </p>
              <p className="text-white/80 text-sm md:text-base mb-2 md:mb-3">
                Loading...
              </p>
              <div className="mt-3 md:mt-4">
                <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">...</span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">...</span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">...</span>
                </div>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="text-pink-500 hover:text-pink-300 transition-colors font-bold cursor-not-allowed opacity-50"
                >
                  [COMING_SOON] →
                </a>
              </div>
            </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - BLACK LAYER */}
      <section id="skills" className="flex items-center justify-center px-4 md:px-16 py-16 md:py-20 relative md:sticky md:top-0 bg-black min-h-screen" style={{zIndex: 40}}>
        <div className="max-w-6xl w-full">
          <h2 className="text-2xl md:text-6xl font-bold text-white mb-8 md:mb-12 text-center" style={{textShadow: '0 0 15px rgba(34, 211, 238, 0.3)'}}>
            TECHNICAL SKILLS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Programming Languages */}
            <div className="bg-black border-4 border-cyan-500 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-cyan-500 mb-2">PROGRAMMING LANGUAGES</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">PYTHON</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">JAVA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">RACKET</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">C (LEARNING)</span>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-black border-4 border-purple-500 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-purple-500 mb-2">CORE FRAMEWORKS & TOOLS</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-white">XGBOOST</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-white">YFINANCE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-white">TENSORFLOW</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-white">REACT / NEXT.JS</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-white">PANDAS / NUMPY</span>
                </div>
              </div>
            </div>

            {/* Technical Focus Areas */}
            <div className="bg-black border-4 border-pink-500 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-pink-500 mb-2">TECHNICAL FOCUS</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white">MACHINE LEARNING</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white">FINANCIAL MODELING</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white">DATA SCIENCE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white">FULL STACK DEV</span>
                </div>
              </div>
            </div>

            {/* Non-Technical Skills */}
            <div className="bg-black border-4 border-cyan-500 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-cyan-500 mb-2">PROFESSIONAL SKILLS</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">LEADERSHIP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">TEAM MANAGEMENT</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">PUBLIC SPEAKING</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">LOGISTICAL PLANNING</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section>
        <Extracurriculars />  
      </section>

      {/* Contact Section */}
      <section>
        <Contact />
      </section>

      {/* CSS Animations */}
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[100] bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 border-2 border-white ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(45deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-45deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(30deg); }
        }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 8s ease-in-out infinite; }
        
        /* Smooth scrolling for stacking effect */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  )
}