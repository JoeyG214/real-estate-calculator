import React from 'react'
import GrossRent from './RentalIncomeComponents/GrossRent'
import OtherIncome from './RentalIncomeComponents/OtherIncome'

const RentalIncome = () => {
  return (
    <div className=''>
      <GrossRent />
      <OtherIncome />
    </div>
  )
}

export default RentalIncome