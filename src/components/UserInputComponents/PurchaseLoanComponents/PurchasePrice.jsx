import React from 'react'
import { BsPencil } from 'react-icons/bs'

const PurchasePrice = () => {
  return (
    <div className='flex flex-col justify-between w-80 h-44 p-4 bg-zinc-700 shadow-slate-600 shadow-2xl rounded-xl'>
      <BsPencil className=' relative w-14 h-14 p-2 left-56 bottom-2  fill-blue-600 cursor-pointer'/>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-white font-bold text-3xl'>$0</p>
        <p className='text-white font-semibold text-md'>Purchase Price</p>
      </div>
      <div>
        <input className='w-72' type='range' name='purchase-price' id='purchase-price' />
      </div>
    </div>
  )
}

export default PurchasePrice