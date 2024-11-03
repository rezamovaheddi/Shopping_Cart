import React from 'react'
import DIsplayProduct from './DIsplayProduct'

const Product = ({el ,onAdd}) => {
  return (
    <div>
        <div className=''>
            <div className='border-4 rounded-md'>
                <img className='w-80 p-2 m-4' src={el.image} width={100} alt={el.image}/>
            <div className='flex justify-between'>
             <span className='text-2xl font-semibold ml-2'>{el.name}</span>
             <span className='text-red-600 font-semibold'>{el.price}$</span>
            </div>
            <div className='flex justify-center items-center w-full bg-slate-300 p-3 rounded-md transition-shadow transition-colors hover:shadow-xl hover:bg-green-400'>
              <button className='font-semibold text-xl text-slate-800' onClick={()=> onAdd(el)}>buy</button>
            </div>
            </div>
          
        </div>
    </div>
  )
}

export default Product