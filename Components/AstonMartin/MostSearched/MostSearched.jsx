import React from "react";
import Link from "next/link";
import CommonLocationItem from "../../CommonComponents/CommonLocation/CommonLocationItem";

const searchedList = [
  {
    title: "Most Searched Brands On Big Boy Toyz.",
    tags: [
      { tagName: "Used BMW", url: "#" },
      { tagName: "Used Mercedes", url: "#" },
      { tagName: "Used Aston Martin", url: "#" },
      { tagName: "Used Audi", url: "#" },
      { tagName: "Used Bentley", url: "#" },
      { tagName: "Used Ferrari", url: "#" },
      { tagName: "Used Ford", url: "#" },
      { tagName: "Used Harley Davidson", url: "#" },
      { tagName: "Used Hummer", url: "#" },
      { tagName: "Used Jaguar", url: "#" },
      { tagName: "Used Jeep", url: "#" },
      { tagName: "Used Lamborghini", url: "#" },
      { tagName: "Used Land Rover", url: "#" },
      { tagName: "Used Lexus", url: "#" },
      { tagName: "Used Maserati", url: "#" },
      { tagName: "Used Maybach", url: "#" },
      { tagName: "Used Mercedes-Benz", url: "#" },
      { tagName: "Used Mini", url: "#" },
      { tagName: "Used Nissan", url: "#" },
      { tagName: "Used Porsche", url: "#" },
      { tagName: "Used Rolls-Royce ", url: "#" },
      { tagName: "Used Toyota", url: "#" },
      { tagName: "Used Triumph", url: "#" },
      { tagName: "Used Volkswagen", url: "#" },
      { tagName: "Used Volvo", url: "#" },
    ],
  },
  {
    title: "Searched By Top Models.",
    tags: [
      { tagName: "Used BMW", url: "#" },
      { tagName: "Used Mercedes", url: "#" },
      { tagName: "Used Aston Martin", url: "#" },
      { tagName: "Used Audi", url: "#" },
      { tagName: "Used Bentley", url: "#" },
      { tagName: "Used Ferrari", url: "#" },
      { tagName: "Used Ford", url: "#" },
      { tagName: "Used Harley Davidson", url: "#" },
      { tagName: "Used Hummer", url: "#" },
      { tagName: "Used Jaguar", url: "#" },
      { tagName: "Used Jeep", url: "#" },
      { tagName: "Used Lamborghini", url: "#" },
      { tagName: "Used Land Rover", url: "#" },
      { tagName: "Used Lexus", url: "#" },
      { tagName: "Used Maserati", url: "#" },
      { tagName: "Used Maybach", url: "#" },
      { tagName: "Used Mercedes-Benz", url: "#" },
      { tagName: "Used Mini", url: "#" },
      { tagName: "Used Nissan", url: "#" },
      { tagName: "Used Porsche", url: "#" },
      { tagName: "Used Rolls-Royce ", url: "#" },
      { tagName: "Used Toyota", url: "#" },
      { tagName: "Used Triumph", url: "#" },
      { tagName: "Used Volkswagen", url: "#" },
      { tagName: "Used Volvo", url: "#" },
    ],
  },
  {
    title: "Most Searched Brands From Mumbai.",
    tags: [
      { tagName: "Used BMW", url: "#" },
      { tagName: "Used Mercedes", url: "#" },
      { tagName: "Used Aston Martin", url: "#" },
      { tagName: "Used Audi", url: "#" },
      { tagName: "Used Bentley", url: "#" },
      { tagName: "Used Ferrari", url: "#" },
      { tagName: "Used Ford", url: "#" },
      { tagName: "Used Harley Davidson", url: "#" },
      { tagName: "Used Hummer", url: "#" },
      { tagName: "Used Jaguar", url: "#" },
      { tagName: "Used Jeep", url: "#" },
      { tagName: "Used Lamborghini", url: "#" },
      { tagName: "Used Land Rover", url: "#" },
      { tagName: "Used Lexus", url: "#" },
      { tagName: "Used Maserati", url: "#" },
      { tagName: "Used Maybach", url: "#" },
      { tagName: "Used Mercedes-Benz", url: "#" },
      { tagName: "Used Mini", url: "#" },
      { tagName: "Used Nissan", url: "#" },
      { tagName: "Used Porsche", url: "#" },
      { tagName: "Used Rolls-Royce ", url: "#" },
      { tagName: "Used Toyota", url: "#" },
      { tagName: "Used Triumph", url: "#" },
      { tagName: "Used Volkswagen", url: "#" },
      { tagName: "Used Volvo", url: "#" },
    ],
  },
  {
    title: "Most Searched Brands From Hyderabad.",
    tags: [
      { tagName: "Used BMW", url: "#" },
      { tagName: "Used Mercedes", url: "#" },
      { tagName: "Used Aston Martin", url: "#" },
      { tagName: "Used Audi", url: "#" },
      { tagName: "Used Bentley", url: "#" },
      { tagName: "Used Ferrari", url: "#" },
      { tagName: "Used Ford", url: "#" },
      { tagName: "Used Harley Davidson", url: "#" },
      { tagName: "Used Hummer", url: "#" },
      { tagName: "Used Jaguar", url: "#" },
      { tagName: "Used Jeep", url: "#" },
      { tagName: "Used Lamborghini", url: "#" },
      { tagName: "Used Land Rover", url: "#" },
      { tagName: "Used Lexus", url: "#" },
      { tagName: "Used Maserati", url: "#" },
      { tagName: "Used Maybach", url: "#" },
      { tagName: "Used Mercedes-Benz", url: "#" },
      { tagName: "Used Mini", url: "#" },
      { tagName: "Used Nissan", url: "#" },
      { tagName: "Used Porsche", url: "#" },
      { tagName: "Used Rolls-Royce ", url: "#" },
      { tagName: "Used Toyota", url: "#" },
      { tagName: "Used Triumph", url: "#" },
      { tagName: "Used Volkswagen", url: "#" },
      { tagName: "Used Volvo", url: "#" },
    ],
  },
  {
    title: "Most Searched Brands From Delhi.",
    tags: [
      { tagName: "Used BMW", url: "#" },
      { tagName: "Used Mercedes", url: "#" },
      { tagName: "Used Aston Martin", url: "#" },
      { tagName: "Used Audi", url: "#" },
      { tagName: "Used Bentley", url: "#" },
      { tagName: "Used Ferrari", url: "#" },
      { tagName: "Used Ford", url: "#" },
      { tagName: "Used Harley Davidson", url: "#" },
      { tagName: "Used Hummer", url: "#" },
      { tagName: "Used Jaguar", url: "#" },
      { tagName: "Used Jeep", url: "#" },
      { tagName: "Used Lamborghini", url: "#" },
      { tagName: "Used Land Rover", url: "#" },
      { tagName: "Used Lexus", url: "#" },
      { tagName: "Used Maserati", url: "#" },
      { tagName: "Used Maybach", url: "#" },
      { tagName: "Used Mercedes-Benz", url: "#" },
      { tagName: "Used Mini", url: "#" },
      { tagName: "Used Nissan", url: "#" },
      { tagName: "Used Porsche", url: "#" },
      { tagName: "Used Rolls-Royce ", url: "#" },
      { tagName: "Used Toyota", url: "#" },
      { tagName: "Used Triumph", url: "#" },
      { tagName: "Used Volkswagen", url: "#" },
      { tagName: "Used Volvo", url: "#" },
    ],
  },
];

const locations = [
  { city: "DEL", sector: "Gurgaon, Sector 37", url: "#" },
  { city: "BOM", sector: "Mumbai, Andheri East", url: "#" },
  { city: "HYD", sector: "Hyderabad,  Banjara Hills", url: "#" },
  { city: "AMD", sector: "Gujarat, Ahmedabad", url: "#" },
  { city: "BLR", sector: "Bengaluru, Residency Road", url: "#" },
];
const MostSearched = () => {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="container">
        <ul>
          {searchedList.map((item, ind) => (
            <li
              key={ind}
              className="pt-10 pb-10 border-t border-neutral-300 first-of-type:border-none first-of-type:pt-0"
            >
              <h2 className="tracking-tightest mb-8 pr-8">{item.title}</h2>
              <p className=" text-xl leading-1.7 font-light ">
                {item.tags.map((tag, ind) => (
                  <Link
                    href={tag.url}
                    key={ind}
                    className="relative collection-search-tag text-black tracking-wide leading-0 px-2 border-l border-neutral-600 first-of-type:border-none first-of-type:pl-0"
                  >
                    {tag.tagName}
                  </Link>
                ))}
              </p>
            </li>
          ))}
        </ul>

        <ul
          className="[&>*:last-child]:border-b border-gray-300 mt-4"
        >
          {locations.map((location, index) => (
            <CommonLocationItem key={index} location={location} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MostSearched;
