// pages/Checkout.jsx
import React from "react";

const Checkout = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="John Doe" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="email@example.com" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="123 Street, City" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input type="tel" className="w-full p-2 border rounded" placeholder="9876543210" />
        </div>
        <div className="md:col-span-2 mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
