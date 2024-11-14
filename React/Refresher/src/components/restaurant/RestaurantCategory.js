import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //lifted the state up & now this showItem will be controlled by parent using index
  //commenting below
  //const [showItems, setShowItems] = useState(false);
  const [showItemCount, setShowItemCount] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems); - lifted state
    setShowIndex();
  };

  const navigate = useNavigate();

  const handleViewCart = () => {
    navigate("/cart");
  };

  return (
    <>
      {/* // Accordian Header */}
      <div className="m-2 rounded-sm">
        <div
          className="flex justify-between cursor-pointer  bg-zinc-50 p-2"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data?.title} (
            {data?.itemCards
              ? data?.itemCards?.length
              : data?.categories?.length}
            )
          </span>
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        {/* // Accordian Body */}
        <div>
          {/* { console.log(data?.itemCards) } { console.log(data?.categories) } */}
          {data?.itemCards != undefined
            ? showItems && (
                <ItemList
                  key={data?.title}
                  items={data?.itemCards}
                  setShowItemCount={setShowItemCount}
                />
              )
            : showItems && (
                <ItemList
                  key={data?.title}
                  items={data?.categories}
                  setShowItemCount={setShowItemCount}
                />
              )}
        </div>
        {showItemCount && (
          <div className="bg-green-500 w-8/12  m-auto justify-between text-white font-semibold rounded-sm flex items-center p-2  bottom-0 fixed animate-slideUp shadow-md">
            <div className="flex">
              <div className=" p-[1px]"> 1 item added </div>
              {/* <div className=" p-[1px]"> &nbsp; | 350 </div> */}
            </div>
            <div onClick={handleViewCart} className="cursor-pointer">
              {" "}
              View Cart{" "}
              <FontAwesomeIcon icon={faBagShopping} className="px-2" />{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantCategory;
