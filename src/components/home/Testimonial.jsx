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
    <div className="bg-primary bg-opacity-5 p-10 md:py-28">
        {/* <img src="/icons/quote" alt="" className="w-12 h-12 rounded-full"/> */}
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto ">
        <div className="shadow-2xl rounded-2xl p-10 md:max-w-[50%] m-auto bg-white z-0 ">
        <img src="/icons/quote.png" alt="" className="w-12 h-12 rounded-full text-red-300"/>
          {testimonialData.length && (
            // <motion.div initial={{ x: 0 }} animate={{ x: 10 }} exit={{ opacity: 0 }}>
             <div >
      <span className="leading-7 text-black">{testimony.text}</span>

      <div className="">
        <div className="">
          <span className="text-black font-semibold text-primary">{testimony.name}</span>
         
        </div>
      </div>
    </div>
            // </motion.div>
          )}
          <div className="flex justify-between mt-10">
            <div
              className=" -left-8 rounded-full top-[40%] bg-primary bg-opacity-10 shadow-sm cursor-pointer text-primary border-secondary w-fit p-3 hover:p-4"
              onClick={() => handleClick(currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1)}>
              <ArrowLeftIcon className="w-7 h-7 " />
            </div>
            <div
              className=" -right-7 rounded-full top-[40%] bg-primary bg-opacity-10 shadow-sm cursor-pointer text-primary border-secondary w-fit p-3"
              onClick={() => handleClick(currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1)}>
              <ArrowRightIcon className="w-7 h-7 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


