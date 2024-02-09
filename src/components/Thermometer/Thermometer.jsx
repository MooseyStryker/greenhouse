import ReactSlider from "react-slider";
import "./Thermometer.css";
import { useClimate } from "../../context/ClimateContext";
// import { useEffect, useState } from "react";

function Thermometer() {
  let { temp, setTemp, desiredTemp, setDesiredTemp } = useClimate();
  // const [desiredTemp, setDesiredTemp] = useState(temp);
  // console.log("desired", desiredTemp, "temp", temp);
  // useEffect(() => {
  //   console.log("hit");
  //   const timer = setTimeout(() => {
  //     if (temp > desiredTemp) {
  //       setTemp((temp -= 1));
  //     } else if (temp < desiredTemp) {
  //       setTemp((temp += 1));
  //     }
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, [temp, desiredTemp]);
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <div className="actual-temp">Desired Temperature: {desiredTemp}°F</div>
      <ReactSlider
        value={temp}
        onAfterChange={(val) => {
          setDesiredTemp(val);
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
