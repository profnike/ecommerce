"use client"
import { useState } from "react";
import { motion } from "framer-motion";
 //import { ArrowRightIcon} from "@heroicons/react/outline";
 import { ArrowRightIcon,ArrowLeftIcon } from "@heroicons/react/24/outline";
import { testimonialData } from "../../helpers/data";


export default function Testimonial  () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimony = testimonialData[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="bg-primary bg-opacity-5 ">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto p-10 md:p-20 md:py-28 ">
        <div className="shadow-2xl rounded-2xl p-10 md:max-w-[80%] lg:max-w-[70%] m-auto bg-white z-0 ">
        <img src="/icons/quote.png" alt="" className="w-12 h-12 rounded-full text-red-300"/>
          {testimonialData.length && (
             <div >
      <span className="leading-7 text-black">{testimony.text}</span>

      <div className="">
        <div className="">
          <span className=" font-semibold text-primary">{testimony.name}</span>
         
        </div>
      </div>
    </div>
           
          )}
          <div className="flex justify-between mt-10">
            <div
              className=" -left-8 rounded-full top-[40%] flex items-center bg-primary bg-opacity-10 shadow-sm cursor-pointer text-primary border-secondary w-8 h-8 lg:w-fit lg:h-fit p-2 lg:p-3 hover:p-1 lg:hover:p-4"
              onClick={() => handleClick(currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1)}>
              <ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6 " />
            </div>
            <div
               className=" -right-7 rounded-full top-[40%] flex items-center bg-primary bg-opacity-10 shadow-sm cursor-pointer text-primary border-secondary w-8 h-8 lg:w-fit lg:h-fit p-2 lg:p-3 hover:p-1 lg:hover:p-4"
              
              onClick={() => handleClick(currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1)}>
              <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


