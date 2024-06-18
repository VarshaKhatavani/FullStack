import React from "react";

const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((n, i) => (
      <div className=" flex m-2 justify-start border border-gray-200 rounded-lg ">
        <div className="p-2 m-2 w-64 h-64 bg-gray-100"></div>
      </div>
    ));
};

export default Shimmer;
