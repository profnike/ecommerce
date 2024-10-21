import { ChatBubbleLeftIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const navLinks = [
    {
       path: "/about",
       title: "About Us",
      
    },
   
    // {
    //    path: "/media",
    //    title: "Media",
    // },
    {
      path: "/services",
      title: "Services",

     },
     {
      path: "/contact",
      title: "Contact Us",

     },
 ];


 export const mediaLinks = [
   {path: "",title: "LinkedIn",icon: "/icons/linkedin.svg", },
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
        { path: "/contact", title: "Contact Us" },
     ],
  },
  {
    heading: "Contact",
    subMenus: [
      {title: "Ogboki, Ijefa State.",icon: <MapPinIcon className="w-4 min-w-[1rem]"/>,},
   {  title: "perrez@dmail.com", icon: <EnvelopeIcon className="w-4 min-w-[1rem]"/> },
   {  title: "08077863466", icon: <PhoneIcon className="w-4 min-w-[1rem]"/>},
   {  title: "09066345628", icon: <ChatBubbleLeftIcon className="w-4 min-w-[1rem]"/>},
    ],
 },
];

export const services = [
   {
     title: "Plated_ng",
     text: "At Perrez we pride ourselves on using the finest ingredients to create meals that satisfy every palate.",
      image:"/images/Delish-dish.jpg",
      path:"/services/plated_ng"
   },
   {
    title: "Brand Booster",
    text: "we amplify your brand's presence to drive growth",
    image:"/images/Brand-booster.jpg",
    path:"/services/brand-booster"
  },
   {
     title: "Thrift wears",
     text: "we specialize in offering quality thrift pieces, ranging from timeless classics to trendy finds, ensuring there's something for every fashion lover.",
     image:"/images/Thrift-wears.jpg",
      path:"/services/thrift&essentials"
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
    text: "I have been a loyal customer of Perrez for over a year, and I am continually impressed by her quality and service. The food is always fresh, delicious, and delivered right on time. Attention to detail is amazing.",
    
  },
  {
    name: "Adelaja Olayemisi",
    text: "Their clothing line is stylish and affordable, catering to all my fashion needs whether for casual outings or special occasions. The thrift items are high quality and the fit is always perfect. I have received so many compliments on the outfits I have bought from them!",
   
  },
];

export const sheinSteps = [
  {
    title: "Step 1",
    text: "Contact Perrez to get the current price list of items on our menu",
    
  },
  {
    title: "Step 2",
    text: "Choose your desired combination from our list, you can also make your own combo or request for a meal if its not on the list.",
   
  },
  {
    title: "Step 3",
    text: "Send a message of what you want and delivery details at least a day before it is needed",
    
  },
  {
    title: "Step 4",
    text: "Make payment",
    
  },
  {
    title: "Step 5",
    text: "Sit back, relax while we handle the rest",
    
  },
];

export const brandSteps = [
  {
    title: "Step 1",
    text: "Contact Perrez to get the current price list of items on our menu",
    
  },
  {
    title: "step 2",
    text: "Choose your desired combination from our list, you can also make your own combo or request for a meal if its not on the list.",
   
  },
  {
    title: "Step 3",
    text: "Send a message of what you want and delivery details at least a day before it is needed",
    
  },
  {
    title: "Step 4",
    text: "Make payment",
    
  },
  {
    title: "Step 5",
    text: "Sit back, relax while we handle the rest",
    
  },
];



export const platedServices = [
  {
    title:"Delish Meals",
    firstParagraph:"At Plated_ng, food is our specialty, and we are here to satisfy your cravings with fresh, flavorful dishes delivered right to your door. From hearty traditional favorites to new culinary delights, we are dedicated to providing high-quality meals that you will love.",
    secondParagraph:"We offer meal options for any time of the day—whether it is breakfast, lunch, or dinner. Custom meal packages can be created to suit your preferences. Plated_ng also provides the option to send food packages to your loved ones, complete with personalized, heartfelt notes. Simply follow these steps:",
    thirdParagraph:"At Plated_ng, we carefully prepare each meal with attention to detail, so we do not accept same-day delivery requests to ensure the highest quality in every order.",
    link:"/contact", 
    text:"Order Now",
    stepData:[
      {
        step: "Step 1",
        text: "Contact Perrez to get the current price list of items on our menu",
        
      },
      {
        step: "Step 2",
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
    firstParagraph:"At Plated_ng, we believe anyone can become a great cook with the right guidance and passion. That is why we offer periodic online culinary training designed to help you sharpen your cooking skills and discover the joy of creating delicious meals at home.",
    secondParagraph:"Join us today, and let us make every meal that you prepare an unforgettable experience!",
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
    secondParagraph:"Whether you need help with venue selection, catering, decor, or all of the above, we are here to take the stress out of event planning so you can focus on enjoying the moment.",
    thirdParagraph:"",
    link:"/contact", 
    text:"Contact Us",
    stepsData:"",
    image:"/images/Banner-pix.jpg",
    imageName:"Event-pix",
    
  },
];

export const thriftServices = [
  {
    title:"Thrift Sales",
    firstParagraph:"We carefully select every item to ensure it meets our quality and style standards. From timeless classics to bold statement pieces, our inventory is packed with unique finds that are also affordable.",
    secondParagraph:"We offer a wide range of styles, sizes, and categories to suit all tastes. Whether you are hunting for vintage dresses, trendy tops, chic jackets, or casual streetwear, we have got something for everyone. Simply follow these steps:",
    thirdParagraph:"",
    link:"/contact", 
    text:"Order Now",
    stepData:[
      {
        step: "Step 1",
        text: "Contact Perrez to have your contact saved on our whatsapp list ",
        
      },
      {
        step: "Step 2",
        text: "Check our whatsapp updates regularly for the information on the day for sales of thrift wears."
       
      },
      {
        step: "Step 3",
        text: "Set a reminder for the particular day and time, check the wears as they are being posted",
        
      },
      {
        step: "Step 4",
        text: "Send a message immediately to perrez if you find a wear of your choice and size and await her response on the availability of the wear",
        
      },
      {
        step: "Step 5",
        text: "If available, make payment immediately and send delivery details",
        
      },
    ],
    image:"/images/Banner-pix.jpg",
    imageName:"Meal list",

    
  },
  {
    title:"Trainings",
    firstParagraph:"At Plated_ng, we believe anyone can become a great cook with the right guidance and passion. That is why we offer periodic online culinary training designed to help you sharpen your cooking skills and discover the joy of creating delicious meals at home.",
    secondParagraph:"Join us today, and let us make every meal that you prepare an unforgettable experience!",
    thirdParagraph:"",
    link:"/contact", 
    text:"Join Now",
    stepsData:"",
    image:"/images/Banner-pix.jpg",
    imageName:"Culinary class flyer",
    
  },
]