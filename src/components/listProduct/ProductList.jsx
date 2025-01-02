import { useEffect, useRef, useState } from "react";
import Product from "../products/Product";

const ProductList = ({ onAdd, products }) => {
  const [selectBy,setSelectBy] = useState('name')  
  let selectedItems;
  if(selectBy==='name') selectedItems = [...products].sort()
  selectedItems = [...products].sort((a, b) => a.price - b.price)
  return (
    <div>
      <div className="flex justify-center items-center mt-4">
          <select 
            value={selectBy}
            onChange={e=> setSelectBy(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
      </div>
      <ul className="grid grid-cols-4 gap-5 p-6">
        {selectedItems.map((el) => (
          <Product el={el} key={el.id} onAdd={onAdd} />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
