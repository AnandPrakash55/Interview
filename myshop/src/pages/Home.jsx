// pages/Home.jsx
import React from "react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  { id: 1, name: "Product A", price: 999, image: "/assets/product-a.jpg" },
  { id: 2, name: "Product B", price: 1499, image: "/assets/product-b.jpg" },
  { id: 3, name: "Product C", price: 799, image: "/assets/product-c.jpg" },
];

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
