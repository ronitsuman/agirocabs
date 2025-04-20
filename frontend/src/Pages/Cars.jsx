import React from 'react'
import CarsSection from '../components/CarSection'
import CarList from '../components/CarList'
import Trial from '../components/Trial'



const Cars = () => {
  return (
    <>
    {/* cars header  */}
    <CarsSection/>
    {/* filter and cars from api  */}
    <div className='mt-[-16px] bg-[#feffea]'>
    <CarList/>


    </div>  
    <Trial/>
    
    
    
    
    </>
  )
}

export default Cars