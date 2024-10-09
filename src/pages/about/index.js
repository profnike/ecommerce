import { Testimonial } from "@/components";
import Image from "next/image";

export default function About() {
  return (
    <>
    <div className="mx-auto  max-w-[85%]">
<div className="mb-14 md:mb-24">
      <div className="flex flex-col items-start md:flex-row   md:items-center justify-between gap-3 px-8 md:px-14 py-10 md:py-20  bg-primary bg-opacity-10 rounded-b-[10%]   md:rounded-b-[30%] ">
        <div className="md:w-1/3  flex flex-col justify-center items-start  ">
        
                        <h2 className="text-5xl font-700  md:text-7xl text-start  "> About</h2>
                        <h2 className="text-secondary -mt-2 mb-4  text-4xl font-light   md:text-6xl">
                           Perrez
                        </h2>
                        </div>
                        <div className="md:w-2/3 flex flex-col gap-4">
                    <p className=" ">Welcome to Perrez, your one-stop online store for quality food and stylish clothing. We’re passionate about providing you with a convenient and seamless shopping experience, offering a range of carefully selected products that meet your everyday needs.</p>
                  </div>
                  </div>
      </div>
                  
      <div className="flex flex-col-reverse lg:flex-row  md:justify-between   lg:space-x-5 lg:items-start">
     
      <div className="lg:w-1/2 mb-14 lg:mb-0 ">
            <p className="  ">
               Nkem, the visionary behind Perrez, is a passionate entrepreneur with a deep love for both fashion and food. With an eye for style and a taste for quality, Nkem founded Perrez to offer a unique shopping experience that combines the latest trends in clothing with the finest food products.
             </p>

               <p className="  mt-4">Lorezm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       

      </div>
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0  ">
      <img src="/images/Banner-pix.jpg" alt="herosection-image" className="w-full "/>
      <div className="flex flex-col bg-primary text-white font-bold  w-full text-center ">
        <p>Nkem Adeboye</p>
        <p className="text-secondary">Owner</p>
      </div>
      </div>
     
      </div>
      <div>
          <div className="mb-14 md:mb-20 lg:mt-20    ">
        <div className="flex flex-col items-center justify-center mb-2 md:mb-4 ">
      <h2 className="text-xl md:text-3xl lg:text-4xl mb-2 text-black">
        Our Mission
      </h2>
      <div className="flex justify-center text-center align-center items-center h-1 w-[110px] bg-secondary"></div> 
       </div>
      <div className="md:w-[80%] lg:w-[60%] flex justify-center mx-auto text-center">
      <p className="text-center">At Perrez, we believe in supporting our community through affordable prices, exceptional customer service, and products that add value to your everyday life. Our mission is to bring you the convenience of shopping for both food, essential items and clothes in one place, all from the comfort of your home.</p>
      </div>
        </div>
      </div>
      </div>
      <Testimonial/>
      </>
  );
}