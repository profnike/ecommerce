import {  Header, Input } from "@/components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircleLoader from "react-spinners/CircleLoader";
import React, { useRef, useState } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import emailjs from '@emailjs/browser';

export default function ContactUs  ()  {

   const ContactItem = ({ name, value, icon }) => {
      return (
         <div className="flex items-center gap-3 lg:gap-5">
            <div className="flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full bg-primary text-white dark:bg-primary dark:bg-opacity-30 lg:h-12 lg:w-12 lg:min-w-[3rem]">
               {icon}
            </div>
   
            <div>
               <h2 className="font-semibold text-info xl:text-lg">{name}</h2>
               <p className="text-sm text-info xl:text-base">{value}</p>
            </div>
         </div>
      );
   };



   
   const initialState = { from_name: "", reply_to: "", message: "" };
  const form = useRef();
  const sendEmailjs = useRef(null);
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const name=data.from_name
  const email=data.reply_to
  const message =data.message
  const [isButtonDisabled, setButtonDisabled] = useState(false);
   const PublicKey=process.env.NEXT_PUBLIC_Public_Key
   const ServiceId=process.env.NEXT_PUBLIC_Service_Id
   const TemplateId=process.env.NEXT_PUBLIC_Template_Id

  const handleChange = (e) => {
   const { type, name, value, checked } = e.target;
   const val = type === "checkbox" ? checked : value;
   setData({ ...data, [name]: val });
 };
 const Send = (e) => {
   e.preventDefault();
  sendEmailjs.current.click()
 };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message)
      return toast.error("Please all fields are required");
    setLoading(true);
    setButtonDisabled(true);
    emailjs
         .sendForm(ServiceId,TemplateId, form.current, {
        publicKey:PublicKey ,
      })
      .then(
        () => {
          toast.success("Your message has been successfully submitted");
          setLoading(false);
          setData(initialState);
          setButtonDisabled(false);
          
        },
        (error) => {
         toast.error("An error occured, please try again");
         setLoading(false);
         setButtonDisabled(false);
        },
      );
  };

  return (
   <div className="max-w-[85%] mx-auto mb-14 md:mb-24">
      
    {/* <div className="flex flex-col items-start md:space-x-16 md:flex-row   md:items-center justify-between  gap-7 px-8 md:px-14 py-10 md:py-20  bg-primary bg-opacity-10 rounded-b-[10%] md:rounded-b-[30%] ">
      <div className="md:w-1/3  flex flex-col justify-center   items-start  ">
      
                      <h2 className="text-5xl font-700  md:text-7xl text-start  "> Contact</h2>
                      <h2 className="text-secondary -mt-2 mb-4  text-4xl font-light   md:text-6xl">
                         Perrez
                      </h2>
                      </div>
                      <div className="md:w-2/3 flex flex-col gap-4">
                  <p className=" ">Welcome to Perrez, your one-stop online store for quality food and stylish clothing. We’re passionate about providing you with a convenient and seamless shopping experience, offering a range of carefully selected products that meet your everyday needs.</p>
                </div>
                </div> */}
                <Header LeftTitle="Contact" RightTitle="Perrez" Intro="Welcome to Perrez, your one-stop online store for quality food and stylish clothing. We’re passionate about providing you with a convenient and seamless shopping experience, offering a range of carefully selected products that meet your everyday needs."/>
                <div className="mt-14 flex flex-col-reverse lg:flex-row lg:gap-16 ">
                <div className="w-full mt-14 lg:mt-0  rounded-md bg-primary bg-opacity-5 p-4 md:p-8 lg:w-[60%]">
                
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                     <Input
                        name="from_name"
                        label="Name"
                        placeholder="Enter name"
                        data={data}
                        handleChange={handleChange}
                     />
                    
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                     <Input
                        name="reply_to"
                        label="Email"
                        type="email"
                        placeholder="Enter email address"
                        data={data}
                        handleChange={handleChange}
                       
                     />
                     
                  </div>
                  

                  <div>
                     <label className="text-sm text-info dark:text-white lg:text-base">Message</label>
                     <textarea
                        name="message"
                        value={message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Type your message"
                        className="mt-2 w-full rounded-md border-[0.5px] border-[#0d063031] bg-white p-3 text-sm font-light text-[#0D0630] outline-none transition-all duration-300 placeholder:font-light focus:border-primary dark:bg-[#222222] dark:text-white md:border md:text-base"
                     />
                  </div>
                  <button
                   disabled={isButtonDisabled}
                  className={`${
                     loading && "loading"} loading bg-primary w-fit text-white p-2 px-8 mt-4 rounded-md  font-medium hover:px-9 hover:bg-secondary hover:text-black  ${loading?" opacity-30":"cursor-pointer"}`}  onClick={Send}>{loading?<CircleLoader
                       
                        loading={loading}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />:"Send"}</button>
      <input
       type="submit"
      
       ref={sendEmailjs}
        className={`hidden bg-primary w-fit text-white p-2 px-8 mt-4 rounded-md  ${loading?"":"cursor-pointer"}`} value={`${loading?"Loading":"Send"}`} />
    </form>
    </div>


    
      <ToastContainer />
     

      <div className=" lg:mt-0 top-20 h-fit w-full space-y-5  lg:w-[40%]">
               <h2 className="border-b pb-2 text-2xl font-semibold text-info">Contact Us Today</h2>
               <ContactItem
                  name="Address"
                  value="19 Ghranian Road"
                  icon={<MapPinIcon className="w-5 text-inherit lg:w-6" />}
               />
               <ContactItem
                  name="Email"
                  value="perrez@dmail.com"
                  icon={<EnvelopeIcon className="w-5 text-inherit lg:w-6" />}
               />
               <ContactItem
                  name="Phone Number"
                  value="07099956326"
                  icon={<PhoneIcon className="w-5 text-inherit lg:w-6" />}
               />
            </div>
            </div>
    </div>
    
    
  );
};
    