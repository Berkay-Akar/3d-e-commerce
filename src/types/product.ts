export interface ProductColor {
  id: string;
  name: string;
  value: string;
}

export interface ProductSize {
  id: string;
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  modelPath: string;
  colors: ProductColor[];
  sizes: ProductSize[];
}
