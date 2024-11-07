import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { useDispatch } from "react-redux";
import { generateCartId } from "../utils/cartSlice.js";
console.log(useForm);

const SignIn = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Generate a cart ID when the session starts (e.g., after user login)
    dispatch(generateCartId());
  }, [dispatch]);

  const onSubmit = (data) => {
    const { email, password } = data;
    let users = JSON.parse(localStorage.getItem("user"));
    console.log("user from local..SignIn...", users);
    //convert users array to object
    if (!Array.isArray(users)) {
      users = users ? [users] : []; // If users exists, make it an array; otherwise, an empty array
    }
    // Find the user that matches the email and password
    const user = users?.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user) {
      setError("");
      setIsLoggedIn(true);
      setLoggedInUser(user.username);
      localStorage.setItem("loggedInUser", user.userId);
      navigate("/");
      // alert("Sign in successful!");
      // Redirect to a protected page or home page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">
          {isLoggedIn ? "Welcome Back!" : "Sign In"}
        </h2>

        <div className="flex items-center">
          <span className="ml-48"> or</span>{" "}
          <h4 className="ml-2 text-red-500 font-bold">
            {" "}
            <Link to={"/signup"}> create new account </Link>
          </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              // required
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              {...register("password", {
                required: "Password  is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
              // required
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
