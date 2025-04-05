import React from 'react'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    {/* header section here  */}
    <Header text="Contact"/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact