export default function Input ({ name, type, label, placeholder, data, handleChange  })  {
    return (
       <div className="w-full">
          {label && <label className="text-sm text-info lg:text-base">{label}</label>}
          <input
             type={type || "text"}
             name={name}
            value={data[name]}
            placeholder={placeholder}
            onChange={handleChange}
             className="mt-2 w-full rounded-md border-[0.5px] border-[#0d063031] !bg-white p-3 text-sm font-light text-[#0D0630] outline-none transition-all duration-300 placeholder:font-light focus:border-primary  md:border lg:text-base"
          />
       </div>
    );
 };
 
 