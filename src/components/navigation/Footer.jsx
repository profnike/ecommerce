import Link from "next/link";
import {  footerLinks,mediaLinks } from "../../helpers/data";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";


export default function Footer  () {
   const year = new Date().getFullYear();

   return (
      <footer className="bg-black">
            <div className="mx-auto  max-w-[85%]  py-10 font-light lg:py-14">
               <div className="section-container grid grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
                  <div className="col-span-4 w-full text-sm font-light text-[#fdf9ee] md:pr-0 lg:pr-5">
                     <Link href="/" className="inline-block">
                        <img src="/images/Plogo.png" alt="company-logo" className="max-h-9 md:max-h-14" />
                     </Link>

                     <p className="mb-6 mt-3 text-white ">
                    An online store with the perfect blend of style and flavor, a place where fashion meets gourmet food. Shop the latest trends and indulge in delicious treats, all in one place!
                     </p>
                    
                  </div>

                  <div className="col-span-5 w-full min-w-fit lg:flex ">
                     {footerLinks?.map(({ heading, subMenus }, i) => (
                        <div className="flex w-full flex-col mb-10 lg:mb-0" key={ i}>
                           <h3 className="mb-3 text-sm font-semibold text-white xl:text-base">
                              {heading}
                           </h3>
                           <div className="flex flex-col space-y-2  gap-3 text-white   ">
                              {subMenus.map(({path,icon,title}, i) => (
                                 // <div key={i} className={`flex items-center gap-2 ${icon ? "":"hover:underline underline-offset-4 cursor-pointer"}` } >
                                 <div key={i} className={`flex items-center gap-2 ${icon ? "":"hover:underline underline-offset-4  decoration-secondary cursor-pointer"}` } >
                                 {icon? <span>
                                    {icon} 
                              </span>:""}
                             {path ?
                             <Link href={path} className="inline-block w-fit cursor-pointer text-sm font-light text-white">
            
                                 {title}
                              </Link>
                              : title
                                }
                              
                              </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="col-span-3 mt-0 w-full">
                     <h3 className="mb-6 text-sm font-semibold text-white xl:text-base">
                        Stay Connected
                     </h3>

                     <div className="flex items-center md:gap-3">
                        {mediaLinks?.map(({ path, title, icon }, i) => (
                           <a
                              key={i}
                              target="_blank"
                              href={path}
                              className="mr-2 cursor-pointer md:mr-0 "
                              rel="noreferrer">
                              <img
                                 src={icon}
                                 alt={`Perrez ${title}`}
                                 className="w-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 md:w-6"
                              />
                           </a>
                        ))}
                     </div>
                     <p className="mb-6 mt-3 text-sm text-white">
                        Follow our social media and blog for latest information on our company activities.
                     </p>
                  </div>
               </div>
            </div>

            <div className="mx-auto  max-w-[85%] section-container flex flex-col-reverse items-center justify-between gap-2 border-t-[0.5px] border-white py-6 font-light md:flex-row">
               <div className="flex items-center gap-2 text-sm">
                  <p className="text-center text-[#fdf9ee]">
                     &copy; {year} Perrez. All rights reserved.
                  </p>
                  {/* 
                  <p className="hidden text-[#fdf9ee] dark:text-white md:block">
                     Developed by{" "}
                     <a
                        href="https://www.radartrail.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline text-base text-primary">
                        Radartrail
                     </a>
                  </p> */}
               </div>

               <div className="flex items-center gap-3 text-sm text-white">
                  <Link href="/policy" className="transition-colors duration-300 hover:text-primary">
                     Privacy Policy
                  </Link>
                  {/* <Link href="#" className="transition-colors duration-300 hover:text-primary">
                     Modern Slavery Statement
                  </Link> */}
               </div>
            </div>
         {/* </SlideDown> */}
      </footer>
   );
};


