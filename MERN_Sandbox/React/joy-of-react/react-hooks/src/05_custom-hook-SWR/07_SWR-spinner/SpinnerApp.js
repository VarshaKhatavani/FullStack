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

async function fetcher(endpoint) {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}

function SpinnerApp() {
  const { data, error } = useSWR(ENDPOINT, fetcher);
  console.log(data);
  console.log(error);

  const isLoading = !data && !error;

  if (isLoading) return <Spinner />;

  if (error) return <p>Something went wrong!</p>;

  if (data && data?.user)
    return <UserCard name={data.user.name} email={data.user.email} />;
}

export default SpinnerApp;
