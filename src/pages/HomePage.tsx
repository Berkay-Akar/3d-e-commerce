import React from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../utils/productService";
import ProductCard from "../components/ProductCard";

const HomePage: React.FC = () => {
  const featuredProducts = getProducts().slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 md:p-16 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Experience Products in 3D
            </h1>
            <p className="text-xl mb-8">
              Shop our exclusive collection with interactive 3D previews.
              Customize colors and sizes before you buy.
            </p>
            <Link
              to="/store"
              className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Products
          </h2>
          <Link
            to="/store"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Shop with 3D Previews?
            </h2>
            <p className="text-gray-600 mb-8">
              Our unique 3D technology lets you see products from every angle
              and customize them to your preference before buying.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                  Interactive Viewing
                </h3>
                <p className="text-gray-600 text-center">
                  Rotate and zoom to see every detail
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                  Customize Colors
                </h3>
                <p className="text-gray-600 text-center">
                  See how different colors look in real-time
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                  Shop Confidently
                </h3>
                <p className="text-gray-600 text-center">
                  Know exactly what you're getting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
