import React from "react";
import useSWR from "swr";

import UserCard from "./UserCard.js";
import Spinner from "./Spinner.js";

import "./reset.css";
import "./styles.css";

/*
  API INSTRUCTIONS
  
  This endpoint expects a GET request.
  
  To simulate an error, attach the following
  query parameter: `simulatedError=true`
*/

const ENDPOINT = "https://jor-test-api.vercel.app/api/get-current-user";

function SpinnerApp() {
  return <UserCard name="Name here" email="Email here" />;
}

export default SpinnerApp;
