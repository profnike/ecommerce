// import { Card, Servicesheader } from "@/components";
// import {  sheinSteps, services } from "../../helpers/data";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";

// export default function Shein() {
//   const pathname = usePathname();
//   return (
//     <div>
//         <Servicesheader bgImage="/images/shein.jpg" upperText="Shein" lowerText="Delivery" />
//         <div className="text-center w-[80%] md:w-[60%] mx-auto mb-14">
//           <p className="mb-2">At Perrez, we make shopping from Shein easier and more convenient by handling everything from payment to delivery. Whether you're looking to update your wardrobe or find the latest fashion trends, we take the hassle out of international purchases, offering secure payment solutions and reliable delivery right to your doorstep.</p>
//         <p>No more worries about payment methods or shipping issues—simply choose your favorite Shein items, and let us take care of the rest! Simply follow these steps:</p>
//         </div>
//        <div className="max-w-[85%] mx-auto mb-14">
//         <div className={`grid gap-6 justify-between w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${pathname==="/services"?"":"lg:grid-cols-4"}`}>
//         {sheinSteps?.map((sheinSteps, i) => (
//           <motion.div
//             whileInView={{ y: [40 + (i + 3), 0] }}
//             transition={{ duration: 0.2 + i, ease: "easeOut" }}
//             key={i}>
            
//             <Card services={sheinSteps}/>
           
//           </motion.div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// }


import {  sheinSteps, brandSteps, services } from "../../helpers/data";
import { SecondSingleService } from "@/components";


export default function Shein() {
  return (
    <>
  <SecondSingleService 
  firstParag="At Perrez, we make shopping from Shein easier and more convenient by handling everything from payment to delivery. Whether you're looking to update your wardrobe or find the latest fashion trends, we take the hassle out of international purchases, offering secure payment solutions and reliable delivery right to your doorstep." 
  secondParag="No more worries about payment methods or shipping issues—simply choose your favorite Shein items, and let us take care of the rest! Simply follow these steps:"
  steps={sheinSteps}
  image="/images/shein.jpg"
  upper="Shein"
  lower="Delivery"/>
    
    </>
  );
}