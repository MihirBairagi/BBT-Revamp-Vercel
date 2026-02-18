"use client";
import React, { useState } from "react";
import { submitForm } from "../../../../app/lib/services/realty/api";
import ThankyouPopup from "../../ThankyouPopup/ThankyouPopup";

function ContactUs() {
  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');
  
  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!firstName || !lastName || !phone || !email || !city || !project || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      setSubmitting(true);
      await submitForm({
        formType: 'realty_contact',
        data: {
          firstName,
          lastName,
          phone,
          email,
          city,
          project,
          message,
        },
      });
      
      // Reset form
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setCity('');
      setProject('');
      setMessage('');
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
   

    <section className='py-[7rem] xl:py-[10rem] 1xl:py-[11rem] 3xl:py-[14rem] bg-[#fff]' >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between"
          data-aos="fade-up" 
          data-aos-easing="linear"
          data-aos-duration="500"
        >
                <div className="text-box w-[100%] lg:w-[50%]">
                    <div className="head-box">
                        <p className='max-[1023px]:text-[1.5rem] f-22 uppercase mb-[1rem] text-[#6C6C6C]' >Contact Us</p>
                        <h2 className='h2-big font-[300] leading-[1.2] tracking-[-0.2rem] mb-[1rem] 3xl:mb-[2rem]' ><strong>Reach out</strong> for project details and assistance.</h2>
                        <p className='para font-[300]' >Our team is available to share project information, site visit details, and personalised guidance—at your convenience.</p>
                    </div>
                    <div className="info-box mt-[1rem]">
                      <div className="flex flex-col-reverse lg:flex-col">
                          <div className="lg:flex w-full lg:mt-[2rem] lg:py-[2rem] 2xl:mt-[3rem] 2xl:py-[3rem] 3xl:mt-[3.5rem] 3xl:py-[3.5rem] lg:border-t lg:border-b border-[#D9D9D9]">
                            <div className="flex lg:w-max lg:border-r border-[#D9D9D9] lg:pr-[2rem] lg:mr-[2rem] mt-[2rem] lg:mt-0">
                                <img className=" w-[4rem] mr-[1rem] lg:w-[4rem] lg:mr-[1rem] object-contain xl:w-[4.5rem] 1xl:w-[5rem] 3xl:w-[7rem] 3xl:mr-[2rem] 2xl:mr-[1.8rem]" src="/realty/images/h-form-tel.png" alt=""/>
                                <div className="text flex flex-col items-start">
                                    <p className="para font-[300] mb-[0.2rem]"> We are always happy to help</p>
                                    <a className="max-[1023px]:text-[1.5rem] f-24" href="tel:+91 99999 990 30">+91 99999 99030</a>
                                </div>
                            </div>
                            <div className="flex lg:w-[48%] mt-[2rem] lg:mt-0">
                                <img className=" w-[4rem] mr-[1rem] lg:w-[4rem] lg:mr-[1rem] object-contain xl:w-[4.5rem] 1xl:w-[5rem] 3xl:w-[7rem] 3xl:mr-[2rem] 2xl:mr-[1.8rem]" src="/realty/images/h-form-mail.png" alt=""/>
                                <div className="text">
                                    <p className="para font-[300] mb-[0.2rem]"> The best way to get answer faster.</p>
                                    <a className="max-[1023px]:text-[1.5rem] f-24" href="mailto:realty@bigboytoyz.com">realty@bigboytoyz.com </a>
                                </div>
                            </div>
                          </div>
                          <div className="flex lg:w-max mt-[2rem] 2xl:mt-[3rem] 3xl:mt-[3.5rem]">
                                <img className=" w-[4rem] mr-[1rem] lg:w-[4rem] lg:mr-[1rem] object-contain xl:w-[4.5rem] 1xl:w-[5rem] 3xl:w-[7rem] 3xl:mr-[2rem] 2xl:mr-[1.8rem]" src="/realty/images/c-form-loc.webp" alt=""/>
                                <div className="text">
                                    <p className='text-[0.86rem] 3xl:text-[1.3rem] mb-[1rem] h-[2rem] px-[1.5rem] uppercase flex items-center bg-black text-white w-max rounded-full 3xl:h-[2.5rem] 3xl:px-[2rem]' >Head Office</p>
                                    <p className="max-[1023px]:text-[1.5rem] f-24 ">Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001 </p>
                                </div>
                          </div>
                        </div>
                        <div className="media-box flex items-center mt-[3rem] lg:mt-[2rem] lg:pt-[2rem] 2xl:mt-[3rem] 2xl:pt-[3rem] lg:border-t border-[#D9D9D9] 3xl:mt-[4rem]">
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[6rem] lg:h-[3rem] 2xl:w-[7rem] 2xl:h-[3.2rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[9rem] 3xl:h-[3.8rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-3.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[6rem] lg:h-[3rem] 2xl:w-[7rem] 2xl:h-[3.2rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[9rem] 3xl:h-[3.8rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-4.png" alt="" />
                            </a>
                            <a href="" className='w-[5rem] h-[3.5rem] lg:w-[6rem] lg:h-[3rem] 2xl:w-[7rem] 2xl:h-[3.2rem] place-content-center px-[1.5rem] py-[1rem] lg:px-[0.5rem] lg:py-[0.7rem] 1xl:px-[0.4rem] 1xl:py-[0.6rem] border-l border-[#C0C0C0] 3xl:w-[9rem] 3xl:h-[3.8rem]' >
                                <img className='w-[100%] h-[100%] object-contain hover:scale-[1.1]' src="/realty/images/h-form-media-6.png" alt="" />
                            </a>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="form-box w-[100%] mt-[4rem] lg:mt-[0rem] lg:w-[45%]">
                    <h2 className='h2-big font-[400] leading-[1.2] tracking-[-0.2rem] mb-[1rem] lg:mb-[2rem]' >Enquire Now</h2>
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
                         <div>
                            <input 
                              type="text" 
                              className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]' 
                              placeholder='Type Your City*'
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              required
                            />
                        </div>
                        <div className="select">
                            <select 
                              className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] w-[100%]'
                              value={project}
                              onChange={(e) => setProject(e.target.value)}
                              required
                            >
                                <option value="">Project*</option>
                                <option value="Pavilion – Vadodara">Pavilion – Vadodara</option>
                                <option value="BBT ONE – Karol Bagh, Delhi">BBT ONE – Karol Bagh, Delhi</option>
                                <option value="The Royale Pavilion – Lucknow">The Royale Pavilion – Lucknow</option>
                                <option value="SORA – Mandi, Himachal Pradesh">SORA – Mandi, Himachal Pradesh</option>
                            </select>
                        </div>
                       <div>
                            <textarea 
                              className='max-[1023px]:text-[1.65rem] para placeholder bg-transparent outline-0 border border-[#0000007d] rounded-[0.8rem] h-[6rem] lg:h-[7rem] xl:h-[8rem] 1xl:h-[9rem] 3xl:h-[10.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] pl-[2rem] pr-[1rem] pt-[1rem] w-[100%]' 
                              placeholder='Message*'
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              required
                            ></textarea>
                        </div>
                        <button 
                          type='submit' 
                          className='max-[1023px]:text-[1.85rem] f-20 h-[6rem] bg-black text-white rounded-[1rem] lg:h-[4rem] xl:h-[4.5rem] 1xl:h-[5rem] 3xl:h-[6.5rem] lg:rounded-[0.5rem] 3xl:rounded-[1rem] hover:bg-[#414141] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300'
                          disabled={submitting}
                        >
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
        </div>
      </div>
    </section>

    {success && <ThankyouPopup togglePopup={toggleThankyouPopup} />}

  </>
  )
}

export default ContactUs
