"use client"
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Footer,NavBar } from "@/components";
import { usePathname } from "next/navigation";
import { navLinks } from "@/helpers/data";


const inter = Inter({ subsets: ["latin"], width:["100%"] });

export const metadata = {
  title: "Perrez Limited",
  description: "A unique and top-notch online store where your imagination of class becomes a reality",
};


export default function DefaultLayout({ children }) {
  const [pageTitle, setPageTitle] = useState("");
  const pathname = usePathname();

  const getPageTitle = () => {
    navLinks?.map(({ title, path }) => (path == pathname ? setPageTitle(title) : setPageTitle("")));
  };

  useEffect(() => {
    getPageTitle();
  }, [pathname]);
  return (
    // <html lang="en">
    <>
    <metadata title={pageTitle} />
      {/* <body className={inter.className}> */}
      <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col justify-between bg-green-400">
        <div className=" "><NavBar/> 
         {children}
       </div> 
        <div>Footer</div>
       
        </div>
        
        {/* </body> */}
        </>
  
  
  );
}
