import React from 'react'
import PropertyTax from './TaxesInsuranceComponents/PropertyTax'
import HomeInsurance from './TaxesInsuranceComponents/HomeInsurance'
import MortgageInsurance from './TaxesInsuranceComponents/MortgageInsurance'

const TaxesPlusInsurance = () => {
  return (
    <div>
      <PropertyTax />
      <HomeInsurance />
      <MortgageInsurance />
    </div>
  )
}

export default TaxesPlusInsurance