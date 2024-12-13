import { useEffect } from "react";
import Product from "./Product";

const ProductList = ({ onAdd, products }) => {
  return (
    <div>
      <ul className="grid grid-cols-4 gap-5 p-6">
        {products.map((el) => (
          <Product el={el} key={el.id} onAdd={onAdd} />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
