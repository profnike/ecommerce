import { Card } from "@/components";
import {  sheinSteps, brandSteps, services } from "../../helpers/data";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {  Servicesheader, SecondSingleService } from "@/components";
export default function BrandBooster() {
  return (
    <>
  <SecondSingleService 
  firstParag="In the world of online business, especially in direct customer-to-vendor interactions, WhatsApp has become an invaluable tool. Posting businesses on WhatsApp Status is not just a trend—it's a powerful way to get noticed, build trust, and create meaningful connections. Whether you’re promoting products, announcing services, or offering special deals, your WhatsApp Status is the perfect platform to engage your audience instantly." 
  secondParag="At Perrez, we specialize in helping businesses elevate their brand presence using WhatsApp. With views of 0ver 1500, you can effectively boost visibility, drive engagement, and grow your customer base—right from your phone. Simply follow these stepss"
  steps={brandSteps}
  image="/images/Brad.png"
  upper="Brand"
  lower="Booster"/>
    
    </>
  );
}