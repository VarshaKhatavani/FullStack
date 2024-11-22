import cartImg from "../../../images/empty-cart.png";
import CartList from "./CartList";

import { useSelector } from "react-redux";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  console.log(cartState);
  const cartItem = cartState.items;
  console.log(cartItem);

  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (!Array.isArray(storedUser)) {
    storedUser = storedUser ? [storedUser] : []; // If users exists, make it an array; otherwise, an empty array
  }

  let loggedInUser = localStorage.getItem("loggedInUser");
  const user = storedUser?.find((user) => user.userId === loggedInUser);
  console.log(user);

  return (
    <div className="p-2 m-2">
      {user !== undefined && cartItem.length > 0 && (
        <div className="bg-white w-full shadow-lg p-4 mt-[16px] rounded-lg h-auto ">
          <p className="font-bold mb-2">Delivery Address</p>
          <p className="text-wrap flex-wrap w-40"> {user.address} </p>
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
