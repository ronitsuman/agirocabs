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

  const handlefb = ()=>{
    open('')
  }
  const handlelinkedin=()=>{
    open('https://www.linkedin.com/company/agirocabs/')
  }
  const handleinstagram = ()=>{
    open('')

  }
  return (
    <motion.div
    initial={{y:0}}
    animate={{y:isVisible ? 0 : -100}}
    transition={{duration:0.5,ease:"easeInOut"}}
    className=' text-sm p-1  md:text-base flex items-center justify-between pl-4 pr-4 md:justify-between md:pl-4 md:pr-4 bg-black text-white md:p-2 will-change-scroll '>
      <div className='md:flex md:items-center md:gap-4'>
      <p className='flex gap-2 items-center  '><IoCall className='text-green-500'/><a href="tel:+919006484700">+919006484700</a> </p>
      <p className='flex gap-2 items-center'><IoIosMail className='text-green-500' /><a href="mailto:support@agirocabs.com">support@agirocabs.com</a> </p>
      <p className='flex gap-2 items-center'><CiClock2 className='text-green-500' />Mon - Fri 10.00 - 17:00</p>
    </div>
    <div className='flex justify-between gap-4 '>
    <FaFacebook className='cursor-pointer' onClick={handlefb} />
    <FaLinkedin className='cursor-pointer' onClick={handlelinkedin} />
    <TfiInstagram className='cursor-pointer' onClick={handleinstagram} />

    </div>

     

    </motion.div>
  )
}

export default NotificationBar