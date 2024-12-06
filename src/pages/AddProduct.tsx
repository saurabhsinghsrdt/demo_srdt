import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postProduct } from "../store/userSlice";
import { useDispatch } from "react-redux";

const AddProduct: React.FC<{ closePopup: () => void }> = ({ closePopup }) => {
    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    // Form validation schema using Yup
    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        price: Yup.number().required("Price is required").positive("Price must be positive"),
        description: Yup.string().optional(),
        image: Yup.mixed()
            .required("Image is required")
            .test(
                "fileSize",
                "File size is too large",
                (value) => !value || (value instanceof File && value.size <= 5 * 1024 * 1024) // 5MB max
            ),
        category: Yup.string().required("Category is required"),
    });

    const handleSubmit = (obj: any) => {
        const newProduct = {
            title: obj.title,
            price: obj.price,
            description: obj.description,
            image: obj.image.name,
            category: obj.category,
        };

        dispatch(postProduct(newProduct));
    };

    // Input object for dynamic form fields
    // const inputObj = [
    //     {
    //         type: "number",
    //         label: "Age",
    //         name: "age",
    //         validation: {
    //             required: true,
    //             min: 0,
    //             message: "Age must be a positive number",
    //         },
    //     },
    //     {
    //         type: "text",
    //         label: "Title",
    //         name: "title",
    //         validation: {
    //             required: true,
    //             min: 2,
    //             message: "Title must have at least 2 characters",
    //         },
    //     },
    //     {
    //         type: "email",
    //         label: "Email",
    //         name: "email",
    //         validation: {
    //             required: true,
    //             pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    //             message: "Invalid email address",
    //         },
    //     },
    // ];


    // const handleFormSubmit = (formValues: Record<string, any>) => {
    //     console.log("Form Submitted with values:", formValues);
    // };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
            onClick={closePopup} // Close popup when clicking outside
        >
            {/* Popup Container */}
            <div
                className="bg-white w-[90%] max-w-xs sm:max-w-sm md:max-w-md h-auto max-h-[70vh] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-out"
                onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
            >
                {/* Header Section */}
                <div className="p-3 border-b flex justify-between items-center">
                    <h2 className="text-sm font-medium text-gray-800">Add Product</h2>
                    <button
                        onClick={closePopup}
                        className="text-gray-600 hover:text-gray-800 transition rounded-lg text-sm"
                    >
                        ✖
                    </button>
                </div>

                {/* Form Section */}

                {/* <DynamicForm
                    fields={inputObj}
                    onSubmit={handleFormSubmit}
                    buttonText="Submit Form" // Passing button text as a prop
                /> */}


                <div className="p-4 overflow-y-auto max-h-[60vh]">
                    <Formik
                        initialValues={{
                            title: "",
                            price: "",
                            description: "",
                            image: null,
                            category: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSubmit(values);
                            closePopup(); // Close popup after form submission
                        }}
                    >
                        {({ setFieldValue }) => (
                            <Form>
                                <div className="space-y-3">
                                    {/* Title Field */}
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                            Product Title
                                        </label>
                                        <Field
                                            type="text"
                                            id="title"
                                            name="title"
                                            className="mt-1 p-2 w-full border text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        />
                                        <ErrorMessage
                                            name="title"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />
                                    </div>

                                    {/* Price Field */}
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <Field
                                            type="number"
                                            id="price"
                                            name="price"
                                            className="mt-1 p-2 w-full border text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        />
                                        <ErrorMessage
                                            name="price"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />
                                    </div>

                                    {/* Description Field */}
                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Description
                                        </label>
                                        <Field
                                            as="textarea"
                                            id="description"
                                            name="description"
                                            className="mt-1 p-2 w-full border text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                            rows={3}
                                        />
                                    </div>

                                    {/* Image Upload Field */}
                                    {/* <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Image Upload
                    </label>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFieldValue("image", file);
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setImagePreview(reader.result as string);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </div> */}

                                    {/* Category Field */}
                                    {/* <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <Field
                      type="text"
                      id="category"
                      name="category"
                      className="mt-1 p-2 w-full border text-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div> */}

                                    <div className="flex justify-end mt-4">
                                        <button
                                            type="submit"
                                            className="px-3 py-1 bg-black text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none"
                                        >
                                            Add Product
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

                {/* Footer Section */}
                {/* <div className="p-3 border-t flex justify-end">
          <button
            onClick={closePopup}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200"
          >
            Close
          </button>
        </div> */}
            </div>
        </div>
    );
};

export default AddProduct;