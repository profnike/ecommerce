import { Card, Servicesheader } from "@/components";
import {  sheinSteps, brandSteps, services } from "../../helpers/data";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function SecondSingleService({firstParag,secondParag,steps,image,upper,lower}) {
  return (
    <div>
        <Servicesheader bgImage={image} upperText={upper} lowerText={lower} />
        <div className="text-center w-[80%] md:w-[70%] mx-auto mb-14">
          <p className="mb-2">{firstParag}</p>
        <p>{secondParag}</p>
        </div>
        <div className="max-w-[85%] mx-auto mb-14">
        <div className={`grid gap-6 justify-between w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${"lg:grid-cols-4"}`}>
        {steps && steps?.map((serviceSteps, i) => (
          <motion.div
            whileInView={{ y: [40 + (i + 3), 0] }}
            transition={{ duration: 0.2 + i, ease: "easeOut" }}
            key={i}>
            
            <Card services={serviceSteps}/>
           
          </motion.div>
        ))}
      </div>
      </div>
   
    </div>
  );
}