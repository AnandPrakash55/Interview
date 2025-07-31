// pages/Orders.jsx
import React from "react";

const mockOrders = [
  { id: 101, date: "2025-07-28", total: 2198, status: "Delivered" },
  { id: 102, date: "2025-07-22", total: 999, status: "Shipped" },
];

const Orders = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {mockOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full border shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Total</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-2">#{order.id}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">₹{order.total}</td>
                <td className="p-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
