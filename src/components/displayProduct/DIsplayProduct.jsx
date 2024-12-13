import { useState } from "react"
import { Cart } from "../cart/Cart"

 const DIsplayProduct = ({cartItems,setCartItems}) => {
  function handleDelete(items){
    setCartItems((item)=> item.filter((del)=> del.id !== items.id))
}
  return (
    <div className="border-2 ">
      <h1 className="text-center text-3xl">cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl text-center text-red-700 mt-4">Cart is empty</p>
      ):(
        cartItems.map(item => 
          <div key={item.id} className="border-b p-6 flex justify-between text-2xl bg-slate-300 ">
            {/* <img src={item.image} alt={item.id} className="w-36"/> */}
            <Cart
            item={item}
            onDelete={handleDelete}
            />
          </div>
        )
      )}
    </div>
  )
}

export default DIsplayProduct