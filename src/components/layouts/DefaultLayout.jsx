"use client"
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Footer, Meta, NavBar } from "@/components";
import { usePathname } from "next/navigation";
import { navLinks } from "@/helpers/data";
import { Nav } from "..";



const inter = Inter({ subsets: ["latin"], width:["100%"] });

export const metadata = {
  title: "Perrez Limited",
  description: "A unique and top-notch online store where your imagination of class becomes a reality",
};


export default function DefaultLayout({ children }) {
  const [pageTitle, setPageTitle] = useState("");
  const pathname = usePathname("");
  

  const getPageTitle = () => {
    const page = navLinks.find((p) => p.path == pathname);
    setPageTitle(page ? page?.title : "Perrez - Where Style Meets Taste");
  };

  useEffect(() => {
    getPageTitle();
  }, [pathname]);
  return (
    <>
      <Meta title={pathname == "/" ? "" : pageTitle} />
     
      <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col justify-between ">
        <div className=" ">
        <NavBar/>
         {children}
       </div> 
        <div>
         <Footer/>
          
          </div>
       
        </div>
       
        </>
  
  
  );
}
