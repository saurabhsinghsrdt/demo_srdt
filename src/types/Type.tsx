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

export interface FieldProps {
  type: string;
  label: string;
  name: string;
  validation: {
    required: boolean;
    min?: number;
    pattern?: RegExp;
    message: string;
  };
}

export interface DynamicFormProps {
  fields: FieldProps[];
  onSubmit: (values: Record<string, any>) => void; // Callback function passed from parent
  buttonText: string; // New prop for button text
}

// Define the Product type
export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

// Define the shape of the form data
export interface LoginFormValues {
    email: string;
    password: string;
}

// Define the Product type
export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

// Define the state for the cart
export interface CartState {
  items: Product[];
}
