import React, { useState } from "react";
import { getProducts } from "../utils/productService";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";

const StorePage: React.FC = () => {
  const allProducts = getProducts();
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get unique categories
  const categories = ["all", ...new Set(allProducts.map((p) => p.category))];

  // Filter products by category
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter((p) => p.category === category));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Store</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="font-medium text-gray-900 mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left px-3 py-2 rounded transition ${
                    selectedCategory === category
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => filterByCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try changing your filters or check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
