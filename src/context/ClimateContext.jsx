import { createContext, useState, useContext, useEffect } from "react";

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  let [temp, setTemp] = useState(50);
  let [humidity, setHumidity] = useState(40);
  let [desiredTemp, setDesiredTemp] = useState(temp);
  let [desiredHumidity, setDesiredHumidity] = useState(humidity);

  console.log("desired", desiredHumidity, "humidity", humidity);

  useEffect(() => {
    console.log("hit");
    const timer = setTimeout(() => {
      if (humidity > desiredHumidity) {
        setHumidity((humidity -= 1));
      }
      if (humidity < desiredHumidity) {
        setHumidity((humidity += 1));
      }
      if (temp > desiredTemp) {
        setTemp((temp -= 1));
      } else if (temp < desiredTemp) {
        setTemp((temp += 1));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [temp, desiredTemp, desiredHumidity, humidity]);

  return (
    <ClimateContext.Provider
      value={{
        temp,
        setTemp,
        humidity,
        setHumidity,
        desiredTemp,
        setDesiredTemp,
        humidity,
        desiredHumidity,
        setDesiredHumidity,
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
