import productData from "../config/products.json";
import { Product } from "../types/product";

// Get all products
export const getProducts = (): Product[] => {
  return productData.products;
};

// Get single product by ID
export const getProductById = (id: string): Product | undefined => {
  return productData.products.find((product) => product.id === id);
};

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return productData.products.filter(
    (product) => product.category === category
  );
};
