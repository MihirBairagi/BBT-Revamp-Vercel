"use client";
import React, { useState } from "react";
import { submitForm } from "../../../../app/lib/services/realty/api";

const VisitPopup = ({ isOpen, onClose }) => {
  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !phone || !email) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      setSubmitting(true);
      await submitForm({
        formType: 'realty_visit',
        data: {
          name,
          phone,
          email,
        },
      });
      
      // Reset form and show success
      setName('');
      setPhone('');
      setEmail('');
      setIsSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-[92%] max-w-[90rem] bg-white rounded-[3rem] px-[4rem] py-[4.5rem] lg:px-[6rem] lg:py-[5rem]">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-[2.5rem] top-[2.5rem] text-[2.5rem] text-black opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Close"
        >
          ✕
        </button>

        {isSubmitted ? (
          // Success State
          <div className="text-center py-[3rem]">
            <div className="w-[100px] h-[100px] mx-auto mb-[25px]">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="48" stroke="#000000" strokeWidth="2" fill="none" />
                <path
                  d="M28 50L43 65L72 36"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <h2 className="text-[2.4rem] font-normal mb-[0.5rem]">
              Thank You!
            </h2>
            <p className="text-[#6b6b6b] text-[1.5rem] max-w-[40rem] mx-auto">
              Your site visit request has been received. Our team will contact you shortly to confirm the details.
            </p>
            <button
              onClick={handleClose}
              className="mt-[2.5rem] bg-black text-white rounded-[1.2rem] h-[5.8rem] px-[4rem] text-[1.5rem] hover:bg-[#2a2a2a] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          // Form State
          <>
            {/* Heading */}
            <h2 className="mb-[0.5rem]">
              Experience It <span className="font-light">in Person</span>
            </h2>

            <p className="text-[#6b6b6b] para max-w-[55rem] mb-[3rem]">
              You're just moments away from discovering your perfect home.
              Fill in a few details and we'll take it from there.
            </p>

            {/* Form */}
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem]" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name*"
                className="border border-[#d9d9d9] rounded-[1.2rem] px-[2rem] h-[5.8rem] text-[1.5rem] outline-none focus:border-black transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number*"
                className="border border-[#d9d9d9] rounded-[1.2rem] px-[2rem] h-[5.8rem] text-[1.5rem] outline-none focus:border-black transition-colors"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email*"
                className="border border-[#d9d9d9] rounded-[1.2rem] px-[2rem] h-[5.8rem] text-[1.5rem] outline-none focus:border-black transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="bg-black text-white rounded-[1.2rem] h-[5.8rem] text-[1.5rem] flex items-center justify-center gap-[1rem] hover:bg-[#2a2a2a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                disabled={submitting}
              >
                {submitting ? 'Scheduling...' : 'Schedule Now'} 
                {!submitting && <span className="text-[1.8rem]">→</span>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default VisitPopup;
