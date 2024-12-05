import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/CartReducer";
import ViewCard from "./ViewCard";

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}


const ShoppingCart: React.FC<{ product: any, addToCard:number }> = ({ product,addToCard }) => {

  const dispatch = useDispatch();

  // Handle Add to Cart
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
  };

    // Handle Remove from Cart
    const handleRemoveFromCart = (productId: number) => {
      dispatch(removeFromCart(productId)); // Dispatch the action to remove the product from the cart
    };

  const [productDetails, setProductDetails] = useState<object>({});
  const [viewProduct, setViewProduct] = useState<boolean>(false);

  return (
    <div className="py-4">
      {/* Product List */}
      <div className="flex flex-wrap justify-center gap-4">
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl"
        >
          <img
            src={product.thumbnail}
            alt={product.brand}
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{product.brand || "No Name"
          }</h3>
          <p className="text-gray-500">${product.price}</p>
          <div className="flex flex-col gap-5"
          >
            {addToCard === 1 ? 
            (
            <button
            onClick={() => handleRemoveFromCart(product.id)}
             className="w-40 h-12 bg-black text-white rounded-full hover:bg-blue-600">
              Remove
            </button>
            ): (addToCard === 2 ?
              <div className="flex gap-x-4">
            <button
            onClick={()=> {setViewProduct(true),setProductDetails(product)}}
            className="text-sm bg-black text-white rounded-full hover:bg-blue-600">
              View
            </button>
            <button
              onClick={() => handleAddToCart(product)}
              className="text-sm bg-black text-white rounded-full hover:bg-blue-600"
            >
              Add to Cart
            </button>
            </div>: null
            )}
          </div>
        </div>
      </div>
      {viewProduct && <ViewCard product={productDetails} closePopup={()=> setViewProduct(false)}/>}
    </div>
  );
};

export default ShoppingCart;
