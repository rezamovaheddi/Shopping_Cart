import React, { useState } from 'react'

export const Cart = ({item,onDelete}) => {
  const [addItem,setAddItem] = useState(0)
  return (
  <div className='flex justify-around'>            
      <img width={150} height={100} className='mr-4 rounded-lg' src={item.image} alt={item.name} />
      <span className='flex text-center mr-9'>{item.name}</span>
        <button className='bg-slate-900 text-red-400 p-2' onClick={()=> setAddItem(addItem+item.quantity)}>+</button>
        <br />
      <span>{item.quantity + addItem}</span>
      <button className='bg-slate-900 text-red-400 p-2' onClick={()=> setAddItem(addItem -item.quantity)}>-</button>
    <span>{addItem <= 1 ? item.price : item.price *addItem}$</span>
    <button className="border-2 rounded-lg bg-red-500 w-24 text-white transition-shadow hover:shadow-xl
    "onClick={()=>onDelete(item)} >delete</button>  
  </div>
  )
}
