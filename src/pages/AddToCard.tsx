import {useSelector } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';

const AddToCard = () => {

  const cartItems = useSelector((state: any) => state.cart.items);

  // Calculate total price of cart
  const getTotalPrice = (): number => {
    return cartItems.reduce((total:any, item:any) => total + item.price, 0);
  };


  return (
    <div>
        <div className="p-4 bg-gray-100 rounded-lg w-[100%]">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <div className="mt-4 flex">
          <h2 className='mb-4'>Total: </h2>
          <h2>${getTotalPrice()}</h2>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          {cartItems.length > 0 ? (
            cartItems.map((item:any) => (
                <ShoppingCart product={item} addToCard={1}/>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddToCard;