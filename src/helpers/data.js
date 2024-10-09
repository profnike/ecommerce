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
      path:"/services/plated_ng"
   },
   {
     title: "Thrift wears",
     text: "we specialize in offering quality thrift pieces, ranging from timeless classics to trendy finds, ensuring there's something for every fashion lover.",
     image:"/images/Thrift-wears.jpg",
      path:"/services/thrift&essentials"
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

export const stepsData = [
  {
    step: "Step 1",
    text: "Contact Perrez to get the current price list of items on our menu",
    
  },
  {
    step: "step 2",
    text: "Choose your desired combination from our list, you can also make your own combo or request for a meal if its not on the list.",
   
  },
  {
    step: "Step 3",
    text: "Send a message of what you want and delivery details at least a day before it is needed",
    
  },
  {
    step: "Step 4",
    text: "Make payment",
    
  },
  {
    step: "Step 5",
    text: "Sit back, relax while we handle the rest",
    
  },
];

export const platedServices = [
  {
    title:"Delish Meals",
    firstParagraph:"At Plated_ng, food is our specialty, and we’re here to satisfy your cravings with fresh, flavorful dishes delivered right to your door. From hearty traditional favorites to new culinary delights, we are dedicated to providing high-quality meals that you’ll love.",
    secondParagraph:"We offer meal options for any time of the day—whether it's breakfast, lunch, or dinner. Custom meal packages can be created to suit your preferences. Plated_ng also provides the option to send food packages to your loved ones, complete with personalized, heartfelt notes. Simply follow these steps:",
    thirdParagraph:"At Plated_ng, we carefully prepare each meal with attention to detail, so we do not accept same-day delivery requests to ensure the highest quality in every order.",
    link:"/contact", 
    text:"Order Now",
    stepData:[
      {
        step: "Step 1",
        text: "Contact Perrez to get the current price list of items on our menu",
        
      },
      {
        step: "step 2",
        text: "Choose your desired combination from our list, you can also make your own combo or request for a meal if its not on the list.",
       
      },
      {
        step: "Step 3",
        text: "Send a message of what you want and delivery details at least a day before it is needed",
        
      },
      {
        step: "Step 4",
        text: "Make payment",
        
      },
      {
        step: "Step 5",
        text: "Sit back, relax while we handle the rest",
        
      },
    ],
    image:"/images/Banner-pix.jpg",
    imageName:"Meal list",

    
  },
  {
    title:"Culinary Trainings",
    firstParagraph:"At Plated_ng, we believe anyone can become a great cook with the right guidance and passion. That’s why we offer periodic online culinary training designed to help you sharpen your cooking skills and discover the joy of creating delicious meals at home.",
    secondParagraph:"Join us today, and let’s make every meal that you prepare an unforgettable experience!",
    thirdParagraph:"",
    link:"/contact", 
    text:"Join Now",
    stepsData:"",
    image:"/images/Banner-pix.jpg",
    imageName:"Culinary class flyer",
    
  },
  {
    title:"Event Planning",
    firstParagraph:"At Perrez, we believe that every event, no matter how small, deserves a personal touch and careful attention to detail. We specialize in planning intimate gatherings, from birthdays and family celebrations to and cozy get-togethers. Our goal is to make your vision come to life with seamless planning, creative design, and exceptional service.",
    secondParagraph:"Whether you need help with venue selection, catering, decor, or all of the above, we’re here to take the stress out of event planning so you can focus on enjoying the moment.",
    thirdParagraph:"",
    link:"/contact", 
    text:"Contact Us",
    stepsData:"",
    image:"/images/Banner-pix.jpg",
    imageName:"Event-pix",
    
  },
];