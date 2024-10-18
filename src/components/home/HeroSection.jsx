import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mx-auto  max-w-[85%] z-10 ">
      <div className="flex flex-col md:flex-row justify-between  md:my-20 md:h-[70vh] space-x-5  mb-10 md:items-center">
      <div className="my-10 md:w-1/2">
        <div>
        
                        <h2 className="text-4xl font-200 text-info  md:text-6xl">Everything</h2>
                        <h2 className="text-secondary -mt-2 mb-4  text-4xl font-light  md:text-6xl">
                           Perrez
                        </h2>
                    
                  </div>

                  
                     <h2 className="text-xl ">
                     Discover Fresh Flavors & Trendy Styles – Delivered Right to Your Door!
                     </h2>
                 

                 
                     <p className="text-lg font-light  2xl:text-xl">
                     Explore a wide range of premium groceries and stylish clothing, all in one place. Whether you&apos;re stocking up on fresh food or revamping your wardrobe, enjoy unbeatable prices and fast, reliable delivery across Nigeria.
                     </p>
                 

                     <Link href="/contact">
            <div
              className={`btn  mt-4 bg-black hover:bg-primary hover:border-2 hover:border-secondary rounded-full w-fit text-sm text-white px-7 py-3 font-normal capitalize
              }`}>
              Contact Us
              </div>
          </Link>
                
                     {/* <Link
                        href="/about"
                        className="btn-primary btn-wide btn flex  gap-5 rounded-none border-none text-base font-normal normal-case text-white transition-all duration-300 hover:gap-8 hover:bg-white hover:text-info dark:hover:bg-white hover:shadow-md">
                        Find out more
                        <span className="rounded-full  p-2">
                           <ArrowLongRightIcon className="w-5 stroke-2 " />
                        </span>
                     </Link> */}
       

      </div>
      <div className="md:w-1/2">
      <img src="/images/Herosection-Image.png" alt="herosection-image" className="w-full"/>
      </div>
      </div>
      </div>
  );
}