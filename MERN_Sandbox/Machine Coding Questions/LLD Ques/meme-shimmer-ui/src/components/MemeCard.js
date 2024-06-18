import React from "react";

const MemeCard = ({ data }) => {
  return (
    <>
      <div className="p-2 m-2 justify-start border border-gray-200 rounded-lg ">
        <img className="w-64 h-64" src={data.url} alt={data.title}></img>
      </div>
    </>
  );
};

export default MemeCard;
