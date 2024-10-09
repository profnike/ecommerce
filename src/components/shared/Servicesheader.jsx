export default function Servicesheader ({ bgImage, upperText, lowerText, service })  {
    return (
       
       <div style={{'--image-url': `url(${bgImage})`}} className='bg-[image:var(--image-url)] bg-no-repeat w-full bg-cover bg-center mb-14 '>
   

       
       <div  className={`  bg-primary bg-opacity-40  `}>
      
        <div
          className="max-w-[85%] py-12 md:py-24 mx-auto text-5xl md:text-[90px]  lg:text-[150px] font-bold capitalize">
          <h2 className="text-white text-center md:text-left ">{upperText}</h2>
           <h2 className="text-secondary text-center -md:mt-8 -lg:mt-16 ">{lowerText}</h2>
        </div>
        </div>
      </div>
     
     
    );
  };
  
  
  