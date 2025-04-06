import { useEffect, useState } from "react";
import ButtonTop from "./components/ButtonTop";
import Forecast from "./components/Forecast";
import Input from "./components/Input";
import LocationTime from "./components/LocationTime";
import TempResult from "./components/TempResult";
import getFormattedWeatherData from "./services/weatherServices";
import { Notfound } from "./components/Notfound";

const App = () => {
  const [query, setQuery] = useState({ q: "surabaya" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units })
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        setWeather(null);
      });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);


  return (
    <div
      className={` min-h-screen bg-gradient-to-br shadow-xl shadow-gray-400 from-blue-500 to-sky-700 lg:px-32 lg:max-w-screen-lg lg:mx-auto lg:mt-4 py-5`}
    >
      <ButtonTop setQuery={setQuery}></ButtonTop>
      <Input setQuery={setQuery} setUnits={setUnits}></Input>

    

      {weather != null ? (
        <>
          <LocationTime weather={weather}></LocationTime>
          <TempResult weather={weather} units={units}></TempResult>
          <Forecast title="3 hour forecast" data={weather.hourly}></Forecast>
         <Forecast title="5 days forecast" data={weather.daily}></Forecast> 
        </>
      ) : (
        <Notfound></Notfound>
      )}
    </div>
  );
};

export default App;
