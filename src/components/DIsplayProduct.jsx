import { useState } from "react"

 const DIsplayProduct = ({cartItems}) => {
  return (
    <div className="border-2">
      <h1 className="text-center text-3xl">cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl text-center text-red-700 mt-4">Cart is empty</p>
      ):(
        cartItems.map(item => 
          <div key={item.id} className="border-b p-6 flex justify-between text-2xl bg-slate-300">
            {/* <img src={item.image} alt={item.id} className="w-36"/> */}
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>{item.price * item.quantity}$</span>
            <button className="border-2 rounded-lg bg-red-500 w-24 text-white transition-shadow hover:shadow-xl
            ">delete</button>
          </div>
        )
      )}
    </div>
  )
}

export default DIsplayProduct