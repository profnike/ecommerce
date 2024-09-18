import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MenuItem = ({ item: { path, title }, pageLink, home }) => {
   const [hover, setHover] = useState(false);


   return (
      <li className="relative">
         <Link
            href={path}
            className={`${
                  pageLink?.includes(path) && !home
                  ? "font-[500] "
                  : "text-black hover:text-green-600 "
             } relative flex items-center gap-2 text-sm 2xl:text-[15px]`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {title}


           
         </Link>

       
         <motion.div
            initial={{ x: 6, width: "100%", opacity: 0, color:"#000000"  }}
            animate={{
               x: hover || (pageLink.includes(path) && !home) ? 0: 12,
               width: "70%",
               opacity: hover || (pageLink?.includes(path) && !home) ? 1 : 0,
               color: hover || (pageLink?.includes(path) && !home) ? "#008000": "#000000"
               
            }}
            transition={{ duration: 0.3 }}

           className=" absolute -bottom-3 left-0 right-0 h-[3px] w-full bg-green-600"
         />
    
      </li>
   );
};

export default MenuItem;
