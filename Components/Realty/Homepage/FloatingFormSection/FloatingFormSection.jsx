"use client";
import React, { useState } from 'react';
import { submitForm } from '../../../../app/lib/services/realty/api';
import ThankyouPopup from '../../ThankyouPopup/ThankyouPopup';

function FloatingFormSection() {
  // Form state
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  
  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!fullName || !mobile || !city) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      setSubmitting(true);
      await submitForm({
        formType: 'realty_floating',
        data: {
          name: fullName,
          phone: mobile,
          city,
        },
      });
      
      // Reset form
      setFullName('');
      setMobile('');
      setCity('');
      setSuccess(true);
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleThankyouPopup = () => {
    setSuccess(!success);
  };

  return (
    <>
    <section className="h-b-form-section relative z-10 -mt-10 md:-mt-16 lg:-mt-[5rem] xl:-mt-[7.5rem] 3xl:-mt-[8.5rem]  bg-gradient-to-t from-white to-transparent lg:bg-none">
        <div className="container">
            <div className="h-b-form-box">
            <form 
              className="bg-white rounded-3rem shadow-detail-space p-[4rem] md:px-8 md:py-10 lg:px-[5rem] lg:py-[3rem] lg:rounded-2rem xl:py-[4rem] 1xl:py-[5rem] 3xl:px-[7rem] 3xl:py-[6rem]"
              data-aos="fade-up" 
              data-aos-easing="linear"
              data-aos-duration="500"
              onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-8">
                    <div className="field lg:w-[35%]">
                        <input 
                          className='max-[1023px]:text-[1.5rem] f-20 text-black border-b border-black w-full pb-[2rem] pt-[1rem] outline-0' 
                          type="text" 
                          placeholder='Full Name*'
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                    </div>
                    <div className="field lg:w-[35%]">
                        <input 
                          className='max-[1023px]:text-[1.5rem] f-20 text-black border-b border-black w-full pb-[2rem] pt-[1rem] outline-0' 
                          type="tel" 
                          placeholder='Mobile*'
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                    </div>
                    <div className="field lg:w-[35%]">
                        <input 
                          className='max-[1023px]:text-[1.5rem] f-20 text-black border-b border-black w-full pb-[2rem] pt-[1rem] outline-0' 
                          type="text" 
                          placeholder='Your City*'
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                    </div>
                    <div className="submit mt-[1rem] lg:mt-[0]">
                        <button 
                          type='submit' 
                          className="com-btn bg-black text-white border-[white] font-normal min-w-[18rem] justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                          disabled={submitting}
                        >
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>


                </div>
            </form>
            </div>
        </div>
    </section>

    {success && <ThankyouPopup togglePopup={toggleThankyouPopup} />}
    </>

  )
}

export default FloatingFormSection
