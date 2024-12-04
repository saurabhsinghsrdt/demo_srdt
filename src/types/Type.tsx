// src/types.ts
export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  // Add more properties as needed based on the actual API response
}

export interface ProductsResponse {
  products: Product[]; // Assuming the API response has a `products` field that is an array of products
}
