import React from 'react'
import PurchasePrice from './PurchaseLoanComponents/PurchasePrice'
import CashPurchase from './PurchaseLoanComponents/CashPurchase'
import DownPayment from './PurchaseLoanComponents/DownPayment'
import ClosingCosts from './PurchaseLoanComponents/ClosingCosts'
import InterestRate from './PurchaseLoanComponents/InterestRate'
import PointsCharged from './PurchaseLoanComponents/PointsCharged'
import LoanLength from './PurchaseLoanComponents/LoanLength'
import AdditionalCapEx from './PurchaseLoanComponents/AdditionalCapEx'

const PurchasePlusLoan = () => {
  return (
    <div className=''>
      <PurchasePrice />
      <CashPurchase />
      <DownPayment />
      <ClosingCosts />
      <InterestRate />
      <PointsCharged />
      <LoanLength />
      <AdditionalCapEx />
    </div>
  )
}

export default PurchasePlusLoan