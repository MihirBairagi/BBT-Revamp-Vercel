"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Toast = ({ toast, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (toast) {
      setIsVisible(true);
      setIsExiting(false);
    } else {
      setIsVisible(false);
      setIsExiting(false);
    }
  }, [toast]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleActionClick = () => {
    if (toast?.actionCallback) {
      toast.actionCallback();
    }
  };

  if (!toast || !isVisible) return null;

  const getToastColors = () => {
    switch (toast.type) {
      case "success":
        return {
          bg: "bg-[#EF3024]",
          border: "border-[#EF3024]",
          icon: "/images/success-icon.webp",
        };
      case "error":
        return {
          bg: "bg-red-500",
          border: "border-red-600",
          icon: "/images/error-icon.webp",
        };
      case "warning":
        return {
          bg: "bg-yellow-500",
          border: "border-yellow-600",
          icon: "/images/warning-icon.webp",
        };
      default: // info
        return {
          bg: "bg-[#EF3024]",
          border: "border-[#EF3024]",
          icon: "/images/info-icon.webp",
        };
    }
  };

  const colors = getToastColors();

  return (
    <div
      className={`
        fixed top-8 right-8 z-[200] max-w-[214px] w-full transition-all duration-300 ease-in-out
        ${
          isExiting ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }
        xl:top-12 xl:right-12
      `}
    >
      <div
        className={`
        ${colors.bg} text-white relative rounded-[15px] shadow-lg px-[20px] py-[25px] text-center
      `}
      >
        {/* Toast Icon */}
        <div className="flex justify-center mb-[20px] mt-[20px]">
          <div className="w-[25px] h-[25px] bg-white rounded-full flex items-center justify-center">
            {toast.type === "success" && (
              <svg
                className="w-[25px] h-[25px] text-[#EF3024]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {toast.type === "error" && (
              <svg
                className="w-[25px] h-[25px] text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {toast.type === "warning" && (
              <svg
                className="w-[25px] h-[25px] text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {toast.type === "info" && (
              <svg
                className="w-[25px] h-[25px] text-[#EF3024]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
        {/* Toast Content */}
        <div className="block">
          <p className="text-[14px] leading-[1.45] font-medium text-white">
            {toast.message}
          </p>
        </div>

        {/* Action Button */}
        {toast.actionText && toast.actionCallback && (
          <button
            onClick={handleActionClick}
            className="bg-white border border-white text-black px-[3rem] py-[12px] rounded-[30px] mt-[20px] font-medium text-[12px] transition-all duration-500 hover:text-white hover:bg-transparent inline-block"
          >
            {toast.actionText}
          </button>
        )}

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-[10px] right-[10px] w-[20px] h-[20px] text-white border border-white rounded-full flex justify-center items-center transition-all duration-500 hover:bg-white hover:text-black"
        >
          <svg
            className="w-[15px] h-[15px]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
