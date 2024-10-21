import {  Servicesheader, SingleService } from "@/components";
import {  platedServices } from "../../helpers/data";


export default function Plated() {
  return (
    <div>
        <Servicesheader bgImage="/images/Delish-dish.jpg" upperText="Plated" lowerText="Ng" />
       <div>
       
      <p className="text-left md:text-center w-[85%] md:w-[75%] lg:w-[65%] mx-auto mb-10 md:mb-14 ">
      At Plated_ng, in collaboration with Perrez, we believe great food brings people together, whether you&apos;re hosting an event, grabbing a quick lunch, planning a surprise package for a loved one or you just want to enjoy good food. Our passion is delivering delicious, freshly prepared meals straight to your doorstep.

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