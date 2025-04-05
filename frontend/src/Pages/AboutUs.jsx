import React from 'react'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import BoardOfDirectors from '../components/BoardofDirectors'
import FeaturesSection from '../components/FeatureSection'
import QualitySection from '../components/QualitySection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <>
    {/* header section here  */}
    <Header text='About Us'/>
    {/* stats section here */}
    <div className='mt-24 md:mt-0 lg:mt-0'>
    <AboutSection/>

    </div>
   
    {/* Team Member Section here */}
    <BoardOfDirectors/>
    {/* feature section here */}
    <FeaturesSection/>
    {/* Quality section here */}
    <QualitySection/>
    {/* contact section here*/}
    <div className='mt-122 md:mt-0 lg:mt-0'>
    <ContactSection text="Call us for further information. AgiroCabs customer support is here to help you anytime."/>

    </div>
   
    {/* footer section here */}
    <Footer/>
    </>
  )
}

export default AboutUs