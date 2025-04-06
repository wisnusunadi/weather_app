import React from "react";

const Forecast = ({title,data}) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="uppercase text-sm font-medium">{title} : </p>
      </div>
     
      <div className="flex items-center justify-between mt-2">
        {data.map((d,index)=>(
            <div key={index} className="justify-centers items-center flex flex-col ">
              <div className="border-2 border-white rounded-xl p-4 items-center justify-centers flex flex-col">

                <p className="text-sm font-light">{d.title}</p>
             <img
          src={d.icon}
          alt="icon-weather" className="w-12"
          />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
            </div>
        ))
    
        }
        </div>
    </div>
  );
}

export default Forecast;
