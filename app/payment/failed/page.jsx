"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { paymentsAPI } from "../../lib/services/api";

const PaymentFailed = () => {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        let orderId = null;
        let errorReason = null;

        if (typeof window !== "undefined") {
          const params = new URLSearchParams(window.location.search);
          orderId = params.get("order_id");
          errorReason = params.get("error_reason");
        }

        if (orderId) {
          const orderResponse = await paymentsAPI.getOrder(orderId);
          if (orderResponse.success) {
            setOrderDetails(orderResponse.data);
          }
        }

        setErrorMessage(errorReason || "Payment was not completed");
      } catch (error) {
        console.error("Error fetching order details:", error);
        setErrorMessage("Failed to fetch order details");
      }
    };

    getOrderDetails();
  }, []);

  const handleBackToHome = () => {
    router.push("/");
  };

  const handleRetryPayment = () => {
    // Redirect back to booking page
    router.push("/booking");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-4">{errorMessage}</p>
          
          {orderDetails && (
            <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
              <h3 className="font-semibold text-gray-800 mb-2">Order Details:</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Booking Reference:</strong> {orderDetails.booking_ref}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Product:</strong> {orderDetails.prd_name}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Amount:</strong> ₹{orderDetails.booking_amount}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Status:</strong> {orderDetails.status}
              </p>
            </div>
          )}
          
          <p className="text-sm text-gray-500 mb-6">
            Don't worry! You can try again or contact our support team for assistance.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={handleRetryPayment}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
            
            <button
              onClick={handleBackToHome}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed; 