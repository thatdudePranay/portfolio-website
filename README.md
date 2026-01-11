# 🎮 Pranay Subramanian – Portfolio Website

A modern, interactive portfolio website showcasing my projects, experience, and skills as a CFM student at the University of Waterloo. Built with a retro-fusion aesthetic featuring smooth animations, responsive design, and an engaging user experience.

The portfolio is designed to provide recruiters, collaborators, and visitors with a comprehensive view of my technical abilities, leadership experience, and professional journey—all wrapped in a visually distinctive interface.

---

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1-black?logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Live-pranaysubra.com-blueviolet" />
</p>

---

## What the project does

### 1. Showcases technical projects

The **Projects** section features an interactive display of my key software development, machine learning, and finance projects including:

* **ALPHA-BL Portfolio Optimizer** – Mean-variance optimization with Black-Litterman modeling
* **LoanOracle** – XGBoost-powered credit risk assessment platform
* **EmotionLensAI** – CNN-based emotion classification model (93% accuracy)
* **GunSmashBros** – Real-time multiplayer Java game with socket networking
* **This Portfolio** – Showcasing Next.js and modern web development skills

Each project includes:
* Clear descriptions split into digestible paragraphs
* Technology stack badges
* Direct links to GitHub repositories
* Mobile-friendly accordion view for easy navigation

---

### 2. Highlights leadership experience

The **Extracurriculars & Leadership** section presents a vertical timeline of significant roles and accomplishments:

* **Quantitative Analyst** at FARMSA (Financial Analysis and Risk Management Student Association)
* **External Affairs Coordinator** at UWaterloo Computer Science Club
* **Student Council President** with $35,000+ event revenue management
* **Sponsorship Committee Manager** raising $43,000 for SickKids Foundation
* **Robotics Camp Counselor** mentoring 300+ students

The timeline features:
* Interactive scroll-based animations
* Click-to-expand accomplishment details
* Focus-based highlighting with smooth transitions
* Navigation dots for quick jumping between experiences

---

### 3. Displays technical skills

The **Technical Skills** section organizes competencies into clear categories:

**Languages**
* Python, Java, JavaScript, C/C++, Racket, SQL, R, Bash

**Frameworks & Libraries**
* React, Next.js, Node.js, Express, NumPy, Pandas, TensorFlow, XGBoost, scikit-learn

**Tools & Platforms**
* Git, Docker, AWS, Linux, Vercel, VS Code, Jupyter

**Finance & Quantitative**
* Bloomberg Terminal, Financial Modeling, Risk Management, Portfolio Optimization

The layout adapts seamlessly between desktop and mobile views with consistent styling.

---

### 4. Provides professional contact channels

The **Contact** section offers multiple ways to connect:

* **Email** – One-click copy-to-clipboard functionality
* **LinkedIn** – Direct link to professional profile
* **GitHub** – Access to all public repositories
* **Resume Download** – PDF download of latest resume

Each contact card features:
* Hover animations and visual feedback
* Retro-themed neon borders matching the site aesthetic
* Mobile-optimized layout for easy tapping

---

### 5. Delivers a distinctive visual experience

The portfolio stands out with a carefully crafted **retro-fusion design system**:

* **Layered scrolling animation** (desktop) – Sections stack on top of each other as you scroll
* **Gradient backgrounds** – Purple, slate, and black gradients for depth
* **Neon accents** – Cyan, purple, and pink borders with glow effects
* **Smooth transitions** – Thoughtful animations throughout
* **Responsive design** – Optimized for phone, tablet, and desktop viewing
* **Custom favicon** – Professional "PS" branded icon

---

## Technology stack

**Framework**

* Next.js 16.1 (React 18)
* App Router architecture

**Styling**

* Tailwind CSS 3.4
* Custom utility classes
* Responsive breakpoints
* CSS-in-JS for dynamic styles

**JavaScript**

* ES6+ syntax
* React Hooks (useState, useEffect, useRef)
* Client-side interactivity
* Scroll-based animations

**Deployment**

* Vercel (continuous deployment)
* Custom domain integration
* Automatic SSL certificates
* Edge network CDN

**SEO & Metadata**

* Open Graph tags for social sharing
* Twitter Card optimization
* Google Search Console integration
* Semantic HTML structure

---

## Project structure

```
portfolio-website/
│
├── app/
│   ├── page.js                    # Main homepage component
│   ├── Contact.js                 # Contact section with copy-to-clipboard
│   ├── Extracurriculars.js        # Timeline with scroll animations
│   ├── layout.js                  # Root layout with metadata
│   └── globals.css                # Global styles and Tailwind imports
│
├── public/
│   ├── favicon.ico                # Custom PS favicon
│   ├── resume.pdf                 # Downloadable resume
│   └── images/
│       ├── niceheadshot.jpg       # Profile photo
│       ├── farmsa_logo.jpeg       # Organization logos
│       ├── csc-club.jpeg
│       ├── sta-logo.jpeg
│       └── city-of-markham.jpeg
│
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # Tailwind configuration
├── next.config.js                  # Next.js configuration
├── .gitignore                      # Git ignore rules
└── README.md                       # Project documentation
```

---

## How to run the project

### Prerequisites

* Node.js 18+ installed
* npm or yarn package manager

### Local development

1. **Clone the repository**

```bash
git clone https://github.com/thatdudePranay/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

Navigate to `http://localhost:3000`

The page will auto-reload when you make changes.

---

### Build for production

```bash
npm run build
npm start
```

This creates an optimized production build in the `.next` folder.

---

## Deployment

The portfolio is deployed on **Vercel** with automatic CI/CD:

* **Live URL**: https://pranaysubra.com
* **Auto-deploys** on every push to `main` branch
* **Build time**: ~30 seconds
* **Global CDN** for fast loading worldwide

### Deploy your own copy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/thatdudePranay/portfolio-website)

---

## Design philosophy

This portfolio is designed to:

* **Stand out visually** – Retro-fusion aesthetic distinguishes from generic portfolios
* **Prioritize user experience** – Smooth animations and intuitive navigation
* **Remain professional** – Balance creative design with recruiter-friendly content
* **Work everywhere** – Fully responsive across all device sizes
* **Load fast** – Optimized images, code splitting, and CDN delivery
* **Be maintainable** – Clean component structure for easy updates

The goal is not just to list accomplishments, but to **create a memorable first impression** that reflects both technical skill and design sensibility.

---

## Key features

### Desktop experience
* Sticky scroll layering animation
* Hover effects on all interactive elements
* Internal scrolling in Projects section
* Smooth transitions between sections

### Mobile experience
* No sticky scrolling (normal document flow)
* Accordion-style project cards
* Touch-optimized buttons
* Responsive navigation

### Accessibility
* Semantic HTML structure
* ARIA labels for screen readers
* Keyboard navigation support
* High contrast text

---

## Performance metrics

* **Lighthouse Score**: 95+ Performance
* **First Contentful Paint**: < 1.5s
* **Time to Interactive**: < 3s
* **Cumulative Layout Shift**: < 0.1

---

## Future enhancements

Potential additions for future iterations:

* Blog section for technical writing
* Dark/light mode toggle
* Project demo videos or live previews
* Animated statistics dashboard
* Contact form with email integration
* Analytics dashboard for visitor tracking

---

## Connect with me

* **Website**: https://pranaysubra.com
* **LinkedIn**: https://linkedin.com/in/pranay-subramanian-1a0126305
* **GitHub**: https://github.com/thatdudePranay
* **Email**: sspranay20@gmail.com

---

## License

This project is open source and available for reference. Feel free to draw inspiration, but please don't copy the design wholesale—make it your own!

---

Built with ☕ and late nights during 1B term at the University of Waterloo.

Great way to start off 2026 strong!!

---

**⭐ If you found this portfolio inspiring, consider giving it a star on GitHub!**
