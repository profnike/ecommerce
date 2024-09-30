"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../helpers/data.js";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import MenuItem from "./MenuItem";

export default function NavBar() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [pageReady, setPageReady] = useState(false);
   const pathname = usePathname();
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
     
   
     <header
        className={`sticky top-0 z-100 shadow  text-[#0d0630] bg-white transition-all duration-300  ${
           scroll && "shadow"
        } `}>
        <div
           className={`flex items-center justify-between py-3 transition-all duration-300 ${
              scroll ? "md:py-3" : "md:py-4 xl:py-5"
           } mx-auto  max-w-[85%]    text-black `}>
              <Link href="/">
                 <img
                    src="/images/Plogo.png"
                    alt="company-logo"
                    className="max-h-9 transition-all duration-300 hover:scale-105 active:scale-95 md:max-h-14"
                 />
              </Link>

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
            <div
              className={`btn btn-secondary bg-black hover:bg-primary hover:border hover:border-2 hover:border-secondary rounded-full text-sm text-white px-7 py-3 font-normal capitalize ${
                pageLink == "/contact" ? "bg-primary text-white" : ""
              }`}>
              Contact Us
              </div>
          </Link>
        </div>
        {/* mobile menu start */}
        <Bars4Icon
                  className={`w-9 cursor-pointer text-black  lg:hidden`}
                  onClick={() => setMenuOpen(true)}
               />
               <motion.div
                  initial={false}
                  animate={{ x: menuOpen ? 0 : "100%" }}
                  transition={{ duration: 0.5 }}
                  className="fixed bottom-0 left-0 right-0 top-0 z-[99999] h-screen overflow-y-scroll bg-black bg-opacity-90 text-center lg:hidden"
                  onClick={(e) => e.stopPropagation()}>
                  <MobileNavbar setMenuOpen={setMenuOpen} pageLink={pageLink} />
               </motion.div>
               {/* mobile menu end */}
           </div>
           </header>
         
         )
}