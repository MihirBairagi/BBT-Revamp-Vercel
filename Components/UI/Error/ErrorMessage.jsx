"use client";
import React from "react";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="w-full py-20 text-center">
      <div className="max-w-[600px] mx-auto">
        <img
          src="/images/error-icon.webp"
          alt="Error"
          className="w-16 h-16 mx-auto mb-6"
          width="64"
          height="64"
        />
        <h3 className="text-2xl font-medium mb-4">Something went wrong</h3>
        <p className="text-gray-600 mb-8">
          {message || "We couldn't load the data. Please try again later."}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-black text-white py-3 px-8 rounded inline-block hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage; 