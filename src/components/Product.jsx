import React from "react";
const Product = ({ el, onAdd }) => {
  return (
    <div>
      <div className="shadow-lg h-full  bg-gray-50 hover:bg-base-200 shadow-gray-400 rounded-2xl ">
        <div className="">
          <img
            className="w-16 p-1 m-2 md:w-32 lg:w-48"
            src={el.image}
            width={100}
            alt={el.image}
          />
          <span>{el.title}</span>
          <div className="flex justify-between">
            <span className="text-xs font-bold ml-2">{el.name}</span>
            <span className="text-red-600 font-semibold">{el.price}$</span>
          </div>
          <div className="flex justify-center items-center w-full bg-slate-300 p-3 rounded-md transition-shadow transition-colors hover:shadow-xl hover:bg-green-400">
            <button
              className="font-semibold text-xl  text-slate-800"
              onClick={() => onAdd(el)}
            >
              buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
