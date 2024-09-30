import React from "react";
import Link from "next/link";
 //import {  XIcon } from "@heroicons/react/24/outline";
import { navLinks, mediaLinks } from "../../helpers/data";

export default function MobileNavBar  ({ pageLink, setMenuOpen })  {
  return (
    
    <aside className="flex flex-col gap-6 py-8 px-4">
         <div className="mb-4 mt-2 flex  justify-end px-2">
            <span
               className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
               onClick={() => setMenuOpen(false)}>
                {/* <XIcon className="w-6 cursor-pointer" /> */}
                <div className="w-6 cursor-pointer">x</div>
            </span>
         </div>

      <nav>
         <ul className="flex items-center flex-col gap-4">
          {navLinks?.map(({ path, title }, i) =>
            (
              <Link href={path} key={i}>
                <div
                  className={`${
                    pageLink == path && "text-accent font-semibold"
                  } text-white text-xl hover:text-green-500 capitalize`}
                  onClick={() => setMenuOpen(false)}>
                  {title}
                </div>
              </Link>
            )
          )}
          <div className="flex items-center gap-4">
          <Link href="/contact">
            <div
              className={`btn btn-red-500 bg-purple-500 hover:bg-purple-800 rounded-full text-sm text-white px-7 py-3 font-normal capitalize ${
                pageLink == "/contact" ? "bg-purple-800 text-white" : ""
              }`}>
              Contact Us
              </div>
          </Link>
        </div>
        <div className="flex items-center justify-center md:gap-3  ">
                        {mediaLinks?.map(({ path, title, icon }, i) => (
                           <a
                              key={title}
                              target="_blank"
                              href={path}
                              className="mr-2 cursor-pointer md:mr-0 "
                              rel="noreferrer">
                              <img
                                 src={icon}
                                 
                                 alt={"Perrez" + `${title}`}
                                 className="w-6 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 md:w-6"
                              />
                           </a>
                        ))}
                     </div>
        </ul> 
      </nav>

      
     </aside>
  );
};


