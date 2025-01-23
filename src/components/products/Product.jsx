import React from "react";
import { motion } from "motion/react"
// import '@rigo-m/react-split-text'
import { SplitText } from "@rigo-m/react-split-text";
const Product = ({ el, onAdd }) => {
  const text = el.title;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl shadow-white border-2 border-white">
    <figure>
      <img
       src={el.images}
       width={150}
       alt={el.images}/>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{el.title}</h2>
      <p>{el.title}</p>
      <motion.div className="card-actions justify-end"
        whileHover={{scale: 1.1}}
        whileTap={{ scale: 0.95 }}
      >
        <button className="btn btn-primary" onClick={() => onAdd(el)}>Buy Now</button>
      </motion.div>
        <span className="text-red">{el.price}$</span>
    </div>
  </div>
  )
};

export default Product;

