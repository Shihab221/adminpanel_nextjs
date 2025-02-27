import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar"
import SideNavbar from "@/components/SideNavbar";
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins', 
  weight: "400" });
const montserrat = Montserrat({    
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

    
    <html lang="en" className="">
      <body
        className="bg-white dark:bg-gray-900 font-poppins"
      >
  
        <Navbar />
        <div className="flex flex-row ">
        <SideNavbar />
        
        {children}
        </div>
        <Footer />
      </body>
    </html>
   
  );
}
