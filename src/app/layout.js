"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";
// import { Footer,NavBar } from "@/components";


const inter = Inter({ subsets: ["latin"], width:["100%"] });

 const metadata = {
  title: "Perrez Limited",
  description: "A unique and top-notch online store where your imagination of class becomes a reality",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col justify-between bg-green-400">
        <div className=" "><NavBar/> 
       {children}</div> 
        <div><Footer/></div>
       
        </div>
        
        </body>
    </html>
  );
}
