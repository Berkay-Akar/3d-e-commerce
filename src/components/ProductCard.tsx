import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color) => (
                <div
                  key={color.id}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
