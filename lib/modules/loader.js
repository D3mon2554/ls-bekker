import { Loader } from "@googlemaps/js-api-loader";

// Function to initialize and return the loader instance
const initializeLoader = () => {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    version: "weekly",
    libraries: ["places"],
  });
  return loader;
};

export default initializeLoader;
