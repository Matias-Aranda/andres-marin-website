import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import SocialSidebar from "@/components/Utils/SocialSidebar";
import Footer from "@/components/Layout/Footer";
import LoadingStyle from "@/components/Utils/LoadingScreen";
import { useState } from "react";
import { AuthProvider } from '@/context/auth-context';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrés Marín",
  description: "Las explicaciones más completas del Simracing en Habla Hispana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}  font-body text-base lg:text-xl`}>
        <AuthProvider>
          <Navbar />
            {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
