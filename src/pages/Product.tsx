import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsLoader } from "../store/userSlice";
import ShoppingCart from "../components/ShoppingCart";
import AddProduct from "./AddProduct";
import ReactDOM from "react-dom";

const Product = () => {
  const dispatch = useDispatch();
  const [addProductPopup, setAddProductPopup] = useState<boolean>(false);
  const { loading, data, error } = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(productsLoader());
  }, [dispatch]);

  // Show loading spinner
  if (loading) {
    return (
      <div className="centered-container">
        <img
          src="https://media.tenor.com/kMCwoAD4RNAAAAAj/loading-gif-loading.gif"
          alt="Loading"
          className="centered-image"
        />
      </div>
    );
  }

  // Show error message
  if (error) {
    return <div className="text-center text-red-600">{error || "Error occurred!"}</div>;
  }

  // Modal content for AddProduct
  const modalContent = addProductPopup && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setAddProductPopup(false)} // Close popup when clicking outside
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md">
        <AddProduct closePopup={() => setAddProductPopup(false)} />
      </div>
    </div>
  );

  return (
    <div className="mx-auto px-4">
      {/* Add Product Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setAddProductPopup(true)}
          className="w-full sm:w-40 mt-4 h-12 sm:mr-9 bg-black text-white rounded-full hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-4 mt-6">
        {data?.products &&
          data.products.map((item: any, index: number) => (
            <ShoppingCart key={index} product={item} addToCard={2} />
          ))}
      </div>

      {/* Render AddProduct Modal */}
      {ReactDOM.createPortal(modalContent, document.getElementById("modal_root")!)}
    </div>
  );
};

export default Product;
