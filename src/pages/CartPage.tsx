import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } =
    useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-xl font-medium text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            to="/store"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li
                    key={`${item.product.id}-${item.selectedColor.id}-${item.selectedSize.id}`}
                    className="p-6"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-24 sm:h-24 w-full h-40 bg-gray-200 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              <Link
                                to={`/product/${item.product.id}`}
                                className="hover:text-blue-600"
                              >
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Color:{" "}
                              <span className="font-medium">
                                {item.selectedColor.name}
                              </span>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Size:{" "}
                              <span className="font-medium">
                                {item.selectedSize.name}
                              </span>
                            </p>
                          </div>
                          <div className="mt-4 sm:mt-0">
                            <p className="text-lg font-medium text-gray-900">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>
                            <div className="w-10 text-center text-gray-900 font-medium">
                              {item.quantity}
                            </div>
                            <button
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Link
                to="/store"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-medium text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between text-lg font-medium text-gray-900">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Including all taxes
                  </p>
                </div>
              </div>
              <button
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors"
                onClick={() => {
                  // Checkout logic would go here
                  alert("Checkout functionality would be implemented here!");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
