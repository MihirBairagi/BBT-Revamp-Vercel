import React, { useState } from "react";

const NewsLetterBox = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Email is required!");
    }

    console.log(email);
    setEmail("");
  };
  return (
    <div className="flex items-center">
      <div className="flex-[1] pr-[1.5rem]">
        <input
          type="text"
          className="border bg-transparent border-[#ABABA9] w-full text-[1.2rem] outline-none px-[1.5rem] py-[1rem] h-[5rem] rounded-[0.7rem] 3xl:text-[1.6rem] 1xl:h-[6rem] 2xl:h-[6.2rem] 2xl:text-[1.4rem] 1xl:px-[2rem] 3xl:h-[8rem]"
          placeholder="Enter your email for updates"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div>
        <button
          className="w-full outline-none text-[1.2rem] px-[3rem] py-[1rem] h-[5rem] rounded-[0.7rem] bg-black text-white transition-all duration-500 2xl:text-[1.4rem] 3xl:text-[1.6rem] 1xl:h-[6rem] 2xl:px-[4rem] 2xl:h-[6.2rem] 3xl:h-[8rem] hover:bg-[#333]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsLetterBox;
