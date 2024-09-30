

export default function Card  ({services:{title,text,image}}) {
  

  return (
    <div
      className="justify-between flex flex-col rounded-lg bg-white hover:bg-primary p-8 hover:text-white cursor-pointer w-full border border-[#eaeaea]">
      
        <div
          className= "text-white  rounded-lg flex  p-2  ">
         <div><img src={image} alt={title} className="w-14 h-14 mr-2"/></div><span className="text-black font-bold">{title}</span>
        </div>
       
        <div className="flex flex-col items-start  ">
        
      <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};


