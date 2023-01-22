import React from 'react'
import PurchasePlusLoan from './UserInputComponents/PurchasePlusLoan'
import RentalIncome from './UserInputComponents/RentalIncome'
import RentalCosts from './UserInputComponents/RentalCosts'
import TaxesPlusInsurance from './UserInputComponents/TaxesPlusInsurance'
import Utilities from './UserInputComponents/Utilities'

const UserInputs = () => {
  return (
    <section id='user-inputs' className=''>
      <PurchasePlusLoan />
      <RentalIncome />
      <RentalCosts />
      <TaxesPlusInsurance />
      <Utilities />
    </section>
  )
}

export default UserInputs
