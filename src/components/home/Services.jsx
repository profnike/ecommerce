import { services } from "../../helpers/data";
import { motion } from "framer-motion";
import { Card } from "..";
import { usePathname } from "next/navigation";

export default function Services() {
  const pathname = usePathname();

  return (
    < section className={` ${pathname==="/services"? "":"bg-primary"}`}>
     <div className={`${pathname==="/services"? "":"py-10 md:py-14 "} max-w-[85%]  z-10  mx-auto text-[#2E2E2E"]`}>
     {pathname==="/services"?"":
      <div className="flex flex-col items-center justify-center mb-7 md:mb-14 ">
      <h2 className="text-xl md:text-3xl lg:text-4xl mb-2 text-white">
        Our Services
        </h2>

      <div className="flex justify-center text-center align-center items-center h-1 w-[100px] bg-secondary"></div> 
      </div>
      }
      <div className={`grid gap-6 justify-between w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${pathname==="/services"?"":"lg:grid-cols-4"}`}>
        {services?.map((services, i) => (
          <motion.div
            whileInView={{ y: [40 + (i + 3), 0] }}
            transition={{ duration: 0.2 + i, ease: "easeOut" }}
            key={i}>
            
            <Card services={services}/>
           
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}