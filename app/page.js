export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Pranay Subramanian
          </h1>
          <p className="text-2xl text-purple-300 mb-8">
            Computer Science and Finance Double Major Student @ University of Waterloo
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Building innovative solutions at the intersection of technology and finance.
          </p>
        </div>
      </section>
      {/* About Section*/}
      <section className="min-h-screen flex items-center justify-center px-4 bg-slate-800">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Hi there! I'm Pranay Subramanian, a passionate CFM student at the University of Waterloo. 
              I'm currently a First Year, in my 1B term, and have been greatly invested in growing my skillset, knowledge base, and experience
              in the ever vital fields of SWE, Finance, and Data Science. One of my current fascinations and areas of work has been exploring ML development, and application of ML to create strong, real world financial models!
              </p>
            <p>
              When I'm not analyzing markets, deep into a VS Code window for a project like this, or late night grinding for my next assessment,
              you can find me playing basketball, watching F1, out in nature hiking, or  spending time with friends and family!
              </p>
          </div>
        </div>
      </section>
       {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-white mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project Card 1 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">Portfolio Website</h3>
              <p className="text-gray-300 mb-4">
                A modern, responsive portfolio built with Next.js and Tailwind CSS. 
                Features smooth animations and a clean design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Tailwind</span>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                View Project →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">ALPHA-BL Porfolio Optimizer</h3>
              <p className="text-gray-300 mb-4">
                A portfolio creation and optimization model, designed to maximize returns against a benchmark average of the S&P 500 and TSX.
                </p>
                <p className="text-gray-300 mb-4">
                Powered by core financial metrics such as Alpha, Beta, Sortino and Sharpe Ratios, along with the Black-Litterman Optimization technique.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">yfinance</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Pandas</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">numpy</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">matplotlib</span>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                View Project →
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">LoanOracle</h3>
              <p className="text-gray-300 mb-4">
                An XGBoost powered machine learning model designed to predict loan default risk
                based on a borrower's financial data/profile. Helps lenders/borrowers make informed decisions.
                </p>
              <p className="text-gray-300 mb-4">
                Trained on a dataset with 45,000+ data points, achieving a 0.52 Gini Score, 0.70 Avg F1 Score, and much more!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">XGBoost</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Streamlit</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Scipy</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">sklearn</span>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                View Project →
              </a>
            </div>

            {/* Project Card 4 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">EmotionLensAI</h3>
              <p className="text-gray-300 mb-4">
                A Tensorflow powered AI model designed to differentiate/classify 7 different human emotions.
                trained on the FER-2013 dataset with over 35,000+ labeled images.
              </p>
              <p className="text-gray-300 mb-4">
                Achieved a 93% accuracy on test sets, with a structured CNN, and data augmentation techniques.
              </p> 
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Tensorflow</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">matplotlib</span>
              </div>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                View Project →
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}