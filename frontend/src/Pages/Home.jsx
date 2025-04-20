import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NotificationBar from '../components/NotificationBar';
import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import MovingText from '../components/MovingText';
import FeaturesSection from '../components/FeatureSection';
import StatsSection from '../components/StatsSection';
import FleetSection from '../components/FleetSection';
import AdventureSection from '../components/AdventureSection';
import LatestNews from '../components/LatestNews';
import Accordion from '../components/Accordion';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  // Scroll tracking
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into width percentage
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // scroll top 
  const heroRef = useRef(null)

  return (
    <div>
      {/* Top Fixed Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-2 bg-[#E94E3A] z-50"
        style={{ width }}
      />
      
      {/* Notification Panel */}
      <NotificationBar />
      
      <div ref={heroRef} >
        {/* Navigation Panel */}
        <NavigationBar />
        
        {/* Hero Section Booking Form */}
        <Hero />
      </div>
      
      {/* Moving Text */}
      <div className=" w-full lg:h-30">
        <MovingText bgColor='bg-black' textColor='text-green-500'/>
      </div>
        {/* Car Listing */}
        <div  className='bg-[#feffea] '>
        <FleetSection scrollToHero={()=>heroRef.current?.scrollIntoView({behavior:'smooth'})} />

        </div>
     
      
 
      
      {/* Stats Section */}
      <StatsSection />
      
    

           {/* Feature Section */}
           <FeaturesSection />
      
      
      {/* Adventure Section */}
      <AdventureSection />
      
      {/* News Section */}
      {/* <LatestNews /> */}
      
      {/* Question Section */}
      <div className='bg-[#feffea] '>
      <Accordion />

      </div>
      
      
      {/* Contact Section */}
      <ContactSection text=" AgiroCabs customer care is here to help you  anytime." />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
