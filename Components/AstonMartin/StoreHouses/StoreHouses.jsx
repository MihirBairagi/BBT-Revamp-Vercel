import React from "react";
import Image from "next/image";
import StoreHouseItem from "./StoreHouseItem";

const storeHouses = [
  {
    _id: "001",
    title: "Virage",
    description:
      "Much similar to DB8 and DB9, the two plus two convertible is equipped with a V-12 engine. With a new grille, front bumper, side strakes shimmering with LEDs and headlights, Aston Martin offers you a fresh design.",
  },
  {
    _id: "001",
    title: "Rapide",
    description:
      "A car for sports lovers, Rapide is a rear-wheel drive, equipped with a V12 engine. It can reach 188.5 mph (303 km/h) in 5.3 seconds. With features like Bang &Olufsen 16 speaker sound system accompanied by tweeters, USB, and iPod connectivity, this model is set to take your breath away.",
  },
  {
    _id: "001",
    title: "DBS",
    description:
      "A David Brown series, DBS is a GT car produced by the British manufacturer Aston Martin Lagonda Limited from 1967 to 1972. A new model Aston Martin DBSV12 came in 2007. A larger coupe’ than DB6, DBS has four full-sized seats and is powered by a straight-six engine.",
  },
  {
    _id: "001",
    title: "DB9",
    description:
      "A successor of DB7, DB9 is a grand tourer available as a coupe’ as well as a convertible. Well rated by critics, DB9 is equipped with a 6.0L V12 engine and can offer a speed of 295km/h in 4.1 seconds.",
  },
  {
    _id: "001",
    title: "Vanquish",
    description:
      "A Bond car, Vanquish has a powerful engine and comes in two categories: Vanquish V12 and Vanquish S. It’s a grand tourer and a successor of DBS. It’s available in both 2+0 and 2+2 seating depending on the type of model.",
  },
];

const StoreHouses = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="text-center [&>p]:text-xl [&>p]:font-light [&>p]:tracking-tight [&>p]:leading-1.6 [&>p>strong]:font-medium">
          <p>
            Founded as "Bamford & Martin Ltd" by Robert Bamford and Lionel
            Martin, <strong>Aston Martin</strong> has been continuing to make
            its mark in the automobile industry. The first model came in 1913.
            Initially named as ‘Coal Scuttle’, the vintage beauty was renamed as
            A3. Believing in the power of evolution, the brand has evolved with
            the times. From logo to car models, the brand has undergone a huge
            transformation.
          </p>
          <br />
          <p>
            Well known as Bond cars after they appeared in movies like
            ‘Goldfinger’ and ‘Quantum of Solace’, Aston Martin is on the list of
            every car lover. It has been successful in positing itself as a
            competitor with brands like <strong>Ferrari</strong> and{" "}
            <strong>BMW</strong> and also carving a niche in a market of cars in
            India.
          </p>
        </div>
        <div className="flex justify-center items-center w-full mt-10 mb-16">
          <Image
            src="/images/square-box-arrow.webp"
            alt="Down Arrow"
            width="29"
            height="100"
            className="object-contain w-11"
          />
        </div>
        <div className="[&>p]:text-justify [&>p]:text-xl [&>p]:font-light [&>p]:tracking-tight [&>p]:leading-1.6 [&>p>strong]:font-medium [&>h2]:tracking-tighter">
          <h2 className="leading-1.2">
            Storehouse of <br /> Pre-owned Aston Martin Cars.
          </h2>
          <br />
          <p>
            Owned by a group of different investors, Aston Martin offers a vast
            array of options. From an iconic DB (David Brown) series to One-77,
            one can just sit and ponder which model to choose. But not all car
            lovers can buy an Aston Martin for the simple reason that an Aston
            Martin like any other luxury car is really expensive.
          </p>
          <br />
          <p>
            Don't feel disheartened, for we are the solution: Big Boy Toyz. Big
            Boy Toyz, based on the highway of Delhi and Gurgaon, offers you a
            range of affordable pre-owned luxury cars. 'Pre-Owned' doesn't need
            to scare you as Big Boy Toyz makes it a point to offer its customers
            well verified and certified cars. The prices of cars depend on the
            features and the time period in which it had been used by the owner.
            Turning every car lover’s dream into reality, Big Boy Toyz products
            assure quality, luxury, and comfort.
          </p>
          <br />
          <p>
            <strong>
              In terms of models for pre-owned Aston Martin, <br /> Big Boy Toyz
              offer:
            </strong>
          </p>
        </div>

        {/* Store House */}
        <div>
          {storeHouses.map((sh) => (
            <StoreHouseItem key={sh._id} data={sh} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreHouses;
