import { Product, ProductColor, ProductSize } from "./product";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
