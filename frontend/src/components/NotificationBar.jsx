import React, { useEffect, useState } from 'react'
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import { IoIosMail } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import {motion} from 'motion/react'




const NotificationBar = () => {
  const [isVisible,setIsVisible]=useState(true);
  let lastScrollTop = 0 ;

  useEffect(()=>{
    const handleScroll = ()=>{
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if(scrollTop > lastScrollTop){
        setIsVisible(false);  //scroll down to hide notification
      }else{
        setIsVisible(true);
      }

      lastScrollTop = scrollTop
    };
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    };
  },[])

  const handlefb1 = ()=>{
    open('https://www.facebook.com/sharer/sharer.php?u=https://agirocabs.com/')
  }
  const handlelinkedin=()=>{
    open('https://www.linkedin.com/company/agirocabs/')
  }
  const handleinstagram = ()=>{
    open('https://www.instagram.com/agirocabs/')

  }
  return (
    //notification pannel start and scroll animation hide the bar 
    <motion.div
    initial={{y:0}}
    animate={{y:isVisible ? 0 : -100}}
    transition={{duration:0.5,ease:"easeInOut"}}
    className=' text-sm p-1  md:text-base pointer-events-auto z-[100] flex items-center justify-between pl-4 pr-4 md:justify-between md:pl-4 md:pr-4 bg-black text-white md:p-2 will-change-scroll  '>
       {/* phone , mail,timing  */}
      <div className='md:flex md:items-center md:gap-4 '>
      <p className=' gap-2 items-center hidden md:flex  '><IoCall className='text-[#E94E3A]'/><a href="tel:+919006484700">+919006484700</a> </p>
      <p className='flex gap-2 items-center'><IoIosMail className='text-[#E94E3A]' /><a href="mailto:support@agirocabs.com" className='font-sans'>support@agirocabs.com</a> </p>
      {/* timing 24/7 */}
      <p className='hidden gap-2 items-center font-sans'><CiClock2 className='text-green-500' />Mon - Fri 10.00am - 5:00pm</p>    
      
    </div>
    {/* icons to connect social media  */}
    <div className='flex justify-between gap-4 '>
    <FaFacebook className='cursor-pointer target:_blank ' onClick={handlefb1} />
    <FaLinkedin className='cursor-pointer target:_blank ' onClick={handlelinkedin} />
    <TfiInstagram className='cursor-pointer target:_blank' onClick={handleinstagram} />

    </div>

     

    </motion.div>
  )
}

export default NotificationBar