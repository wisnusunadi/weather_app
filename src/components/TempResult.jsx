import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempResult = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const tempDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];

  const horizonDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];
  return (
    <>
      <div className="block lg:hidden">
        <div className="flex items items-center justify-center my-5">
          <div className="flex flex-row items-center justify-center">
            <img src={icon} alt="icon-weather" className="mb-0" />
            <p className="text-4xl flex items-baseline">
              {`${temp.toFixed()}°`}
              <span className="text-sm font-medium uppercase relative top-[-10px] ml-1">
                {units === "metric" ? "C" : "F"}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row  justify-center items-center">
          {tempDetails.map(({ Icon, title, value }) => (
            <div className="flex  items-center font-light text-xs justify-center mx-2">
              <Icon size={18} className="mr-1" />
              {`${title}`} : <span className="ml-1">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-start justify-center  text-xs py-4 max-h-16">
          {horizonDetails.map(({ Icon, value, title }) => (
            <div className="flex flex-row items-center mx-4">
              <Icon size={30} className="mx-2" />
              {`${title}`}: <span className="ml-2">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
          {horizonDetails.map(({ Icon, value, title }) => (
            <div className="flex flex-row items-center">
              <Icon size={30} />
              {`${title}`} : <span className="ml-2">{value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between py-5 text-l text-cyan-200">
          <div className="flex flex-col items-center justify-center ">
            <img src={icon} alt="icon-weather" className="mb-0" />
            <p className="text-l text-cyan-200">{details}</p>
          </div>

          <div className="flex">
            <p className="text-4xl">{`${temp.toFixed()}°`} </p>
            <p className="px-2 text-xl font-medium">
              {" "}
              {units === "metric" ? "C" : "F"}
            </p>
          </div>

          <div className="flex flex-col space-y-3 items-start">
            {tempDetails.map(({ Icon, title, value }) => (
              <div className="flex items-center font-light text-sm justify-center">
                <Icon size={18} className="mr-1" />
                {`${title}`} : <span className="ml-2">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
          {horizonDetails.map(({ Icon, value, title }) => (
            <div className="flex flex-row items-center">
              <Icon size={30} />
              {`${title}`} : <span className="ml-2">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TempResult;
