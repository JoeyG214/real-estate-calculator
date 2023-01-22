import React from 'react'
import MaintenanceCosts from './RentalCostsComponents/MaintenanceCosts'
import ManagementFees from './RentalCostsComponents/ManagementFees'
import Vacancy from './RentalCostsComponents/Vacancy'
import HOAFees from './RentalCostsComponents/HOAFees'

const RentalCosts = () => {
  return (
    <div className=''>
      <MaintenanceCosts />
      <ManagementFees />
      <Vacancy />
      <HOAFees />
    </div>
  )
}

export default RentalCosts