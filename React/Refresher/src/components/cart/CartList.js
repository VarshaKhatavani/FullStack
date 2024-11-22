import { Link } from "react-router-dom";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercentage } from "@fortawesome/free-solid-svg-icons";

import { CDN_URL } from "../../utils/constants";
import restaurantMenu from "../../utils/hooks/useRestaurantMenu.js";

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../utils/store/cartSlice.js";

const CartList = ({ items }) => {
  // handleRemove
  console.log("cart list item");
  console.log(items);

  const dispatch = useDispatch();

  const totalItems = useSelector((store) => store.cart.totalItems);
  console.log(totalItems);

  const currentRestaurantId = useSelector(
    (store) => store.cart.currentRestaurantId
  );
  console.log("currentRestaurantId....", currentRestaurantId);
  var subTotal = 0;
  var shipping = 49;
  var total = 0;

  const handleRemove = (item) => {
    console.log("handleRemove called... CartList");
    dispatch(
      removeItem({
        itemId: item,
        restaurantId: currentRestaurantId,
      })
    );
  };

  console.log(typeof currentRestaurantId);
  const resInfo = restaurantMenu(currentRestaurantId);
  console.log(resInfo);
  console.log("Cart Page....");
  if (resInfo === null) return;
  let resHeaderInfo = resInfo[2]?.card?.card.info;
  console.log(resHeaderInfo);
  console.log(resHeaderInfo?.name);
  const imageID = resInfo[2]?.card?.card.info?.cloudinaryImageId;
  const imageURL = CDN_URL + imageID;

  const formatCurrency = (amount) => {
    const locale = navigator.language || "en-IN";
    const currency = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "INR", // set fallback currency
    }).resolvedOptions().currency;
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return (
    <>
      <div className="w-full flex gap-3">
        <div className="w-8/12">
          {console.log(Object.values(items))}
          {items != undefined ? (
            Object.values(items).map((item) => {
              console.log(item.card);
              const { card } = item;
              console.log(card);
              if (!card || !card.info) return null; // Check for card and card.info
              console.log(card.info);
              const { id, name, imageId, price, quantity } = card.info;
              const itemPrice = price || card.info.defaultPrice;
              subTotal += (itemPrice / 100) * quantity;

              return (
                <div
                  key={id}
                  className="bg-white w-full mt-4 shadow-md p-4 flex rounded-lg"
                >
                  <div className="w-2/12 relative">
                    <img
                      src={CDN_URL + imageId}
                      className="w-32 rounded-lg"
                      alt={name}
                    />
                  </div>
                  <div className="p-2 w-9/12 flex justify-between items-center">
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="text-sm">
                        {formatCurrency(itemPrice / 100)} x {quantity}
                      </div>
                    </div>
                    <div
                      className="hover:cursor-pointer"
                      onClick={() => handleRemove(id)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No items in cart.</div>
          )}
        </div>

        {items.length !== 0 && (
          <>
            <div className="bg-white w-4/12 shadow-lg p-4 mt-[16px] rounded-lg h-[455px] ">
              <Link to={`/restaurants/${resHeaderInfo?.id}`}>
                <div className="font-bold p-2 flex cursor-pointer">
                  <span>
                    <img
                      src={imageURL}
                      className="w-20 h-14 rounded-sm"
                      alt={resHeaderInfo?.name}
                    />
                  </span>
                  <span className="flex flex-col justify-start ml-4 text-base uppercase ">
                    {resHeaderInfo?.name}
                    <p className="text-xs font-semibold text-gray-500 normal-case ">
                      {resHeaderInfo?.locality}
                    </p>
                  </span>
                </div>
              </Link>
              <div className="font-bold p-2">
                Order Summary ({totalItems} items)
              </div>
              <div className="flex justify-between w-full p-3 mt-2 border border-dashed">
                <div className="">
                  <FontAwesomeIcon icon={faPercentage} />
                  <span className="ml-2 font-semibold text-sm">
                    {" "}
                    Apply Coupon{" "}
                  </span>
                </div>
              </div>
              <div className="flex justify-between p-2">
                <div> Sub Total </div>
                <div>{formatCurrency(subTotal)}</div>
              </div>
              <div className="flex justify-between p-2">
                <div> Delivery Fee </div>
                <div>{formatCurrency(shipping)}</div>
              </div>
              <div className="flex justify-between p-2">
                <div> Platform fee</div>
                <div>{formatCurrency(6)}</div>
              </div>
              <div className="flex justify-between p-2">
                <div> GST and Restaurant Charges</div>
                <div>{formatCurrency(38)}</div>
              </div>

              <div className="flex justify-between p-2 font-bold border-t-[1px]">
                <div> Total </div>
                <div>{formatCurrency(subTotal + shipping)}</div>
              </div>
              <div className="flex justify-between m-auto w-full mt-2">
                <button className="p-2 bg-black text-white w-full rounded-lg ">
                  Pay {formatCurrency((total = subTotal + shipping))}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default CartList;
