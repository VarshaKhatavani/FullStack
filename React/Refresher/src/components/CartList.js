import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice.js";
import { faPercentage } from "@fortawesome/free-solid-svg-icons";

const CartList = ({ items }) => {
  // handleRemove
  console.log("cart list item");
  console.log(items);

  // since currentItems are in the form of object - converted below to array

  // const handleRemove = (itemToRemove) =>{
  //   setItems((currentItems) => {
  //           const filteredItems = Object.values(currentItems).filter((menu)=> {
  //                 console.log(menu)
  //                 return  menu.card.info.id !== itemToRemove.info.id
  //           });
  //       console.log(filteredItems);
  //       return filteredItems;  { ...currentItems , ...filteredItems}
  //   });
  // }

  const dispatch = useDispatch();

  const totalItems = useSelector((store) => store.cart.totalItems);
  console.log(totalItems);

  const currentRestaurantId = useSelector(
    (store) => store.cart.currentRestaurantId
  );
  console.log("currentRestaurantId....", currentRestaurantId);
  var subTotal = 0;
  var shipping = 49;

  const handleRemove = (item) => {
    console.log("handleRemove", item);
    dispatch(removeItem({ restaurantId: currentRestaurantId, itemId }));
  };

  return (
    <>
      <div className="w-full flex gap-3">
        <div className="w-8/12">
          {items != undefined && items.length > 0 ? (
            items.map((item) => {
              console.log(item);
              const { card } = item;
              console.log(card);
              if (!card || !card.info) return null; // Check for card and card.info

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
                        ₹ {(itemPrice / 100).toFixed(2)} x {quantity}
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
          <div className="bg-white w-4/12 shadow-lg p-4 mt-[16px] rounded-lg h-[314px] ">
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
              <div> ₹ {subTotal.toFixed(2)}</div>
            </div>
            <div className="flex justify-between p-2">
              <div> Delivery Fee </div>
              <div> ₹ {shipping.toFixed(2)} </div>
            </div>
            <div className="flex justify-between p-2 font-bold border-t-[1px]">
              <div> Total </div>
              <div> ₹ {(subTotal + shipping).toFixed(2)} </div>
            </div>
            <div className="flex justify-between m-auto w-full mt-2">
              <button className="p-2 bg-black text-white w-full rounded-lg ">
                {" "}
                Pay ₹ {(total = subTotal + shipping)}{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CartList;
