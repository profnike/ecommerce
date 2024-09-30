

export default function Card  ({services:{title,text,image}}) {
  

  return (
    <div
      className="justify-between flex flex-col rounded-lg bg-white hover:bg-primary p-8 hover:text-white cursor-pointer w-full border border-[#eaeaea]">
      
        <div
          className= "  rounded-lg flex  p-2  ">
         <div><img src={image} alt={title} className="w-10 h-10 h-14 mr-4"/></div><span className=" font-bold">{title}</span>
        </div>
       
        <div className="flex flex-col items-start  ">
        
      <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};


