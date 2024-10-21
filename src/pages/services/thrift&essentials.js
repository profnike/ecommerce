
import {  Servicesheader, SingleService } from "@/components";
import {  thriftServices } from "../../helpers/data";


export default function Plated() {
  return (
    <div>
        <Servicesheader bgImage="/images/Thrift-wears.jpg" upperText="Thrift" lowerText="Wears" />
       <div>
       {/* <div className="flex flex-col items-center justify-center mb-5  ">
      <h2 className="text-xl md:text-3xl lg:text-4xl mb-2">
        Our Specialty
        </h2>

      <div className=" h-1 w-24 bg-primary"></div> 
      </div> */}
      <p className="text-center w-[85%] md:w-[75%] lg:w-[65%] mx-auto mb-10 md:mb-14">
      Looking for unique, stylish, and affordable fashion? You&apos;ve come to the right place! At Perrez, we curate the best thrift finds to keep you ahead of the fashion game without breaking the bank. Our collection of pre-loved clothing is handpicked for its quality, trendiness, and sustainability—so you can look great while making eco-friendly choices.</p>
     
      <div className="mx-auto  max-w-[85%] ">

      {thriftServices?.map(({title,firstParagraph,secondParagraph,thirdParagraph,link, text,stepData,image,imageName},i)=>(
            <div className=" " key={i}>
              <SingleService title={title} firstParagraph={firstParagraph} secondParagraph={secondParagraph} link={link} i={i} text={text} stepData={stepData} image={image} imageName={imageName} thirdParagraph={thirdParagraph} />
            </div>

          ))}
         
      </div>
       </div>
    
    </div>
  );
}