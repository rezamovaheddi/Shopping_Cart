import { useState } from 'react'
import viteLogo from '/vite.svg'
import ProductList from './components/ProductList'
import PRODUCT from './components/data'
import DIsplayProduct from './components/DIsplayProduct'
// import './App.css'
function App() {
  const [addProduct,setAddProduct] = useState(PRODUCT)
  const [cartItems,setCartItems] = useState([])


function AddToCart(products) {
 setAddProduct(prevItems => {
      const existingProduct = prevItems.find(item => item.id === products.id);
      if (existingProduct) {
          return prevItems.map(item =>
          item.id === products.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else [...prevItems, { ...products, quantity: 1 }];
    });

    setCartItems(preveCart => {
      const isCartToItem = preveCart.find(item=> item.id === products.id)
      if(isCartToItem){
         return preveCart.map(item=> 
          item.id === products.id
          ? {...item,quantity:item.quantity + 1}
          : item
        )
      }else{
        return [...preveCart, {...products,quantity:1}]
      }
    })
}
// function deleteItem(items){
//   setCartItems(value=>{
//     return value.filter(item => item.id == items.id)
//   })
// }

  return <div>
    <header className='w-full bg-black'>
      <ul className='text-white flex justify-between'>
        <li className='m-2 border-2 rounded-md bg-white text-black w-12 text-center font-medium shadow-inner shadow-black hover:bg-lime-400'>login</li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 m-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </ul>
      <div className='flex justify-center items-center p-16'>
        <h1 className='text-white font-semibold text-4xl mb-5'>Reza Shop</h1>
      </div>
    </header>
    <ProductList onAdd={AddToCart} products={addProduct}> 
    </ProductList>

     <DIsplayProduct cartItems={cartItems}/>
  </div>
}

export default App
