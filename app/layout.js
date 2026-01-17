import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Pranay Subramanian | Computer Science & Finance Student @ UWaterloo",
  description: "First year CFM student at UWaterloo passionate about SWE, Finance, and Data Science. Exploring ML development and real-world financial models.",
  keywords: ["Pranay Subramanian", "CFM", "University of Waterloo", "Software Engineer", "Finance", "Data Science", "Machine Learning", "Portfolio"],
  authors: [{ name: "Pranay Subramanian" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Pranay Subramanian - Portfolio",
    description: "CFM Student | Software Engineer | Finance | Data Science",
    siteName: "Pranay Subramanian Portfolio",
    images: [
      {
        url: "/images/niceheadshot.jpg",
        width: 1200,
        height: 630,
        alt: "Pranay Subramanian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay Subramanian - Portfolio",
    description: "CFM Student | Software Engineer | Finance | Data Science",
    images: ["/images/niceheadshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}