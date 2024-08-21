import { useState } from "react";
import myImage from "../../images/Swiggy-2.png";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDebian } from "@fortawesome/free-brands-svg-icons";
import { CDN_URL } from "../utils/constants.js";

const RestaurantMenu = () => {
  // const [isVegOnly, setIsVegOnly ] = useState(false);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [showIndices, setShowIndices] = useState([]);

  const handleShowIndex = (index) => {
    const updatedIndex = showIndices.includes(index)
      ? showIndices.filter((i) => i !== index)
      : [...showIndices, index];
    setShowIndices(updatedIndex);
    console.log(showIndices);
  };

  if (resInfo === null) return;

  console.log(resInfo);
  let resHeaderInfo = resInfo[2]?.card?.card.info;
  console.log(resHeaderInfo);

  let offers = resInfo[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  console.log(offers);
  let menuList = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // I have used slice method (newMenuList)  but it isn't optimized way so to achieve filter method
  // is using @type : itemCategory

  let category = menuList.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  console.log(category);

  // console.log(resHeaderInfo);
  // console.log(offers);

  // const toggleVegType = () => {
  //     setIsVegOnly(!isVegOnly);
  // }

  if (resInfo === null) return;

  return (
    <div className="res-detail-info px-48 py-8 mt-0 ">
      <div className="res-info  p-4 border-dashed border-b-[1px] flex justify-between m-auto">
        <div className="detail-info centered-border ">
          <h3 className="res-title text-xl font-bold">{resHeaderInfo?.name}</h3>
          <span className="res-subtitle text-sm text-orange-600 font-semibold">
            {resHeaderInfo?.cuisines.join(", ")}
          </span>
          <br />
          <span className="res-subtitle text-sm text-gray-500">
            {resHeaderInfo?.areaName},{" "}
            {resHeaderInfo?.sla?.lastMileTravelString}
          </span>{" "}
          <br />
          <br />
          <span className="res-subtitle text-sm">
            {resHeaderInfo?.feeDetails?.message}{" "}
          </span>
        </div>
        <div className="detail-rating border border-solid border-gray-300 px-2 py-4 rounded-lg justify-center h-fit shadow-md">
          <span className="rate flex justify-center text-sm font-bold border-gray-300 border-dashed border-b-[1px] p-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 1l2.4 6.6h7.6l-6 4.8 2.4 6.6-6-4.8-6 4.8 2.4-6.6-6-4.8h7.6z"
                fill="green"
              />
            </svg>
            &nbsp;
            <span className="items-center text-sm text-green-950">
              {resHeaderInfo?.avgRatingString}
            </span>
          </span>
          <span className="rate-info text-xs">
            {resHeaderInfo?.totalRatingsString}
          </span>
        </div>
      </div>
      <div className="delivery-info p-4 scroll-smooth ">
        <div className="distance font-bold text-xl">
          <span>Deals for you </span>
        </div>
        <div className="latest-offers flex justify-start py-4 overflow-x-scroll  whitespace-nowrap  custom-scrollbar  ">
          {offers != undefined &&
            offers.map((offer) => {
              return (
                <div
                  key={offer?.info?.offerIds}
                  className="offers relative border border-solid mr-8 mb-4 rounded-xl w-[20rem] flex-shrink-0"
                >
                  <span className="beverages inline-block transform -rotate-90 justify-start absolute -ml-5 mt-8 text-[11px] text-red-500 font-bold border-b-[1px]"></span>
                  <div className="offer-container p-4 flex ">
                    <img
                      className="h-10 w-10"
                      src={CDN_URL + offer?.info?.offerLogo}
                    ></img>

                    <div>
                      <div className="offer font-bold text-xl ml-2">
                        {offer?.info?.header}
                      </div>
                      <div className="coupon-offer block text-xs ml-2">
                        {offer?.info?.couponCode
                          ? offer?.info?.couponCode
                          : offer?.info?.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="menu-list">
        {/* <div className="vegan-header">  */}
        {/* { menuList!= undefined && menuList[0]?.card?.card?.isPureVeg ?  "pure veg" : "veg only" }                */}
        {/* { menuList!= undefined && menuList[0].card.card.isPureVeg && (
                        <button onClick={toggleVegType}>Toggle</button>
                    )}         */}
        {/* </div> */}

        <div className="font-semibold text-sm justify-center flex">
          <FontAwesomeIcon
            icon={faDebian}
            className="px-4 mt-[1px] -rotate-45 text-orange-500"
          />
          MENU
          <FontAwesomeIcon
            icon={faDebian}
            className="px-4 mt-[1px] rotate-90 text-orange-500"
          />
        </div>

        <div className="menu p-2 ">
          <div className="left-menu">
            {category.map((category, index) => {
              console.log(category);
              return (
                <>
                  {/* controlled component */}
                  <RestaurantCategory
                    key={index}
                    data={category?.card?.card}
                    showItems={showIndices.includes(index)}
                    setShowIndex={() => {
                      console.log("before", index);
                      console.log("showIndex", showIndex);
                      //setShowIndex(index);
                      console.log("after", index);
                      handleShowIndex(index);
                    }}
                  />
                </>
              );
            })}
            {/* <div className="bg-green-500 w-8/12 ml-2 m-auto justify-between text-white font-semibold rounded-sm flex items-center p-2 absolute bottom-0">
                                     <div className='flex'>
                                        <div className=' p-[1px]'> 2 items  </div>
                                        <div className=' p-[1px]'> &nbsp; | 350 </div>
                                     </div>
                                     <div> View Cart</div>
                              </div>                                               */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
