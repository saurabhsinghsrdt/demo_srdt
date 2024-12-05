import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-[91vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Our E-Commerce Store</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our e-commerce store, where quality meets convenience. We provide a wide range of products to make your life easier and more enjoyable. From electronics to home decor, we have something for everyone.
        </p>

        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is simple: to provide our customers with top-notch products, great customer service, and an easy shopping experience. We aim to make online shopping fun, fast, and reliable.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="text-gray-600 space-y-2">
              <li>✔ High-quality products at competitive prices</li>
              <li>✔ Fast and reliable shipping</li>
              <li>✔ Excellent customer support</li>
              <li>✔ Secure payment options</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-600">
            Join us on our journey to make online shopping a breeze. Explore our store and enjoy your shopping experience with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
