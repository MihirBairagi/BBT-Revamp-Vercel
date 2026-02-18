"use client";
import React, { useState } from 'react';
import { states } from '../../data/dummyData';
import { submitForm } from '../../../../app/lib/services/realty/api';
import ThankyouPopup from '../../ThankyouPopup/ThankyouPopup';

function FormSection() {
  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [state, setState] = useState('');
  
  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!firstName || !lastName || !phone || !email || !project || !state) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      setSubmitting(true);
      await submitForm({
        formType: 'realty_homepage',
        data: {
          firstName,
          lastName,
          phone,
          email,
          project,
          state,
        },
      });
      
      // Reset form
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setProject('');
      setState('');
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
    <section className='h-form-section py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem]' >
        <div className="container">
            <div className="h-form-box flex flex-wrap lg:justify-between" 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="text-box w-[100%] lg:w-[40%]">
                    <div className="head-box text-center lg:text-start">
                        <h2 className='h2-big font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem] ' >We're here <strong>to assist you.</strong></h2>
                        <p className='para font-[300]' >For brochures, pricing, availability or site visits — reach out to our realty team.</p>
                    </div>
                    <div className="info-box  hidden lg:block lg:mt-[2rem]">
                        <div className="flex lg:w-max">
                            <img className=" lg:w-[3rem] lg:mr-[0.8rem] object-contain 1xl:w-[4rem] 3xl:w-[5.2rem] 3xl:mr-[1.5rem]" src="/realty/images/h-form-tel.png" alt=""/>
                            <div className="text flex flex-col items-start">
                                <p className="para font-[300] mb-[0.2rem]"> We are always happy to help</p>
                                <a className="f-20" href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                            </div>
                        </div>
                        <div className="flex lg:w-max lg:mt-[1rem] 1xl:mt-[1.5rem] 3xl:mt-[2rem]">
                            <img className=" lg:w-[3rem] lg:mr-[0.8rem] object-contain 1xl:w-[4rem] 3xl:w-[5.2rem] 3xl:mr-[1.5rem]" src="/realty/images/h-form-mail.png" alt=""/>
                            <div className="text">
                                <p className="para font-[300] mb-[0.2rem]"> The best way to get answer faster.</p>
                                <div className="lg:flex lg:items-start">
                                    <a className="f-20 lg:mr-[0.5rem]" href="mailto:realty@bigboytoyz.com">realty@bigboytoyz.com </a>
                                </div>
                            </div>
                        </div>
                        <div className="media-box flex items-center mt-[3rem] 3xl:mt-[4rem]">
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-1.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-2.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-3.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-4.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-5.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[4rem] lg:h-[2.5rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:w-[5rem] 1xl:h-[2.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[7rem] 3xl:h-[3.2rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-6.png" alt="" />
                            </a>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="form-box w-[100%] mt-[3rem] lg:mt-[0rem] lg:w-[45%]">

                    <form className='flex flex-col gap-[1.2rem] 1xl:gap-[1.5rem] 3xl:gap-[2rem]' onSubmit={handleSubmit}>
                        <div className="two-field flex justify-between items-center">
                            <div className="field w-[48.5%]">
                                <input 
                                  type="text" 
                                  className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' 
                                  placeholder='First Name*'
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                  required
                                />
                            </div>
                            <div className="field w-[48.5%]">
                                <input 
                                  type="text" 
                                  className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' 
                                  placeholder='Last Name*'
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                  required
                                />
                            </div>
                        </div>
                        <div className="two-field flex justify-between items-center">
                            <div className="field w-[48.5%]">
                                <input 
                                  type="tel" 
                                  className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' 
                                  placeholder='Phone No*'
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  required
                                />
                            </div>
                            <div className="field w-[48.5%]">
                                <input 
                                  type="email" 
                                  className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' 
                                  placeholder='Email Address*'
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                />
                            </div>
                        </div>
                        <div className="select">
                            <select 
                              className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]'
                              value={project}
                              onChange={(e) => setProject(e.target.value)}
                              required
                            >
                                <option value="">Choose Project*</option>
                                <option value="Pavilion – Vadodara">Pavilion – Vadodara</option>
                                <option value="BBT ONE – Karol Bagh, Delhi">BBT ONE – Karol Bagh, Delhi</option>
                                <option value="The Royale Pavilion – Lucknow">The Royale Pavilion – Lucknow</option>
                                <option value="SORA – Mandi, Himachal Pradesh">SORA – Mandi, Himachal Pradesh</option>
                            </select>
                        </div>
                        <div className="select">
                            <select 
                              className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]'
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              required
                            > 
                                <option value="">Select Your State*</option>
                                {states.map((stateOption) => (
                                    <option key={stateOption} value={stateOption}>
                                    {stateOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button 
                          type='submit' 
                          className='max-[1023px]:text-[1.85rem] f-20 h-[6rem] bg-black text-white rounded-[1rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] hover:bg-[#414141] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300'
                          disabled={submitting}
                        >
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>


                    <div className="info-box lg:hidden mt-[3.5rem]">
                        <div className="flex lg:w-max">
                            <img className=" w-[4.5rem] mr-[1.5rem] object-contain" src="/realty/images/h-form-tel.png" alt=""/>
                            <div className="text">
                                <p className="text-[1.3rem] font-[300] mb-[0.2rem]"> Speak With Us We are always happy to help</p>
                                <a className="text-[1.6rem]" href="tel:+91 99999 990 30">(+91) 99999 990 30</a>
                            </div>
                        </div>
                        <div className="flex lg:w-max mt-[1rem]">
                            <img className=" w-[4.5rem] mr-[1.5rem] object-contain" src="/realty/images/h-form-mail.png" alt=""/>
                            <div className="text">
                                <p className="text-[1.3rem] font-[300] mb-[0.2rem]"> The best way to get answer faster.</p>
                                <div className="lg:flex">
                                    <a className="text-[1.6rem]" href="mailto:realty@bigboytoyz.com">realty@bigboytoyz.com</a> 
                                </div>
                            </div>
                        </div>
                        <div className="media-box flex items-center mt-[3rem] ">
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-1.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-2.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-3.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-4.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-5.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] place-content-center px-[1.5rem] py-[1rem] border-l border-[#C0C0C0] ' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-6.png" alt="" />
                            </a>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        {success && <ThankyouPopup togglePopup={toggleThankyouPopup} />}
    </section>
  )
}

export default FormSection
