import { useEffect, useState } from "react";
import ProductList from "./components/listProduct/ProductList";
import  Error  from "./components/messages/Error";
import DIsplayProduct from "./components/displayProduct/DIsplayProduct";
import Axios from "axios";
import IsLoading from "./components/messages/Loading";
import Navbar from './components/header/Navbar'
// import './App.css'
function App() {
  const [addProduct, setAddProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState('')
  const [query,setQuery] = useState('')
  useEffect(() => {
    const store = async () => {
      try{
        setIsLoading(true)
        const res =  await Axios.get(`https://fakestoreapi.com/products?title=${query}`)
        setAddProduct(res.data)

        setIsLoading(false)
      }catch(err){
        console.error(err)
        setError(err)
      }
    }

      store();
  }, [query]);

  function AddToCart(products) {
    setAddProduct((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === products.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...products, quantity: +1 }];
      }
    });

    setCartItems((prevCart) => {
      const existingCartItem = prevCart.find((item) => item.id === products.id);
      return existingCartItem
      ? prevCart.map((item) =>
        item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...prevCart, { ...products, quantity: 1 }];
    });
  }
  // function deleteItem(items){
  //   setCartItems(cartItems.map(item=>
  //     item.filter(value=>
  //         value.id !== items.id
  //     )
  //   ))
  // }

  return (
    <div>
      <Navbar query={query} setQuery={setQuery}/>
      {/* { isLoading ? <IsLoading/> : <ProductList
        onAdd={AddToCart}
        products={addProduct}
        setAddProduct={setAddProduct}
      ></ProductList>} */}
      {error && <Error message={error}/>}
      {isLoading && <IsLoading />}
      {!error && !isLoading && 
      <ProductList
        onAdd={AddToCart}
        products={addProduct}
        setAddProduct={setAddProduct}
      ></ProductList>}
      
      <DIsplayProduct 
    cartItems={cartItems}           setCartItems={setCartItems}

    />
    </div>
  );
}

export default App;
