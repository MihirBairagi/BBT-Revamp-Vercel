"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { paymentsAPI } from "../../lib/services/api";
import { pushGoogleAdsPurchase } from "../../lib/utils/gtm";

const PaymentSuccess = () => {
  const router = useRouter();
  const [verificationStatus, setVerificationStatus] = useState("verifying");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        let orderId = null;

        if (typeof window !== "undefined") {
          const params = new URLSearchParams(window.location.search);
          orderId = params.get("order_id");
        }

        if (!orderId) {
          setVerificationStatus("error");
          setVerificationMessage("Order ID not found");
          return;
        }

        // Verify payment with backend
        const response = await paymentsAPI.verifyPayment(orderId);

        if (response.success) {
          const status = response?.data?.status;
          if (status === "confirmed") {
            setVerificationStatus("success");
          } else if (status === "pending") {
            setVerificationStatus("pending");
          } else if (status === "cancelled") {
            setVerificationStatus("cancelled");
          } else {
            setVerificationStatus("error");
          }
          setVerificationMessage(response.message);
          
          // Get order details
          const orderResponse = await paymentsAPI.getOrder(orderId);
          if (orderResponse.success) {
            setOrderDetails(orderResponse.data);
            
            // Track Google Ads purchase conversion
            if (typeof window !== 'undefined' && status === 'confirmed') {
              pushGoogleAdsPurchase(orderResponse.data);
            }
          }
        } else {
          setVerificationStatus("error");
          setVerificationMessage(response.message || "Payment verification failed");
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        setVerificationStatus("error");
        setVerificationMessage("Payment verification failed. Please contact support.");
      }
    };

    verifyPayment();
  }, []);

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {verificationStatus === "verifying" && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Verifying Payment
            </h2>
            <p className="text-gray-600">
              Please wait while we verify your payment...
            </p>
          </div>
        )}

        {verificationStatus === "success" && (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Payment Successful!
            </h2>
            <p className="text-gray-600 mb-4">{verificationMessage}</p>
            
            {orderDetails && (
              <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
                <h3 className="font-semibold text-gray-800 mb-2">Booking Details:</h3>
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
              We will contact you shortly to confirm your booking details.
            </p>
            
            <button
              onClick={handleBackToHome}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}

        {verificationStatus === "pending" && (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
              <svg
                className="h-6 w-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Payment Pending
            </h2>
            <p className="text-gray-600 mb-4">{verificationMessage || "Your payment is being processed. This may take a moment."}</p>

            {orderDetails && (
              <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
                <h3 className="font-semibold text-gray-800 mb-2">Booking Details:</h3>
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

            <button
              onClick={handleBackToHome}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}

        {verificationStatus === "cancelled" && (
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
              Payment Cancelled
            </h2>
            <p className="text-gray-600 mb-6">{verificationMessage || "Your payment was cancelled. No charges were made."}</p>

            <button
              onClick={handleBackToHome}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}

        {verificationStatus === "error" && (
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
            <p className="text-gray-600 mb-6">{verificationMessage}</p>
            
            <button
              onClick={handleBackToHome}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess; 