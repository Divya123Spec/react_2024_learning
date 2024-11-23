import "./styles.css";
import { useEffect, useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

export default function App() {
  // State to store the selected country name
  const [selectedCountry, setSelectedCountry] = useState("");

  // State to store the selected city name
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    console.log("Selected Country:", selectedCountry);
    console.log("Selected City:", selectedCity);
  }, [selectedCountry, selectedCity]);

  return (
    <div className="App">
      {/* Country Dropdown */}
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCity(""); // Reset city selection
        }}
      >
        <option value="" disabled>
          Select Country
        </option>
        {countries.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        disabled={!selectedCountry}
      >
        <option value="" disabled>
          Select City
        </option>
        {selectedCountry &&
          countries
            .find((country) => country.name === selectedCountry)
            ?.cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
      </select>
    </div>
  );
}
