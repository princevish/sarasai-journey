import { useState, useEffect } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";

/**
 * Custom hook to detect the current device type based on screen width.
 * Breakpoints are aligned with common design standards and project CSS.
 */
export const useDevice = () => {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1024px)");

    const handleDeviceChange = () => {
      if (mobileQuery.matches) {
        setDevice("mobile");
      } else if (tabletQuery.matches) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    // Initial check
    handleDeviceChange();

    // Listen for changes
    mobileQuery.addEventListener("change", handleDeviceChange);
    tabletQuery.addEventListener("change", handleDeviceChange);

    return () => {
      mobileQuery.removeEventListener("change", handleDeviceChange);
      tabletQuery.removeEventListener("change", handleDeviceChange);
    };
  }, []);

  return {
    device,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
    isHandheld: device === "mobile" || device === "tablet",
  };
};

export default useDevice;
