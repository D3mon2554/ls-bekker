import { useEffect, useState } from "react";

function useAppState() {
  const [app_state, setAppState] = useState({
    is_authenticated: false,
    device_height: null,
    device_width: null,
  });

  // app_state initializer
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        setAppState((prev) => {
          return {
            ...prev,
            device_height: window.innerHeight,
            device_width: window.innerWidth,
          };
        });
      }

      // Register resize event listener
      window.addEventListener("resize", handleResize);
      // Set initial device size values
      handleResize();

      // Deregister event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Default app_state change handler
  useEffect(() => {}, [app_state]);

  return {
    app_state,
    setAppState,
  };
}

export default useAppState;
