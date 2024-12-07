import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../util/ValidationSchema";

const ViewCard: React.FC<{ product: any; closePopup: () => void }> = ({
  product,
  closePopup,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [previewImage, setPreviewImage] = useState(product?.thumbnail || "");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFieldValue("thumbnail", file); // Set file in Formik state
    }
  };

  const handleSubmit = (values: any) => {
    console.log("Updated Product:", values);
    setIsEditMode(false); // Exit edit mode after saving
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
      onClick={closePopup} // Close popup when clicking outside
    >
      {/* Popup Container */}
      <div
        className="bg-white w-[95%] sm:w-[85%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-auto max-h-[80vh] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
      >
        {/* Header Section */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-medium text-gray-800">
            {isEditMode ? "Edit Product Details" : "Product Details"}
          </h2>
          <div className="flex space-x-3">
            {!isEditMode && (
              <button
                onClick={() => setIsEditMode(true)}
                className="text-blue-600 hover:text-blue-800 transition rounded-lg text-sm"
              >
                ✎ Edit
              </button>
            )}
            <button
              onClick={closePopup}
              className="text-gray-600 hover:text-gray-800 transition rounded-lg text-sm"
            >
              ✖ Close
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[70vh]">
          {isEditMode ? (
            <Formik
              initialValues={{
                brand: product?.brand || "",
                description: product?.description || "",
                price: product?.price || "",
                thumbnail: product?.thumbnail || "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="space-y-4">
                  {/* Thumbnail Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Thumbnail
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setFieldValue)}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {previewImage && (
                      <div className="mt-4">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg border border-gray-200 shadow-sm"
                        />
                      </div>
                    )}
                  </div>

                  {/* Brand Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand
                    </label>
                    <Field
                      name="brand"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-300 focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="brand"
                      component="div"
                      className="text-xs text-red-500 mt-1"
                    />
                  </div>

                  {/* Description Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <Field
                      name="description"
                      as="textarea"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-300 focus:ring focus:ring-blue-200"
                      rows={4}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-xs text-red-500 mt-1"
                    />
                  </div>

                  {/* Price Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price
                    </label>
                    <Field
                      name="price"
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-300 focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-xs text-red-500 mt-1"
                    />
                  </div>

                  {/* Submit and Cancel Buttons */}
                  <div className="flex justify-end space-x-2 mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditMode(false);
                        setPreviewImage(product?.thumbnail || ""); // Revert to old image
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                    >
                      {isSubmitting ? "Saving..." : "Save"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <div className="space-y-4">
              {/* Thumbnail Display */}
              {product?.thumbnail && (
                <div>
                  <img
                    src={product?.thumbnail}
                    alt="Product Thumbnail"
                    className="w-full h-48 object-cover rounded-lg border border-gray-200 shadow-sm"
                  />
                </div>
              )}
              <div>
                <h3 className="text-sm font-medium text-gray-800">Brand:</h3>
                <p className="text-sm text-gray-700">{product?.brand || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">Description:</h3>
                <p className="text-sm text-gray-700">{product?.description || "No description available"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">Price:</h3>
                <p className="text-sm text-gray-700">${product?.price || "0.00"}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewCard;