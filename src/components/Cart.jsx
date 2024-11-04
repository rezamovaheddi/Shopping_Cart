import React from 'react'

export const Cart = ({item,onDelete}) => {

  return (
    <div className='flex justify-between'>            
    <span>{item.name}</span>
    <span>{item.quantity}</span>
    <span>{item.price * item.quantity}$</span>
    <button className="border-2 rounded-lg bg-red-500 w-24 text-white transition-shadow hover:shadow-xl
    "onClick={()=>onDelete(item)} >delete</button></div>
  )
}
