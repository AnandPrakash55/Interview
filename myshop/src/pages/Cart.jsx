// pages/Cart.jsx
import React from "react";

const cartItems = [
  { id: 1, name: "Product A", quantity: 2, price: 999 },
  { id: 2, name: "Product B", quantity: 1, price: 1499 },
];

const Cart = () => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p>Qty: {item.quantity}</p>
                </div>
                <p>₹{item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold">Total: ₹{total}</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
