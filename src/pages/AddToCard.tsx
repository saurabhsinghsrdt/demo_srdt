import React, { useState } from 'react'

const AddToCard = () => {


  // Function to remove a product from the cart
  // const removeFromCart = (id: number): void => {
  //   setCart(cart.filter((item) => item.id !== id));
  // };

  // Calculate total price
  // const getTotalPrice = (): number => {
  //   return cart.reduce((total, item) => total + item.price, 0);
  // };


  return (
    <div>
        <div className="ml-8 p-4 bg-gray-100 rounded-lg w-80">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {/* <div className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div> */}

        <div className="mt-4 flex justify-between">
          <span>Total:</span>
          {/* <span>${getTotalPrice()}</span> */}
        </div>
      </div>
    </div>
  )
}

export default AddToCard;