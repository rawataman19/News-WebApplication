import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="text-center bg-white shadow-lg p-8 rounded-md">
        <div className="text-blue-500 text-5xl mb-4">😞</div>
        <h1 className="text-2xl font-semibold text-gray-700">Oops! Something went wrong</h1>
        <p className="text-gray-500 mt-2">
          We couldn't fetch the news for you right now. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
