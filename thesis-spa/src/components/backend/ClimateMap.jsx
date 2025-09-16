// ClimateMap.jsx
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import Papa from "papaparse";
import "leaflet/dist/leaflet.css";
import "../styles/ClimateMap.css";

const ClimateMap = () => {
  const [emissions, setEmissions] = useState({});
  const [worldData, setWorldData] = useState(null);

  // Fetch and parse CO₂ emissions CSV
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.csv");
      const text = await response.text();

      Papa.parse(text, {
        header: true,
        complete: (results) => {
          const data = results.data;

          // Build a map of country -> latest emissions
          // --- Inside Papa.parse complete ---
        const emissionsMap = {};

        data.forEach((row) => {
          const country = row["country"];
          const year = parseInt(row["year"]);
          const emissionPerCap = parseFloat(row["co2"])/(parseInt(row["population"])/50000000);

          // Skip rows without valid data
          if (!country || isNaN(year) || isNaN(emissionPerCap)) return;

          // Only keep the latest year
          if (!emissionsMap[country] || year > emissionsMap[country].year) {
            emissionsMap[country] = {
              year,
              emissionPerCap,
            };
          }
        });

        // Convert into simpler structure for state
        const latestEmissions = {};
        Object.keys(emissionsMap).forEach((country) => {
          latestEmissions[country] = emissionsMap[country].emissionPerCap;
        });

        setEmissions(latestEmissions);
        console.log("Latest emissions by country:", latestEmissions);

        },
      });
    } catch (err) {
      console.error("Error fetching CSV data", err);
    }
  };

  fetchData();
}, []);


  // Fetch GeoJSON world map
  useEffect(() => {
    const fetchWorld = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
        );
        const data = await response.json();
        setWorldData(data);
      } catch (err) {
        console.error("Error fetching world map:", err);
      }
    };

    fetchWorld();
  }, []);

  // Style function for countries
  const getColor = (d) => {
    return d > 1000
      ? "#800026"
      : d > 500
      ? "#BD0026"
      : d > 200
      ? "#E31A1C"
      : d > 100
      ? "#FC4E2A"
      : d > 50
      ? "#FD8D3C"
      : d > 20
      ? "#FEB24C"
      : d > 0
      ? "#FED976"
      : "#ccc";
  };
    
  const style = (feature) => {
    let country = feature.properties.name;

    // Quick mapping fix
    if (country === "United States of America") country = "United States";

    const emission = emissions[country] || 0; // match by country name
    return {
      fillColor: getColor(emission),
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };



  return (
    <div className='climateMap'>
      {worldData ? (
        <MapContainer
          center={[20, 0]}
          zoom={2}
          className="mapContainer"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <GeoJSON data={worldData} style={style} />
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default ClimateMap;
