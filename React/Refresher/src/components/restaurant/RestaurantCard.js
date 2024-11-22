import { CDN_URL } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  const { resData } = props;

  //way to access properties or methods of an object without triggering an error if the object is null or undefined.
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  // console.log(CDN_URL + cloudinaryImageId);

  // const starCount = Math.round(avgRating);

  // access array inside object
  const { header, subHeader } = aggregatedDiscountInfoV3 || {};
  const { deliveryTime } = sla || {};

  return (
    <div className="res-content flex m-2 p-3 cursor-default">
      <div className="foodCard w-[230px] h-68 p-1 cursor-pointer hover:scale-90 ease-in-out duration-300">
        <img
          alt="cuisine-pic"
          className="h-40 bg-cover rounded-xl"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <div className="absolute flex -mt-10 p-2 text-white font-bold ">
          <span className="cost">
            {" "}
            {header} &nbsp;{subHeader}
          </span>
        </div>
        <div className="p-2">
          <span className="title font-bold">{name}</span>
          <br />
          <div className="flex bg-green-600 w-[18px] h-[18px] items-center rounded-full">
            <FontAwesomeIcon
              icon={faStar}
              className="text-white text-xs p-1 -ml-[2px]"
            />{" "}
            <span className="mt-[1px] ml-2 font-bold text-sm ">
              {" "}
              {avgRating}{" "}
            </span>
          </div>

          <span className="reachingTime">
            <b>{deliveryTime} MINS</b>
          </span>
          <br />
          <span className="cuisine">{cuisines.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
