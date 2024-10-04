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
      // { path: "/home", title: "Home" },
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

export const services = [
   {
     title: "Plated ng",
     text: "At Perrez we pride ourselves on using the finest ingredients to create meals that satisfy every palate.",
      image:"/images/Delish-dish.jpg",
      path:"/services/plated-ng"
   },
   {
     title: "Thrift wears",
     text: "we specialize in offering quality thrift pieces, ranging from timeless classics to trendy finds, ensuring there's something for every fashion lover.",
     image:"/images/Thrift-wears.jpg",
      path:"/services/thrift"
   },
   {
     title: "Brand Booster",
     text: "we amplify your brand's presence to drive growth",
     image:"/images/Brand-booster.jpg",
     path:"/services/brand-booster"
   },
   {
     title: "Faithful Insights",
     text: "we share uplifting and thought-provoking content that inspires faith and spirituality.",
    image:"/images/Faithful.jpg",
     path:"/services/faithful-insights"
   },
   {
    title: "Shein",
    text: "we make shopping from Shein effortless and enjoyable",
    image:"/images/Shein.jpg",
    path:"/services/shein"
  },
 ];
 export const testimonialData = [
  {
    name: "Onalaja Adekemi",
    text: "I’ve been a loyal customer of Perrez for over a year, and I am continually impressed by her quality and service. The food is always fresh, delicious, and delivered right on time. Attention to detail is amazing",
    
  },
  {
    name: "Adelaja Olayemisi",
    text: "Their clothing line is stylish and affordable, catering to all my fashion needs whether for casual outings or special occasions. The fabrics are high quality and the fit is always perfect. I’ve received so many compliments on the outfits I’ve bought from them!",
   
  },
];