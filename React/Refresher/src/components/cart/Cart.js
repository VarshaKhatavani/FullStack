import cartImg from "../../../images/empty-cart.png";
import CartList from "./CartList";
import UserContext from "../../utils/context/UserContext.js";
import { useContext } from "react";

import { useSelector } from "react-redux";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  console.log(cartState);
  const cartItem = cartState.items;
  console.log(cartItem);

  const { userObj } = useContext(UserContext);
  console.log(userObj);

  // console.log('-- cart page---');
  // console.log(cartItem);
  // console.log('-----');

  return (
    <div className="p-2 m-2">
      {userObj != undefined && cartItem.length > 0 && (
        <div className="bg-white w-full shadow-lg p-4 mt-[16px] rounded-lg h-auto ">
          <p className="font-bold mb-2">Delivery Address</p>
          <p className="text-wrap flex-wrap w-40"> {userObj.address} </p>
        </div>
      )}

      <div className="w-full flex">
        {cartItem.length === 0 ? (
          <div className="m-auto font-bold p-4">
            <div>
              {" "}
              <img src={cartImg} />{" "}
            </div>
            <h1 className="text-center">
              {" "}
              Your cart is empty. Add items to cart!
            </h1>
          </div>
        ) : (
          <CartList items={cartItem} />
        )}{" "}
        {/* handleRemove={handleRemove}  */}
      </div>
    </div>
  );
};
export default Cart;
