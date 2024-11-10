import { useParams } from "react-router-dom";
import { addItem, clearCart, removeItem } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import VegIcon from "../../images/veg-icon.jpg";
import NonVegIcon from "../../images/non-veg-icon.png";
import bestSeller from "../../images/best-seller.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useState } from "react";
import Modal from "./Modal.js";

const ItemList = React.memo(({ items, setShowItemCount }) => {
  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToAdd, setItemToAdd] = useState(null); // Item to add after confirmation

  const { resId } = useParams();
  console.log("resId...", resId);
  const cartState = useSelector((state) => state.cart);
  const storedCartID = cartState.items[0]?.resId;
  const dispatch = useDispatch();

  let users = JSON.parse(localStorage.getItem("user"));
  // console.log("users itemlist");
  // console.log(typeof users);
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!Array.isArray(users)) {
    users = users ? [users] : []; // If users exists, make it an array; otherwise, an empty array
  }
  let user;
  if (loggedInUser) {
    user = users?.find((user) => user?.userId === loggedInUser);
  }
  // console.log(typeof user);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setItemToAdd(null); // Clear the stored item on close
  };

  const handleConfirm = () => {
    console.log("handle confirm called....");
    // Logic to reset the cart
    console.log("Cart reset!");
    dispatch(clearCart());
    closeModal(); // Close the modal after confirming

    // Add the stored item after resetting the cart
    if (itemToAdd) {
      console.log("again inside the confirm function...");
      //const itemWithResId = { ...itemToAdd, resId: resId };
      const itemWithUser = {
        ...itemToAdd,
        resId: resId,
        userId: user?.userId,
      };
      console.log("itemWithUser...");
      console.log(itemWithUser);
      dispatch(addItem(itemWithUser));
      setShowItemCount(true);

      // Hide count after some time
      setTimeout(() => {
        console.log("Hiding item count");
        setShowItemCount(false);
      }, 4000);
      setItemToAdd(null); // Clear the stored item
    }
  };

  const handleAddItem = useCallback(
    (item) => {
      // Add the restaurant ID to the item payload
      console.log("storedCartID.....", storedCartID);
      if (storedCartID !== undefined && storedCartID !== resId) {
        // Open modal if restaurant IDs don't match
        setItemToAdd({ ...item, resId: resId, usrId: user?.userId || null });
        openModal();
        return;
      } else {
        // Add item directly if restaurant IDs match or no cart
        //const itemWithResId = { ...item, resId: resId };
        const itemWithUser = {
          ...item,
          resId: resId,
          usrId: user?.userId || null,
        };
        console.log("itemWithUser...");
        console.log(itemWithUser);

        dispatch(addItem(itemWithUser));
        setShowItemCount(true);

        // Hide count after some time
        setTimeout(() => {
          console.log("Hiding item count");
          setShowItemCount(false);
        }, 4000);
      }
    },
    [storedCartID, resId, dispatch, setShowItemCount]
  );

  const handleRemoveItem = (item) => {
    if (item?.card?.info?.id) {
      const itemToRemove = {
        itemId: item.card.info.id,
        restaurantId: resId, // Include the restaurant ID in the payload
      };
      dispatch(removeItem(itemToRemove));
    }
  };

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const getItemQuantity = (itemId) => {
    const cartItem =
      cartItems.length > 0 &&
      cartItems != undefined &&
      cartItems.find((item) => item?.card?.info?.id === itemId);
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
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={handleConfirm}
        />

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
                      console.log(nestedItem);
                      const quantity = getItemQuantity(
                        nestedItem?.card?.info?.id
                      );
                      console.log("quantity....", quantity);

                      // if item has sub category
                      return (
                        <div
                          key={nestedItem?.card?.info?.id}
                          className="w-full justify-between flex px-4 py-4 border-b-[1px]"
                        >
                          <div className="w-9/12">
                            <div>
                              {nestedItem?.card?.info?.isBestseller && (
                                <img
                                  src={bestSeller}
                                  className="w-36 flex  ml-[-20px]"
                                  alt={nestedItem?.card?.info?.name}
                                  style={{ width: "110px", height: "75px" }}
                                />
                              )}
                            </div>

                            <div className="py-2 ">
                              <div className="flex space-x-2 ">
                                {nestedItem?.card?.info?.itemAttribute
                                  ?.vegClassifier == "VEG" ? (
                                  <img
                                    src={VegIcon}
                                    className="w-36 mt-1"
                                    alt={nestedItem?.card?.info?.name}
                                    style={{ width: "18px", height: "18px" }}
                                  />
                                ) : (
                                  <img
                                    src={NonVegIcon}
                                    className="w-36 mt-1"
                                    alt={nestedItem?.card?.info?.name}
                                    style={{
                                      width: "18px",
                                      height: "18px",
                                    }}
                                  />
                                )}
                                <div className="font-bold">
                                  {nestedItem?.card?.info?.name}
                                </div>
                              </div>

                              <div className="text-sm  mt-2">
                                {formatCurrency(
                                  nestedItem?.card?.info?.price ||
                                    nestedItem?.card?.info?.defaultPrice
                                )}
                              </div>

                              {nestedItem?.card?.info?.ratings?.aggregatedRating
                                ?.rating ? (
                                <div className="text-xs font-bold mt-1">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className={
                                      nestedItem?.card?.info?.ratings
                                        ?.aggregatedRating?.rating > 3
                                        ? "text-green-600"
                                        : "text-yellow-600"
                                    }
                                  />{" "}
                                  {""}
                                  <span
                                    className={
                                      nestedItem?.card?.info?.ratings
                                        ?.aggregatedRating?.rating > 3
                                        ? "text-green-600"
                                        : "text-yellow-600"
                                    }
                                  >
                                    {" "}
                                    {
                                      nestedItem?.card?.info?.ratings
                                        ?.aggregatedRating?.rating
                                    }{" "}
                                  </span>{" "}
                                  (
                                  {
                                    nestedItem?.card?.info?.ratings
                                      ?.aggregatedRating?.ratingCountV2
                                  }
                                  )
                                </div>
                              ) : null}

                              <div className="mt-4 text-sm mb-8 text-gray-500  ">
                                {nestedItem?.card?.info?.description}
                              </div>
                            </div>
                          </div>

                          <div className="p-8 relative w-3/12">
                            {quantity > 0 ? (
                              <div className="flex items-center absolute left-10 mt-[70px] rounded-md bg-white shadow-lg cursor-pointer ml-4">
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
                                className="p-2 absolute shadow-lg border border-solid bg-white text-xs text-green-500 rounded-md w-16 left-10 mt-[70px] cursor-pointer ml-6"
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
                  <div className="flex space-x-4">
                    {item?.card?.info?.isBestseller ? (
                      <img
                        src={bestSeller}
                        className="w-36 flex  ml-[-20px]"
                        alt={item?.card?.info?.name}
                        style={{ width: "110px", height: "75px" }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex space-x-2 ">
                    {item?.card?.info?.itemAttribute?.vegClassifier == "VEG" ? (
                      <img
                        src={VegIcon}
                        className="w-36 mt-1"
                        alt={item?.card?.info?.name}
                        style={{ width: "18px", height: "18px" }}
                      />
                    ) : (
                      <img
                        src={NonVegIcon}
                        className="w-36 mt-1"
                        alt={item?.card?.info?.name}
                        style={{
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    )}
                    <div className="font-bold">{item?.card?.info?.name}</div>
                  </div>

                  <div className="text-sm mt-2 font-semibold">
                    {formatCurrency(
                      item?.card?.info?.price || item?.card?.info?.defaultPrice
                    )}
                  </div>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                    <div className="text-xs font-bold mt-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className={
                          item?.card?.info?.ratings?.aggregatedRating?.rating >
                          3
                            ? "text-green-600"
                            : "text-yellow-600"
                        }
                      />{" "}
                      {""}
                      <span
                        className={
                          item?.card?.info?.ratings?.aggregatedRating?.rating >
                          3
                            ? "text-green-600"
                            : "text-yellow-600"
                        }
                      >
                        {" "}
                        {
                          item?.card?.info?.ratings?.aggregatedRating?.rating
                        }{" "}
                      </span>{" "}
                      (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </div>
                  ) : null}

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
});

export default ItemList;
