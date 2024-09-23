import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const navLinks = [
    {
       path: "/about",
       title: "About Us",
      
    },
   
    {
       path: "/media",
       title: "Media",
    },
    {
      path: "/services",
      title: "Services",

     },
 ];


 export const mediaLinks = [
   {path: "",title: "LinkedIn",icon: "/icons/linkedin.svg",},
   { path: "", title: "Instagram", icon: "/icons/instagram.svg" },
   { path: "", title: "Twitter", icon: "/icons/twitter.svg" },
   { path: "", title: "Facebook", icon: "/icons/facebook.svg" },
];
 
export const footerLinks = [
  {
     heading: "Useful Links",
     subMenus: [
        { path: "/about", title: "About Us" },
        { path: "/services", title: "Services" },
        { path: "/media", title: "Media" },
        { path: "/contact", title: "Contact Us" },
     ],
  },
  {
    heading: "Contact",
    subMenus: [
      {title: "Ogboki, Ijefa State.",icon: <MapPinIcon className="w-4 min-w-[1rem]"/>,},
   {  title: "perrez@dmail.com", icon: <EnvelopeIcon className="w-4 min-w-[1rem]"/> },
   {  title: "08077863466", icon: <PhoneIcon className="w-4 min-w-[1rem]"/>},
   {  title: "09066345628", icon: <PhoneIcon className="w-4 min-w-[1rem]"/>},
    ],
 },
];