import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../utils/productService";
import ProductModel from "../components/ProductModel";
import { useCart } from "../context/CartContext";
import { ProductColor, ProductSize } from "../types/product";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = getProductById(id || "");

  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product?.colors[0] || { id: "", name: "", value: "" }
  );

  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    product?.sizes[0] || { id: "", name: "", value: "" }
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <button
          onClick={() => navigate("/store")}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Back to Store
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity,
      selectedColor,
      selectedSize,
    });
    navigate("/cart");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <button
          onClick={() => navigate("/store")}
          className="text-blue-600 hover:text-blue-800 flex items-center"
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
          Back to Store
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3D Model Viewer */}
        <div>
          <ProductModel
            modelPath={product.modelPath}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />
        </div>

        {/* Product Details and Customization */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-500 mb-4 capitalize">{product.category}</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Color</h2>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  className={`w-10 h-10 rounded-full border-2 transition-all focus:outline-none ${
                    selectedColor.id === color.id
                      ? "border-blue-500 ring-2 ring-blue-300"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color)}
                  title={color.name}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Selected: {selectedColor.name}
            </p>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Size</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size.id}
                  className={`px-4 py-2 rounded-md border font-medium transition-all focus:outline-none ${
                    selectedSize.id === size.id
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Quantity</h2>
            <div className="flex items-center">
              <button
                className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-50"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
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
              <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center text-gray-900 font-medium">
                {quantity}
              </div>
              <button
                className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-50"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
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
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
