import React, { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
const Input = ({ setQuery, setUnits }) => {
  const [kota, setKota] = useState("");
  const handleSearch = () => {
    if (kota !== "") setQuery({ q: kota });
  };

  const handleLocationClick = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude,longitude} = position.coords 
        setQuery({lat:latitude,lon:longitude})
      })
    }
  }

  return (
    <div className="flex justify-center flex-row">
      <div className="flex flex-row w-3/4 items-center  justify-center space-x-4">
        <input
          value={kota}
          onChange={(e) => setKota(e.currentTarget.value)}
          type="text"
          placeholder="input city name"
          className="text-gray-400 p-2 text-xl font-light w-full
        capitalize shadow-xl focus:outline-none placeholder:lowercase"
        ></input>
        <BiSearch onClick={handleSearch}
          size={30}
          className=" cursor-pointer transition ease-out hover:scale-125"
        ></BiSearch>
        <BiCurrentLocation 
        onClick={handleLocationClick}
          size={30}
          className=" cursor-pointer transition ease-out hover:scale-125"
        ></BiCurrentLocation>
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button onClick={()=>setUnits("metric")} className="text-2xl font-medium transition ease-out hover:scale-125">
        °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button   onClick={()=>setUnits("imperial")} className="text-2xl font-medium transition ease-out hover:scale-125">
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;
