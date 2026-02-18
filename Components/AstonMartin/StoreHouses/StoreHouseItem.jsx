import React from "react";

const StoreHouseItem = ({ data }) => {
  return (
    <div className="py-12 px-9 rounded-xl bg-[#f6f6f6] mt-8">
      <h5 className="text-1.4rem inline-block border-b border-b-black mb-4">{data?.title}</h5>
      <p className="text-xl tracking-tight font-light text-justify">{data?.description}</p>
    </div>
  );
};

export default StoreHouseItem;
