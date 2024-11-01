import React from 'react'

const Product = ({el}) => {
  return (
    <div>
        <div className=''>
            <div className='border-4 rounded-sm'>
                <img className='w-80 p-2 m-4' src={el.image} width={100} alt={el.image}/>
            <div className='flex justify-between'>
             <span className='text-2xl font-bold '>{el.name}</span>
             <span>{el.price}$</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Product