import {  useState } from "react";
import Product from "../products/Product";

const ProductList = ({ onAdd, products, onSelect }) => {
  const [IsopenModal ,setIsOpenModal] = useState(false)
  const [selectBy,setSelectBy] = useState('')  
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
      <ul className="grid grid-cols-4 gap-5 p-6 ">
        {selectedItems.map((el) => (
          <Product onSelect={onSelect} openModal={IsopenModal} setOpenModal={setIsOpenModal} el={el} key={el.id} onAdd={onAdd} />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
