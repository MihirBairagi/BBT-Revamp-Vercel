import { headers } from "next/headers";

const GUJARAT_REGION_CODE = "GJ";
const INDIA_COUNTRY_CODE = "IN";

/**
 * Determines if the current request originates from Gujarat, India.
 * Uses Vercel geo headers first (zero-latency), then falls back to ip-api.com.
 */
export async function isFromGujarat() {
  try {
    const headersList = await headers();

    // Fast path: Vercel automatically injects geo headers
    const vercelCountry = headersList.get("x-vercel-ip-country");
    const vercelRegion = headersList.get("x-vercel-ip-country-region");

    if (vercelCountry && vercelRegion) {
      return (
        vercelCountry === INDIA_COUNTRY_CODE &&
        vercelRegion === GUJARAT_REGION_CODE
      );
    }

    // Fallback: resolve IP via external geolocation API
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || headersList.get("x-real-ip");

    if (!ip || ip === "127.0.0.1" || ip === "::1") {
      return false;
    }

    const res = await fetch(`http://ip-api.com/json/${ip}?fields=countryCode,region`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return false;

    const data = await res.json();
    return (
      data.countryCode === INDIA_COUNTRY_CODE &&
      data.region === GUJARAT_REGION_CODE
    );
  } catch (error) {
    console.error("Geolocation check failed:", error);
    return false;
  }
}
