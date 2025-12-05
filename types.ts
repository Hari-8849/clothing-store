export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  sizes: string[];
  newArrival?: boolean;
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}
