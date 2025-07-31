import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
