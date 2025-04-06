import React from "react";

const ButtonTop= ({setQuery}) =>{

  const listkota = [
    {
      id: 1,
      name: "Jakarta",
    },
    {
      id: 2,
      name: "Singapura",
    },
    {
      id: 3,
      name: "Kuala Lumpur",
    },
    {
      id: 4,
      name: "Tokyo",
    },
  ];

  return (
    <div className="items-center flex justify-around my-3">
      {listkota.map((kota) => (
        <button key={kota.id} className="text-xs font-medium lg:text-lg hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        onClick={() => setQuery({q:kota.name})}
        >
          {kota.name}
        </button>
      ))}
    </div>
  );
}

export default ButtonTop;
