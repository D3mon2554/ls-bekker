import React, { useEffect, useState } from "react";
import Styles from "@ui/map/map.module.scss";
import initializeLoader from "@modules/loader";

const Map = ({ address }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loader = initializeLoader(); // Initialize the loader
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 18, // Adjust the zoom level as needed
          };
          const newMap = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);

  return <div id="map" className={`${Styles.map}`}></div>;
};

export default Map;
