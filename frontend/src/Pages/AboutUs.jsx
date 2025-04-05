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
    <AboutSection/>
    {/* Team Member Section here */}
    <BoardOfDirectors/>
    {/* feature section here */}
    <FeaturesSection/>
    {/* Quality section here */}
    <QualitySection/>
    {/* contact section here*/}
    <ContactSection text="Call us for further information. AgiroCabs customer support is here to help you anytime."/>
    {/* footer section here */}
    <Footer/>
    </>
  )
}

export default AboutUs