import React from 'react'

const LocationTime = ({ 
  weather : {formattedLocalTime ,name, country,flag}
}) => {
  return (
    <div>
            <div className="flex items-center justify-center my-5">
                <p className="text-l font-extralight">
                  {formattedLocalTime}
                </p>
            </div>
            <div className="flex items-center justify-center my-3">
                <img src={flag} className='w-9 mx-3'/>
                  
                <p className="text-xl font-medium">{`${name} , ${country}`}</p>
            </div>
        </div>
  )
}



export default LocationTime