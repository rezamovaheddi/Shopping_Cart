import { useState } from "react"
import PRODUCT from "./data"
// import DIsplayProduct from "./DIsplayProduct"
import Product from "./Product"

const ProductList = ({onShow,onAdd}) => {
    const ProductItem = PRODUCT

  return (
    <div >
        <ul className="grid grid-cols-4 gap-5 p-6">
            {ProductItem.map((el)=>(
                <Product el={el} key={el.id} onShow={onShow}onAdd={onAdd}/>
            ))}
        </ul>
    </div>
  )
}
export default ProductList