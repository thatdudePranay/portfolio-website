"use client";

import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "sspranay20@gmail.com"; 

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20 relative md:sticky top-0 bg-black" style={{zIndex: 60}}>
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 font-mono" style={{textShadow: '0 0 15px rgba(34, 211, 238, 0.5)'}}>
            LET'S_CONNECT
          </h2>
          <p className="text-base md:text-xl text-white/80">
            I'm always open to new opportunities, collaborations, and conversations. 
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Email Card - Copy to Clipboard */}
          <button 
            onClick={copyEmail}
            className="bg-black/80 rounded-xl p-4 md:p-6 border-3 md:border-4 border-cyan-500 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group text-left relative"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-white">
                {copied ? (
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-500 mb-1 font-mono">EMAIL</h3>
                <p className="text-white font-mono">{email}</p>
              </div>
            </div>
            {copied && (
              <div className="absolute top-2 right-2 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-bold border-2 border-white">
                COPIED!
              </div>
            )}
          </button>

          {/* LinkedIn Card */}
          <a 
            href="https://linkedin.com/in/pranay-subramanian-1a0126305"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/80 rounded-xl p-4 md:p-6 border-3 md:border-4 border-purple-500 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-white">
                <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-purple-500 mb-1 font-mono">LINKEDIN</h3>
                <p className="text-white font-mono">CONNECT_WITH_ME</p>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/thatdudePranay"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/80 rounded-xl p-4 md:p-6 border-3 md:border-4 border-pink-500 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-white">
                <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-pink-500 mb-1 font-mono">GITHUB</h3>
                <p className="text-white font-mono">CHECK_MY_CODE</p>
              </div>
            </div>
          </a>

          {/* Resume Download Card */}
          <a 
            href="/PranaySubramanian1_Resume.pdf"
            download
            className="bg-black/80 rounded-xl p-4 md:p-6 border-3 md:border-4 border-cyan-500 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-white">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-cyan-500 mb-1 font-mono">RESUME</h3>
                <p className="text-white font-mono">DOWNLOAD_PDF</p>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}