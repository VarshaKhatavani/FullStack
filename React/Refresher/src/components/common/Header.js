import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

import myImage from "../../../images/Swiggy-2.png";
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../../utils/context/UserContext.js";
import { useRestaurantContext } from "../../utils/context/RestaurantContext.jsx";
import { clearCart } from "../../utils/store/cartSlice.js";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const { locale } = useRestaurantContext();
  // console.log(locale, "from header");
  // const onlineStatus = useOnlineStatus();
  const [btnLogin, setBtnLoginLogout] = useState("Sign In");

  const totalItems = useSelector((store) => store.cart.totalItems);
  // console.log(totalItems);

  const navigate = useNavigate();

  useEffect(() => {
    setBtnLoginLogout(loggedInUser ? "Sign Out" : "Sign In");
  }, [loggedInUser]);

  const dispatch = useDispatch();
  const handleSignInOut = () => {
    if (btnLogin === "Sign In") {
      navigate("/signin");
    } else {
      localStorage.removeItem("loggedInUser");
      dispatch(clearCart());
      setLoggedInUser(null);
      navigate("/");
    }
  };

  // logo
  // navigation menu
  return (
    <div className="flex justify-between bg-white shadow-lg mb-2 ">
      <div className="flex">
        <span>
          <img className="w-26 h-24" src={myImage} alt="" />
        </span>
        {/* <span className="flex flex-col justify-end  mb-2 text-base font-bold mr-1 ">
          {onlineStatus ? <span>&#x1F7E2;</span> : <span>&#x1F534;</span>}
        </span> */}
        {locale !== undefined && locale.length > 0 && (
          <>
            <span className="flex flex-col justify-end mb-2 mr-2 text-base font-semibold">
              {locale[0]}
              <span className="text-xs font-semibold text-gray-500">
                {" "}
                {locale.slice(1, 3).join(" ")}
              </span>
            </span>
          </>
        )}
      </div>
      <div className="flex items-center font-semibold ">
        <ul className="flex p-4 m-4 items-center ">
          {/* <li className="px-4">
            {onlineStatus ? <span>&#x1F7E2;</span> : <span>&#x1F534;</span>}
          </li> */}
          <li className="px-4 hover:text-orange-500 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 hover:text-orange-500 cursor-pointer">
            <Link to={"/search"}>Search</Link>
          </li>
          {/* <li className='px-4 hover:text-orange-500 cursor-pointer'><Link to={"/contact"}>Contact Us</Link></li> */}
          <li className="px-4 pr-6 hover:text-orange-500">
            <button onClick={handleSignInOut}>{btnLogin}</button>
          </li>
          <FontAwesomeIcon icon={faUser} className="text-base" />
          {loggedInUser ? (
            <li className="pl-2 font-bold"> {loggedInUser}</li>
          ) : (
            <li className="pl-2 font-bold"> Guest</li>
          )}
          <li className="px-4 hover:text-orange-500 cursor-pointer nav-items-menu">
            <Link to={"/cart"}>
              {" "}
              <FontAwesomeIcon
                icon={faShoppingCart}
                className=" text-2xl mt-2"
              />
              <span className="bg-orange-500 text-white rounded-full w-4 h-4 absolute -mt-8 ml-4 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
