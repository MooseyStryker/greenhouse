import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
// import { useEffect, useState } from "react";

function Hygrometer() {
  let { humidity, setHumidity, desiredHumidity, setDesiredHumidity } = useClimate();
  // const [desiredHumidity, setDesiredHumidity] = useState(humidity);
  // console.log("desired", desiredHumidity, "humidity", humidity);
  // useEffect(() => {
  //   console.log("hit");
  //   const timer = setTimeout(() => {
  //     if (humidity > desiredHumidity) {
  //       setHumidity((humidity -= 2));
  //     } else if (humidity < desiredHumidity) {
  //       setHumidity((humidity += 2));
  //     }
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, [humidity, desiredHumidity]);
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <div className="actual-humid">Desired Humidity: {desiredHumidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => {
          setDesiredHumidity(val);
        }}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
