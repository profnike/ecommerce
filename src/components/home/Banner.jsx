import Link from "next/link";
import React from "react";

export default function Banner () {
  return (
<div className="">
    <div className="shadow flex justify-between items-center   
     ">
      {/* <div className="h-[300px] md:w-1/2 md:bg-[url('/images/Banner-pix.jpeg')] bg-cover bg-center bg-no-repeat"> */}
      <div className="h-[300px] hidden md:flex md:w-1/2 ">
      <img src="/images/Banner-pix.jpg" alt="Banner-pix" className="w-full h-full object-cover object-top"/>
      </div>
      <div className="h-[300px] max-w-[90%] lg:max-w-[80%] mx-auto flex justify-center gap-6 md:w-1/2  ">
        <div className="w-full text-primary py-10 flex justify-center md:justify-start lg:justify-center items-center">
          <div className="space-y-3 text-center text-left p-3">
            {/* <p className="uppercase text-xs">START A PROJECT</p> */}
            <h2 className="font-bold text-4xl text-primary">
            We've Got You Covered  <span className="text-secondary">.</span>
            </h2>
            <p className="pb-5 text-xl text-center">
            Feed Your Appetite,Dress Your Best.
            </p>
            <Link href="/contact">
            <div
              className="mx-auto btn btn-secondary bg-black hover:bg-primary hover:border hover:border-2 hover:border-secondary rounded-full w-fit text-sm text-white px-7 py-3 font-normal capitalize">
              Shop Now
              </div>
          </Link>
          </div>
        </div>

        {/* <div className="hidden items-end w-full md:flex">
          <img src="/progressive-app.svg" alt="start a project" className="max-h-[200px] w-[80%]" />
        </div> */}
      </div>
    </div>
    </div>
   
  );
};

