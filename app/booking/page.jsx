import React from "react";
import { productsAPI } from "../lib/services/api";
import BookingClient from "./BookingClient";

// Force dynamic rendering to ensure fresh data on every request
export const dynamic = 'force-dynamic';

// Set a very short revalidation time for more frequent updates
export const revalidate = 60; // Revalidate every minute instead of every hour

// Helper to map API response to the structure expected by BookingCar/CommonInfoUsp
const mapProductToCarData = (apiResponse) => {
  if (!apiResponse || !apiResponse.success) return null;

  const p = apiResponse.product || {};
  const { productImages } = apiResponse;
  const brandName = apiResponse.brand?.bname || p.brand?.name || "";
  const modelName = apiResponse.brandModel?.modelname || p.model?.name || "";

  // Prefer images array if available, else fallback to thumbnail
  const primaryImage = p.prolistimage ? `https://cdn.bigboytoyz.com/new-version/products/${p.prolistimage}` : Array.isArray(productImages) && productImages.length > 0 ? `https://cdn.bigboytoyz.com/new-version/products/product/${productImages[0].pgalimage}` : p.thumbnail;

  return {
    _id: p.id || p._id,
    title: p.proname || p.title || p.name || `${brandName} ${modelName}`,
    brand: brandName,
    model: modelName,
    price: (parseFloat(p.price || p.proprice || 0) || 0).toLocaleString("en-IN"),
    registrationYear: p.registrationYear || p.yearOfRegistration || p.year || "",
    registrationState: p.registrationState || p.regstate || "",
    kmDriven: p.kmDriven || p.kmdriven || "",
    fuelType: p.fuelType || p.fueltype || "",
    thumbnail: primaryImage,
    isBooked: p.isBooked || p.booked === "yes" || p.booked === "1" || false,
  };
};

// Helper to log debug info
function logDebug(label, data) {
  if (process.env.NEXT_PUBLIC_DEBUG === "true") {
    console.log(`DEBUG: ${label}`, data);
  }
}

// Helper function to generate car data from API responses
async function generateCarData(carId) {
  try {
    const response = await productsAPI.getOne(carId);

    if (response && response.success && response.product) {
      logDebug("Car data from single product API", response.product);
      return mapProductToCarData(response);
    }
  } catch (error) {
    console.error("Error in generateCarData:", error);
    return null;
  }
}

const Booking = async ({ searchParams }) => {
  const carId = searchParams?.carId || null;
  let carData = null;

  if (carId) {
    try {
      carData = await generateCarData(carId);
      console.log("Booking page - Initial car data:", carData);
    } catch (error) {
      console.error("Error fetching car data for booking page:", error);
    }
  }

  return (
    <BookingClient 
      initialCarData={carData}
      carId={carId}
    />
  );
};

export default Booking;
