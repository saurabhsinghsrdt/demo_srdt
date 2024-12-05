import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[575px]">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to the Dashboard!</h1>
        <p className="text-lg text-gray-600">You are now logged in and ready to manage your tasks.</p>
      </div>
    </div>
  );
};

export default Dashboard;
