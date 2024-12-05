import React, { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";

const ViewCard: React.FC<{ product: any; closePopup: () => void }> = ({
  product,
  closePopup,
}) => {
  const [view, setView] = useState<boolean>(false);

  const updateViewPopup = () => {
    const isTogglerVisible = window.innerWidth < 992; // Adjust the width as per your breakpoint
    setView(isTogglerVisible ? false : true);
  };

  useEffect(() => {
    // Set initial state based on screen size
    updateViewPopup();

    // Add event listener for window resize
    window.addEventListener("resize", updateViewPopup);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateViewPopup);
    };
  }, []);

  console.log(product, "tttttttttttttttttttt");

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
      onClick={closePopup} // Close popup when clicking outside
    >
      {/* Popup Container */}
      <div
        className={`bg-white w-full max-w-lg sm:max-w-xl h-auto sm:h-auto max-h-[80%] sm:max-h-[90%] sm:rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-out ${
          view ? "scale-100 opacity-100" : "scale-75 opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
      >
        {/* Header Section */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Product Details</h2>
          <button
            onClick={closePopup}
            className="text-gray-600 hover:text-gray-800 transition"
          >
            ✖
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <ShoppingCart product={product} addToCard={3} />
          
          {/* Description Section */}
          {product?.description && (
            <div className="text-sm text-gray-700 mt-4">
              <h3 className="font-medium text-gray-800">Description:</h3>
              <p>{product.description}</p>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="p-4 border-t flex justify-end">
          <button
            onClick={closePopup}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
