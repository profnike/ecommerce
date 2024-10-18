export default function Header({LeftTitle,RightTitle,Intro}) {
    
  return (
    <div className="flex flex-col items-start md:space-x-16 md:flex-row   md:items-center justify-between  gap-7 px-8 md:px-14 py-10 md:py-20  bg-primary bg-opacity-10 rounded-b-[10%] md:rounded-b-[30%] ">
    <div className="md:w-1/3  flex flex-col justify-center   items-start  ">
    
                    <h2 className="text-5xl font-700  md:text-7xl text-start  "> {LeftTitle}</h2>
                    <h2 className="text-secondary -mt-2 mb-4  text-4xl font-light   md:text-6xl">
                       {RightTitle}
                    </h2>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-4">
                <p className=" ">{Intro}</p>
              </div>
              </div>
  );
}
