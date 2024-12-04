// src/components/ShoppingCart.tsx
import React, { useState } from "react";

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface ShoppingCartProps {
  product: any;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ product }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Sample product list with images
  //   const products: Product[] = [
  //     { id: 1, name: "Product 1", price: 25, img: "https://via.placeholder.com/150" },
  //     { id: 2, name: "Product 2", price: 35, img: "https://via.placeholder.com/150" },
  //     { id: 3, name: "Product 3", price: 45, img: "https://via.placeholder.com/150" }
  //   ];

  // Function to add a product to the cart
  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (id: number): void => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const getTotalPrice = (): number => {
    return cart.reduce((total, item) => total + item.price, 0);
  };



  return (
    <div className="flex justify-center items-start p-4">
      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
          <img src={product.thumbnail} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-500">${product.price}</p>
          <div
            className="flex flex-wrap justify-center items-center gap-5"
          >
            <button
              onClick={() => addToCart(product)}
              className="w-40 h-12 mt-4 bg-black text-white rounded-full hover:bg-blue-600"
            >
              Add to Cart
            </button>
            <button
              className="w-40 h-12 mt-4 bg-black text-white rounded-full hover:bg-blue-600"
            >
              View
            </button>
          </div>


        </div>
      </div>

      {/* Shopping Cart */}
    </div>
  );
};

export default ShoppingCart;
