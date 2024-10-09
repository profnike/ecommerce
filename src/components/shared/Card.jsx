import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Card  ({services:{title,text,image,path}}) {
  const pathname = usePathname();

  return (
    <div
      className={`justify-between flex flex-col rounded-lg bg-white hover:bg-primary p-8 hover:text-white cursor-pointer w-full ${pathname==="/services"?"shadow":""}  border border border-[#eaeaea]`}>
      
        <div
          className= "  rounded-lg flex  p-2  ">
         <div>{image?<img src={image} alt={title} className="w-10 h-10 mr-4"/>:""}</div><span className=" font-bold">{title}</span>
        </div>
       
        <div className="flex flex-col items-start  ">
        
      <p className="text-sm">{text}</p>
      </div>
      {pathname==="/services"?
      <Link href={path} className="mt-4">
            <div
              className={`btn btn-secondary bg-black hover:bg-primary  hover:border-2 hover:border-secondary border border-2 border-secondary hover:px-4 rounded-full text-sm text-white px-3 py-2 font-normal capitalize w-fit ${
                 "bg-primary text-white"
              }`}>
              View more
              </div>
          </Link>
          :""}
    </div>
  );
};


