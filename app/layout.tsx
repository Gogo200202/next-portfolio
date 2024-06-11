import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Navigation from "./components/Navigation"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My portfolio in next js",
  description: "My portfolio in next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
        
      <Navigation></Navigation>
        
        {children}</body>
     
    </html>
  );
}
