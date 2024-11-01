import PRODUCT from "./data"
import Product from "./Product"

const ProductList = () => {
    const ProductItem = PRODUCT
  return (
    <div >
        <ul className="grid grid-cols-4 gap-5 p-6">
            {ProductItem.map((el)=>(
                <Product el={el} key={el.id}/>
            ))}
        </ul>
    </div>
  )
}
export default ProductList