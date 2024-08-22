import { useParams } from "react-router-dom";
import { addItem, removeItem } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ items, setShowItemCount }) => {
  console.log(items);
  console.log("setShowItemCount....", setShowItemCount);
  const { resId } = useParams();
  console.log("resId...", resId);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log("button click");
    console.log(item);
    const restArr = { ...item, resId: resId };
    dispatch(addItem(restArr));
    setShowItemCount(true);
    //hide the div after a few seconds
    setTimeout(() => {
      console.log("Hiding item count");
      setShowItemCount(false);
    }, 4000);
  };

  const handleRemoveItem = (item) => {
    if (item?.card?.info?.id) {
      dispatch(removeItem(item.card.info.id));
    }
  };

  const cartItems = useSelector((state) => state.cart.items);

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item?.card?.info?.id === itemId);
    return cartItem ? cartItem?.card?.info?.quantity : 0;
  };

  const formatCurrency = (amount) => {
    const locale = navigator.language || "en-IN";
    const currency = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "INR", // set fallback currency
    }).resolvedOptions().currency;
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount / 100);
  };

  return (
    <>
      <div>
        {items != undefined &&
          items.map((item) => {
            // console.log(item);
            return Array.isArray(item.itemCards) ? (
              <div
                key={item?.title}
                className="w-full flex justify-between py-4 border-b-[1px]"
              >
                <div className="py-2 w-full">
                  <div className="flex justify-between cursor-pointer p-2 bg-slate-50">
                    {item?.title} ({item?.itemCards.length})
                  </div>
                  {
                    //let arr = [...item.itemCards];
                    item.itemCards.map((nestedItem, nestedIndex) => {
                      const quantity = getItemQuantity(
                        nestedItem?.card?.info?.id
                      );
                      console.log("quantity....", quantity);

                      // if item has sub category
                      return (
                        <div
                          key={nestedItem?.card?.info?.id}
                          className="w-full px-4 flex justify-between py-4 border-b-[1px]"
                        >
                          <div className="py-2 w-9/12">
                            <div className="font-bold">
                              {nestedItem?.card?.info?.name}
                            </div>

                            <div className="text-sm  mt-2">
                              {formatCurrency(
                                nestedItem?.card?.info?.price ||
                                  nestedItem?.card?.info?.defaultPrice
                              )}
                            </div>
                            <div className="mt-4 text-sm mb-8 text-gray-500">
                              {nestedItem?.card?.info?.description}
                            </div>
                          </div>
                          <div className="w-3/12 p-8 relative">
                            {quantity > 0 ? (
                              <div className="flex items-center absolute left-10 mt-[70px] rounded-md bg-white shadow-lg cursor-pointer">
                                <button
                                  className="p-2 bg-white text-xs text-green-500 rounded-md border-0 w-8 "
                                  onClick={() => handleRemoveItem(nestedItem)}
                                >
                                  -
                                </button>
                                <span className="px-2 bg-white text-green-500">
                                  {quantity}
                                </span>
                                <button
                                  className="p-2 bg-white text-xs text-green-500 rounded-md border-0 w-8 cursor-pointer"
                                  onClick={() => handleAddItem(nestedItem)}
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                className="p-2 absolute shadow-lg border border-solid bg-white text-xs text-green-500 rounded-md w-16 left-10 mt-[70px] cursor-pointer"
                                id={nestedItem.card.info.id}
                                onClick={() => handleAddItem(nestedItem)}
                              >
                                ADD +
                              </button>
                            )}
                            {nestedItem?.card?.info?.imageId && (
                              <img
                                src={CDN_URL + nestedItem?.card?.info?.imageId}
                                className="w-44 rounded-lg"
                                alt={nestedItem?.card?.info?.name}
                              />
                            )}
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            ) : (
              // without sub category
              <div
                key={item?.card?.info?.id}
                className="w-full flex justify-between py-4 border-b-[1px]"
              >
                <div className="py-2 w-11/12">
                  <div className="font-bold">{item?.card?.info?.name}</div>

                  <div className="text-sm mt-2">
                    {formatCurrency(
                      item?.card?.info?.price || item?.card?.info?.defaultPrice
                    )}
                  </div>
                  <div className="mt-4 text-sm mb-8 text-gray-500">
                    {item?.card?.info?.description}
                  </div>
                </div>
                <div className="w-3/12 p-2 relative">
                  {getItemQuantity(item?.card?.info?.id) > 0 ? (
                    <div className="flex items-center absolute left-10 mt-[70px] bg-white rounded-md shadow-lg ">
                      <button
                        className="p-2 bg-white text-xs text-green-500 rounded-md  w-8 border-0"
                        onClick={() => handleRemoveItem(item)}
                      >
                        -
                      </button>
                      <span className="px-[12px] py-1 rounded-md bg-white text-green-500">
                        {getItemQuantity(item?.card?.info?.id)}
                      </span>
                      <button
                        className="p-2 bg-white text-xs text-green-500 rounded-md border-0 w-8 cursor-pointer"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="p-2 absolute shadow-lg border border-solid bg-white text-xs text-green-500 rounded-md w-16 left-10 mt-[70px] cursor-pointer"
                      onClick={() => handleAddItem(item)}
                    >
                      ADD +
                    </button>
                  )}
                  {item?.card?.info?.imageId && (
                    <img
                      src={CDN_URL + item?.card?.info?.imageId}
                      className="w-36 rounded-lg"
                      alt={item?.card?.info?.name}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ItemList;
