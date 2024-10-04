import Image from "next/image";
import { Banner, HeroSection, Services, Testimonial } from "@/components";
 

export default function Service() {
  return (
    <div className="mx-auto  max-w-[85%]  ">
<div className="mb-14 md:mb-24">
      <div className="flex flex-col items-start md:flex-row   md:items-center justify-between gap-3 px-8 md:px-14 py-10 md:py-20  bg-primary bg-opacity-10 rounded-b-[10%]   md:rounded-b-[30%] ">
        <div className="md:w-1/3  flex flex-col justify-center items-start  ">
        
                        <h2 className="text-5xl font-700  md:text-7xl text-start  "> Our</h2>
                        <h2 className="text-secondary -mt-2 mb-4  text-4xl font-light   md:text-6xl">
                           Services
                        </h2>
                        </div>
                        <div className="md:w-2/3 flex flex-col gap-4">
                    <p className=" ">At Perrez, we are committed to providing top-quality products and seamless shopping experiences for all your food and clothing needs. Here’s a breakdown of what we offer:</p>
                  </div>
                  </div>
      </div>
                  
      <div className="mb-14 md:mb-24 ">
        <Services/>
      </div>
      
      </div>
  );
}