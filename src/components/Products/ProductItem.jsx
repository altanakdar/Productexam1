import React from "react";

const ProductItem = ({ setProducts, description, price, title, image, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img className="w-full h-48 object-cover md:h-64 lg:h-72" src={image} alt={title} />
    <div className="p-6 flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base">{description.slice(0,70)}</p>
      </div>
      <div className=" flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-gray-800">₺{price}</span>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ml-4">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
  );
};

export default ProductItem;
