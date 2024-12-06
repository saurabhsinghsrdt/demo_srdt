import React from "react";
import ShoppingCart from "./ShoppingCart";

const ViewCard: React.FC<{ product: any; closePopup: () => void }> = ({
  product,
  closePopup,
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
      onClick={closePopup} // Close popup when clicking outside
    >
      {/* Popup Container */}
      <div
        className="bg-white w-[90%] max-w-xs sm:max-w-sm md:max-w-md h-auto max-h-[60vh] sm:max-h-[70vh] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
      >
        {/* Header Section */}
        <div className="p-3 border-b flex justify-between items-center">
          <h2 className="text-sm font-medium text-gray-800">Product Details</h2>
          <button
            onClick={closePopup}
            className="text-gray-600 hover:text-gray-800 transition rounded-lg text-sm"
          >
            ✖
          </button>
        </div>

        {/* Content Section */}
        <div className="p-3 overflow-y-auto max-h-[50vh] sm:max-h-[60vh]">
          {/* ShoppingCart Section */}
          <ShoppingCart product={product} addToCard={3} />

          {/* Description Section */}
          {product?.description && (
            <div className="text-xs text-gray-700 mt-2">
              <h3 className="font-medium text-gray-800">Description:</h3>
              <p>{product?.description}</p>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="p-3 border-t flex justify-end">
          <button
            onClick={closePopup}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
