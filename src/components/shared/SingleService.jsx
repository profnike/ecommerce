import { Button } from "..";

export default function SingleService({title,firstParagraph, secondParagraph,i, link, text, stepData,image,imageName,thirdParagraph}) {
    const Odd = (num) => num % 2 !== 0;
  
  
    return (
    <div className="mb-10 md:mb-14">
<h2 className="text-xl md:text-3xl lg:text-3xl mb-4 md:mb-6 text-primary  ">{title}</h2>
<div className="hidden md:flex w-3 h-3 bg-primary rounded-full b mx-auto"> </div>
      <div className={`flex flex-col-reverse justify-between  ${Odd(i)?"md:flex-row-reverse":"md:flex-row "}`} >
        <div className={`md:w-1/2  mt-4 md:mt-0 border-r-0 md:border-primary   ${Odd(i)?" md:border-l-2 md:pl-10":"md:pr-10  md:border-r-2 "} `} >
        <p className="mb-2" >{firstParagraph}</p>
        <p className="mb-2">{secondParagraph}</p>
        <div className="my-2">
          {stepData?.map(({step,text},id)=>(
            <div className="flex " key={id}>
              <h3 className="fond-medium text-primary min-w-[70px]">{step}: </h3>
              <p>{text}</p>
            </div>

          ))}
          
        </div>
        <p className="mb-4">{thirdParagraph}</p>
        
        <Button link={link} text={text}/>
       
        </div>
        {/* <div className=" h-full w-1 bg-primary">nn</div>  */}
        <div className={`md:w-1/2 ${Odd(i)?"md:pr-10":"md:pl-10"} `}><img src={image} alt={imageName} className="w-full"/></div>
      </div>
      <div className="hidden md:flex w-3 h-3 bg-primary rounded-full  mx-auto"> </div>
      </div>
  );
}

