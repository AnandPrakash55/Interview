// pages/ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // You would fetch product details by ID here

  const mockProduct = {
    id,
    name: "Sample Product",
    price: 1299,
    description: "This is a detailed description of the product.",
    image: "/assets/product-a.jpg",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={mockProduct.image} alt={mockProduct.name} className="w-full rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-2">{mockProduct.name}</h2>
          <p className="text-lg text-gray-600 mb-4">₹{mockProduct.price}</p>
          <p className="mb-6">{mockProduct.description}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
