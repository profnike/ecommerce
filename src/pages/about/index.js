import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto  max-w-[85%]  ">
      <div className="flex flex-col-reverse lg:flex-row justify-between my-2 md:my-10 lg:h-[70vh] space-x-5 md:mb-20 mb-10 md:items-center">
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
      <img src="/images/Banner-pix.jpg" alt="herosection-image" className="w-full"/>
      </div>
      <div className="lg:my-10 lg:w-1/2">
        <div>
        
                        <h2 className="text-5xl font-200 text-info  md:text-8xl"> About</h2>
                        <h2 className="text-secondary -mt-2 mb-4  text-4xl font-light  md:text-6xl">
                           Perrez
                        </h2>
                    
                  </div>

{/*                   
                     <h2 className="text-xl ">
                     Discover Fresh Flavors & Trendy Styles – Delivered Right to Your Door!
                     </h2> */}
                 

                 
                     <p className="text-lg font-light  2xl:text-xl">
                     Nkem, the visionary behind Perrez, is a passionate entrepreneur with a deep love for both fashion and food. With an eye for style and a taste for quality, Nkem founded Perrez to offer a unique shopping experience that combines the latest trends in clothing with the finest food products.
                     </p>
                 
       

      </div>
     
      </div>
      </div>
  );
}