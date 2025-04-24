import React from 'react'
import accenture_logo from '../../assets/accenture_logo.svg'
import adobe_logo from '../../assets/adobe_logo.svg'
import microsoft_logo from '../../assets/microsoft_logo.svg'
import walmart_logo from '../../assets/walmart_logo.svg'
import paypal_logo from '../../assets/paypal_logo.svg'

const Companies = () => {
  return (
    <div className='pt-16'> 
    <p className='text-base text-grey-500'>Trusted by learners from</p>
    <div className='flex flex-wrap items-center justify-center gap-5 md:gap-16 md:mt-10 mt-5'>
    <img src={accenture_logo} alt="accenture_logo" className='w-20 md:w-28'/>
    <img src={adobe_logo} alt="adobe_logo" className='w-20 md:w-28'/>
      <img src={microsoft_logo} alt="Microsoft" className='w-20 md:w-28'/>
      <img src={walmart_logo} alt="walmart" className='w-20 md:w-28'/>
      <img src={paypal_logo} alt="paypal_logo" className='w-20 md:w-28'/>
    </div>
    </div>
  )
}

export default Companies
