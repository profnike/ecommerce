"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
import { navLinks } from "../../helpers/data.js";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

export default function NavBar() {
   const [pageReady, setPageReady] = useState(false);
   const pathname = usePathname();
   const router = useRouter();
   const pageLink = pathname;
   useEffect(() => {
      setPageReady(true);
   }, []);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
           window.addEventListener("scroll", () => setScroll(window.pageYOffset > 200));
        }
     }, []);
     return(
   //   
   
     <header
        className={`sticky top-0 z-30  text-[#0d0630] transition-all duration-300  ${
           scroll ? "bg-red-400 dark:bg-info" : "bg-red-400 dark:bg-info"
        } `}>
        <div
           className={`flex items-center justify-between py-3 transition-all duration-300 ${
              scroll ? "md:py-3" : "md:py-4 xl:py-5"
           } mx-auto  max-w-[85%]    text-black `}>
           {/* {pageReady && ( */}
              <Link href="/">
                 <img
                    src="/Plogo.png"
                    alt="company"
                    className="max-h-9 transition-all duration-300 hover:scale-105 active:scale-95 md:max-h-14"
                 />
              </Link>
           {/* )}  */}

           <div className="flex items-center gap-12 ">
              <nav className="hidden lg:block">
                 <ul className="flex items-center gap-7 xl:gap-8">
                    <MenuItem item={{ path: "/", title: "Home" }} pageLink={pageLink} pageReady={pageReady} home />
                    {navLinks?.map((item, i) => (
                       <MenuItem key={i} item={item} pageLink={pageLink} pageReady={pageReady} />
                    ))}
                 </ul>
              </nav>

             
             
             
           </div>

           <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            {/* <a */}
            <div
              className={`btn btn-red-500 bg-purple-500 hover:bg-purple-800 rounded-full text-sm text-white px-7 py-3 font-normal capitalize ${
                pageLink == "/contact" ? "bg-purple-800 text-white" : ""
              }`}>
              Contact Us
              </div>
            {/* </a> */}
          </Link>
        </div>
           </div>
           </header>
         //   </div>
         )
}
 