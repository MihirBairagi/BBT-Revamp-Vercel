"use client";
import React, { useEffect, useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import { paymentsAPI } from "../lib/services/api";

const PaymentPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [cashfree, setCashfree] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const initializeCashfree = async () => {
      try {
        const cfInstance = await load({
          mode: process.env.NODE_ENV === "production" ? "production" : "sandbox",
        });
        setCashfree(cfInstance);
      } catch (err) {
        console.error("Failed to initialize Cashfree SDK:", err);
      }
    };
    initializeCashfree();
  }, []);

  const validate = () => {
    if (!name || !phone || !email || !amount) return "Please fill all required fields";
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0) return "Enter a valid positive amount";
    if (!/^[0-9]{10}$/.test(phone.replace(/\D/g, ""))) return "Enter a valid 10-digit phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!cashfree) {
      setError("Payment system is not ready. Please try again in a moment.");
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        amount: String(Math.floor(Number(amount))),
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerAddress: address,
        description: description,
        productId: "direct_payment",
        productName: "Direct Payment",
        bookingType: "direct",
      };

      const response = await paymentsAPI.createOrder(payload);

      if (response?.success) {
        const { sessionId } = response.data || {};
        if (!sessionId) {
          setError("Failed to start payment session");
          setIsSubmitting(false);
          return;
        }

        await cashfree.checkout({ paymentSessionId: sessionId, redirectTarget: "_self" });
      } else {
        setError(response?.message || "Failed to create order");
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError("Payment failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="text-[0.95rem] font-semibold text-gray-800 tracking-wide mb-1">Make Payment</div>
        <h1 className="text-[1.85rem] sm:text-[2rem] leading-tight tracking-wide font-semibold text-gray-800 mb-2">Enter details and the amount to pay.</h1>
        <p className="text-gray-500 text-[0.95rem] mb-6">We&apos;ll redirect you to our secure payment partner to complete the transaction.</p>

        {error && (
          <div className="mb-4 rounded border border-red-200 bg-red-50 text-red-700 text-sm px-3 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 h-11 outline-none focus:ring-2 focus:ring-gray-800 placeholder:text-gray-400"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg px-3 h-11 outline-none focus:ring-2 focus:ring-gray-800 placeholder:text-gray-400"
              placeholder="9876543210"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 h-11 outline-none focus:ring-2 focus:ring-gray-800 placeholder:text-gray-400"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-lg px-3 h-11 outline-none focus:ring-2 focus:ring-gray-800 placeholder:text-gray-400"
              placeholder="123 Main St, City"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Description / Car Name</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg px-3 h-11 outline-none focus:ring-2 focus:ring-gray-800 placeholder:text-gray-400"
              placeholder="e.g., Mercedes-Benz S-Class or Payment for XYZ"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Amount (₹)</label>
            <input
              type="number"
              min="1"
              step="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-lg px-3 h-11 outline-none focus:ring-2 focus:ring-gray-800 placeholder:text-gray-400"
              placeholder="200000"
              required
            />
            {Number(amount) > 0 && (
              <div className="text-xs text-gray-500 mt-2">You will pay <span className="font-medium text-gray-700">₹{Number(amount).toLocaleString("en-IN")}</span></div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white h-11 rounded-lg hover:bg-gray-800 transition disabled:opacity-60"
          >
            {isSubmitting ? "Processing..." : "Pay Now"}
          </button>
        </form>

        <div className="flex items-start gap-2 text-[0.75rem] text-gray-500 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-[2px]"><path fillRule="evenodd" d="M12 1.5a9.75 9.75 0 1 0 9.75 9.75A9.761 9.761 0 0 0 12 1.5Zm0 3a1.125 1.125 0 1 1 0 2.25A1.125 1.125 0 0 1 12 4.5Zm1.5 13.125a1.5 1.5 0 1 1-3 0v-6a1.5 1.5 0 1 1 3 0Z" clipRule="evenodd"/></svg>
          <span>Card, UPI, and NetBanking supported via Cashfree. Your payment details are processed securely.</span>
        </div>

        <div className="text-[0.75rem] text-gray-600 mt-3 text-center">
          <span className="font-medium">Payment Gateway charges will apply</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;


