import * as Yup from "yup";

// Validation Schema using Yup
export const validationSchema = Yup.object({
    brand: Yup.string().required("Brand name is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .min(1, "Price must be greater than 0"),
  });

   // Form addProduct validation schema using Yup
 export const addProductValidationSchema = Yup.object({
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