import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Button({link,text,mobile}) {
    const pathname = usePathname();
   const pageLink = pathname;
  return (
    <div>
        <Link href={link}>
    <div
      className={`btn btn-secondary  ${mobile? "bg-white text-primary ":"bg-black text-white hover:bg-primary "} w-fit  hover:border-2 hover:border-secondary  rounded-full text-sm  px-7 py-3 font-normal capitalize ${
        pageLink == "/contact" ? "bg-primary text-white" : ""
      }`}>
      {text}
      </div>
    </Link></div>
  );
}

