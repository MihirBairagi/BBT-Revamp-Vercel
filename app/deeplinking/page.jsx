"use client";
import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DeepLinkingContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get sectionName from URL params
    const sectionName = searchParams.get("sectionName");

    function getMobileOperatingSystem() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      
      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
        return "Android";
      }

      // iOS detection
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }

      return "unknown";
    }

    const os = getMobileOperatingSystem();

    if (os === "Android") {
      let change = false;
      
      setTimeout(() => {
        if (change) {
          window.close();
        }
        if (!change) {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.bigboytoyzapp";
        }
      }, 2500);

      let deeplinkUrl = "";
      if (sectionName) {
        deeplinkUrl = "bbtapp://category/" + sectionName;
      }
      window.location.href = deeplinkUrl;

      // Handle event to check app installed or not
      window.onblur = () => {
        change = true;
      };
      window.onfocus = () => {
        change = false;
      };
    } else if (os === "iOS") {
      let change = false;
      
      setTimeout(() => {
        if (change) {
          window.close();
        }
        if (!change) {
          window.location.href =
            "https://apps.apple.com/in/app/big-boy-toyz/id1529588618";
        }
      }, 2500);

      let deeplinkUrl = "";
      if (sectionName) {
        deeplinkUrl = "bbtapp://category/" + sectionName;
      }

      window.location.href = deeplinkUrl;

      // Handle event to check app installed or not
      window.onblur = () => {
        change = true;
      };
      window.onfocus = () => {
        change = false;
      };
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div id="m20" className="mb-8">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Opening Big Boy Toyz App...
        </h2>
        <p className="text-gray-600">
          If the app doesn't open, you'll be redirected to the store.
        </p>
      </div>
    </div>
  );
}

export default function DeepLinkingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Loading...
            </h2>
          </div>
        </div>
      }
    >
      <DeepLinkingContent />
    </Suspense>
  );
}
