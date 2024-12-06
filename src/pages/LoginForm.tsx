import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Define the shape of the form data
interface LoginFormValues {
    email: string;
    password: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const LoginForm: React.FC = () => {
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Initial form values
    const initialValues: LoginFormValues = {
        email: '',
        password: '',
    };

    // Form submission handler
    const onSubmit = (values: LoginFormValues) => {debugger
        console.log('Form submitted with:', values);
        if(values.email === "saurabh@gmail.com" && values.password === "12345678"){
            localStorage.setItem("email",values.email);
            navigate("/")
        }else{
            alert('Please enter a valid email and password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
                    Welcome Back!
                </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {() => (
                        <Form>
                            {/* Email Field */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-4 relative">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Password
                                </label>
                                <Field
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute cursor-pointer right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    {showPassword ?
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                                            </svg>
                                        </> :
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                            </svg>
                                        </>}
                                </div>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-200 font-semibold"
                            >
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;