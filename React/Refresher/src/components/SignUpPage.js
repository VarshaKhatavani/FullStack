import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register, // Registers form fields into react-hook-form
    handleSubmit, // Wraps form submission with validation
    formState: { errors }, // Contains validation errors
    watch, // Watches fields for changes
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const onSubmit = (data) => {
    const { password, confirmPassword } = data;

    // Custom validation for matching passwords
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setSuccessMessage("");
      return;
    }

    const expiryTime = 86400; // 1 hour
    const currentTime = Date.now(); // current time
    const expiryTimeStamp = currentTime + expiryTime * 1000;
    let uuid = crypto.randomUUID();
    const dataToStore = {
      ...data,
      userId: uuid,
      cartId: null,
      expiry: expiryTimeStamp,
    };

    // Retrieve existing users from localStorage
    let existingUsers = JSON.parse(localStorage.getItem("user")) || [];
    console.log(typeof existingUsers);
    //convert users array to object
    if (!Array.isArray(existingUsers)) {
      existingUsers = existingUsers ? [existingUsers] : []; // If users exists, make it an array; otherwise, an empty array
    }
    console.log(existingUsers);
    console.log(typeof existingUsers);
    existingUsers.push(dataToStore);
    /* {
        "data":
          {
            "username":"Varsha",
            "email":"khatvani.varsha@yahoo.com",
            "password":"123",
            "confirmPassword":"123"
          },
        "expiry":1725269084633
      }
    */

    localStorage.setItem("user", JSON.stringify(existingUsers));
    setSuccessMessage("Account Created Successfully");
    setErrorMessage("");

    setTimeout(() => {
      navigate("/signin"); // Navigate to the homepage (adjust the path as needed)
    }, 1000); // Delay for a better user experience (optional)
  };
  const password = watch("password");

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-10 mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your username"
              // required
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
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
              {...register("password", { required: "Password is required" })}
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
              // required
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              // value={confirmPassword}
              // onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Confirm your password"
              // required
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Display error message */}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {/* Display success message */}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
