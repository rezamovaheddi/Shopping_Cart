import React from "react";
import { motion } from "motion/react"
// import '@rigo-m/react-split-text'
import  Details  from "./details/Details";
const Product = ({ el, onAdd ,openModal,onSelect }) => {
  const text = el.title;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl shadow-white border-2 border-white">
      {openModal && <Details el={el} onSelect={onSelect}/>}
    <figure>
      <img
       src={el.image}
       width={150}
       alt={el.image}/>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{el.title}</h2>
      <p>{el.name}</p>
      <motion.div className="card-actions justify-end"
        whileHover={{scale: 1.1}}
        whileTap={{ scale: 0.95 }}
      >
        <div onClick={()=> onSelect(el.id)}>
        <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Show Detail</button>
        </div>
        <button className="btn btn-primary" onClick={() => onAdd(el)}>Buy Now</button>

      </motion.div>
    </div>
  </div>
  )
};

export default Product;

