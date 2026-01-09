"use client";

import Extracurriculars from './Extracurriculars';
import Contact from './Contact';

export default function Home() {
  return (
    <main className="relative">
      {/* Global Retro Background Elements - EXTENDS TO END */}
      <div className="fixed inset-0 z-0">
        {/* Retro Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(60deg) translateZ(-200px)',
          transformOrigin: 'center bottom'
        }}></div>
        
        {/* Neon glow spots */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Dark Tint Overlay - VERY LIGHT so purple shows more */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #0ff 0px, transparent 2px, transparent 4px)',
            animation: 'scan 8s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Floating Retro Elements */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-32 left-20 w-16 h-16 border-2 border-cyan-500/30 rounded-lg animate-float-1"></div>
        <div className="absolute top-1/3 right-32 w-20 h-20 border-2 border-pink-500/30 rounded-lg animate-float-2"></div>
        <div className="absolute bottom-40 left-1/4 w-14 h-14 border-2 border-purple-500/30 rounded-lg animate-float-3"></div>
      </div>

      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl z-50 border-b-2 border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-3 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded border-2 border-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-bold text-base md:text-xl">PS</span>
            </div>
            <span className="text-white font-bold tracking-wider text-xs md:text-lg" style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.5)'}}>
              PRANAY SUBRAMANIAN
            </span>
          </div>
          <button className="px-4 py-2 md:px-8 md:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded hover:scale-105 transition shadow-lg shadow-cyan-500/30 text-xs md:text-base">
            CONNECT
          </button>
        </div>
      </nav>

      {/* Hero Section - PURPLE RETRO BACKGROUND VISIBLE */}
      <section className="min-h-screen flex items-center px-4 md:px-16 pt-20 md:pt-32 pb-16 md:pb-20 relative md:sticky top-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950" style={{zIndex: 10}}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8 md:mb-10">
            <h1 className="text-5xl md:text-[80px] font-semibold text-white leading-[0.9] mb-6 md:mb-8" style={{
              textShadow: '0 0 10px rgba(34, 211, 238, 0.3), 2px 2px 0px rgba(236, 72, 153, 0.2)'
            }}>
              PRANAY
              <br/>
              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SUBRAMANIAN
              </span>
            </h1>
            
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="h-px w-10 md:w-16 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <p className="text-sm md:text-xl text-white-300 font-semibold">
                COMPUTER SCIENCE × FINANCE @ UWATERLOO
              </p>
            </div>
            <p className="text-base md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              scroll pls, next.js was hard
            </p>
          </div>

          {/* Navigation Grid - Theme 59 Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12 md:mt-32">
            {[
              { label: 'About', num: '01' },
              { label: 'Projects', num: '02' },
              { label: 'Experience', num: '03' },
              { label: 'Contact', num: '04' }
            ].map((item) => (
              <button 
                key={item.num}
                className="group bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <p className="text-white/50 text-sm mb-2">{item.num}</p>
                <p className="text-white font-bold text-lg">{item.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-cyan-500/60">
            <span className="text-xs tracking-wider font-mono">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-cyan-500/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section - BLACK LAYER */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-16 py-16 md:py-20 relative md:sticky top-0 bg-black" style={{zIndex: 20}}>
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8" style={{textShadow: '0 0 15px rgba(34, 211, 238, 0.3)'}}>
            ABOUT_ME
          </h2>
          <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-white/80 leading-relaxed">
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
      </section>

{/* Projects Section - PURPLE RETRO BACKGROUND VISIBLE */}
      <section className="flex items-start justify-center px-4 pt-24 md:pt-32 pb-16 md:pb-20 md:sticky top-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950" style={{zIndex: 30, minHeight: '150vh'}}>
        <div className="w-full" style={{maxWidth: '1600px'}}>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 md:mb-12 text-center" style={{textShadow: '0 0 15px rgba(34, 211, 238, 0.3)'}}>
            PROJECTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-10">
            
            {/* Project Card 1 */}
            <div className="bg-black/60 border-3 border-cyan-500 rounded-lg p-5 md:p-8 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-cyan-500 mb-3">Portfolio Website</h3>
              <p className="text-white/80 text-sm md:text-base mb-3">
                A modern, responsive portfolio built with Next.js and Tailwind CSS. 
                Features smooth animations and a clean design.
              </p>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Next.js</span>
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">React</span>
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Tailwind</span>
                </div>
                <a href="#" className="text-cyan-500 hover:text-cyan-300 transition-colors font-bold">
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-black/60 border-3 border-purple-500 rounded-lg p-5 md:p-8 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-purple-500 mb-3">ALPHA-BL Portfolio Optimizer</h3>
              <p className="text-white/80 mb-2">
                A portfolio creation and optimization model, designed to maximize returns against a benchmark average of the S&P 500 and TSX.
              </p>
              <p className="text-white/80 text-sm md:text-base mb-3">
                Powered by the financial metrics, Alpha, Beta, Sortino and Sharpe Ratios, and the Black-Litterman Optimization technique.
              </p>
              <div className="mt-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">Python</span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">yfinance</span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">Pandas</span>
                </div>
                <a href="#" className="text-purple-500 hover:text-purple-300 transition-colors font-bold">
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-black/60 border-3 border-pink-500 rounded-lg p-5 md:p-8 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-pink-500 mb-3">LoanOracle</h3>
              <p className="text-white/80 mb-2">
                An XGBoost powered machine learning model designed to predict loan default risk
                based on a borrower's financial data/profile. 
              </p>
              <p className="text-white/80 text-sm md:text-base mb-3">
                Trained on a dataset with 45,000+ data points, achieving a 0.52 Gini Score, 0.70 Avg F1 Score, and much more!
              </p>
              <div className="mt-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">Python</span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">XGBoost</span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">Streamlit</span>
                </div>
                <a href="#" className="text-pink-500 hover:text-pink-300 transition-colors font-bold">
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-black/60 border-3 border-cyan-500 rounded-lg p-5 md:p-8 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-cyan-500 mb-3">EmotionLensAI</h3>
              <p className="text-white/80 mb-2">
                A Tensorflow powered AI model designed to differentiate/classify 7 different human emotions.
                trained on the FER-2013 dataset with over 35,000+ labeled images.
              </p>
              <p className="text-white/80 text-sm md:text-base mb-3">
                Achieved a 93% accuracy on test sets, with a structured CNN, and data augmentation techniques.
              </p> 
              <div className="mt-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Python</span>
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">Tensorflow</span>
                  <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded text-sm font-mono">matplotlib</span>
                </div>
                <a href="#" className="text-cyan-500 hover:text-cyan-300 transition-colors font-bold">
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="bg-black/60 border-3 border-purple-500 rounded-lg p-5 md:p-8 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-purple-500 mb-3">GunSmashBros</h3>
              <p className="text-white/80 mb-2">
                A 2D PVP, Platformer-style shooting game. With inspiration drawn from the games Super Smash Bros and Gun Mayhem, real physics, map designs, gun types and more!
              </p>
              <p className="text-white/80 text-sm md:text-base mb-3">
                Driven by Java Socket connections for real-time, multi device gameplay capabilities.
              </p>
              <div className="mt-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">Java</span>
                  <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded text-sm font-mono">Sockets</span>
                </div>
                <a href="#" className="text-purple-500 hover:text-purple-300 transition-colors font-bold">
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

            {/* Project Card 6 */}
            <div className="bg-black/60 border-3 border-pink-500 rounded-lg p-5 md:p-8 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-pink-500 mb-3">Potential next project??</h3>
              <p className="text-white/80 text-sm md:text-base mb-3">
                Stay tuned for any future progress, updates, or new projects that I may be working on!
              </p>
              <p className="text-white/80 text-sm md:text-base mb-3">
                Loading...
              </p>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">...</span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">...</span>
                  <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-300 rounded text-sm font-mono">...</span>
                </div>
                <a href="#" className="text-pink-500 hover:text-pink-300 transition-colors font-bold">
                  [VIEW_PROJECT] →
                </a>
              </div>
            </div>

          </div>
          </div>
      </section>

      {/* Skills Section - BLACK LAYER */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-16 py-16 md:py-20 relative md:sticky top-0 bg-black" style={{zIndex: 40}}>
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-12 text-center" style={{textShadow: '0 0 15px rgba(34, 211, 238, 0.3)'}}>
            TECHNICAL_SKILLS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Programming Languages */}
            <div className="bg-black border-4 border-cyan-500 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-cyan-500 mb-2">PROGRAMMING_LANGUAGES</h3>
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
              <h3 className="text-lg font-bold text-purple-500 mb-2">FRAMEWORKS_&_TOOLS</h3>
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
              <h3 className="text-lg font-bold text-pink-500 mb-2">TECHNICAL_FOCUS</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white">MACHINE_LEARNING</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white">FINANCIAL_MODELING</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white">DATA_SCIENCE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-white">FULL-STACK_DEV</span>
                </div>
              </div>
            </div>

            {/* Non-Technical Skills */}
            <div className="bg-black border-4 border-cyan-500 rounded-lg p-4 font-mono">
              <h3 className="text-lg font-bold text-cyan-500 mb-2">PROFESSIONAL_SKILLS</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">LEADERSHIP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">TEAM_MANAGEMENT</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">PUBLIC_SPEAKING</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-white">EVENT_COORDINATION</span>
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
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
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