import {  Servicesheader, SingleService } from "@/components";
import {  platedServices } from "../../helpers/data";


export default function Plated() {
  return (
    <div>
        <Servicesheader bgImage="/images/Delish-dish.jpg" upperText="Plated" lowerText="Ng" />
       <div>
       {/* <div className="flex flex-col items-center justify-center mb-5  ">
      <h2 className="text-xl md:text-3xl lg:text-4xl mb-2">
        Our Specialty
        </h2>

      <div className=" h-1 w-24 bg-primary"></div> 
      </div> */}
      <p className="text-center w-[80%] md:w-[60%] mx-auto mb-14">
      At Plated_ng, a subsidiary of Perrez, we believe great food brings people together, whether you're hosting an event, grabbing a quick lunch, planning a surprise package for a loved one or you just want to enjoy good food. Our passion is delivering delicious, freshly prepared meals straight to your doorstep.

      From mouthwatering local delicacies to international favorites, our menu is crafted with the finest ingredients, ensuring every bite is a taste of perfection. Whether you’re craving something spicy, sweet, or savory, we’ve got something for every palate.</p>
     
      <div className="mx-auto  max-w-[85%] ">

      {platedServices?.map(({title,firstParagraph,secondParagraph,thirdParagraph,link, text,stepData,image,imageName},i)=>(
            <div className=" " key={i}>
              <SingleService title={title} firstParagraph={firstParagraph} secondParagraph={secondParagraph} link={link} i={i} text={text} stepData={stepData} image={image} imageName={imageName} thirdParagraph={thirdParagraph} />
            </div>

          ))}
         
      </div>
       </div>
    
    </div>
  );
}