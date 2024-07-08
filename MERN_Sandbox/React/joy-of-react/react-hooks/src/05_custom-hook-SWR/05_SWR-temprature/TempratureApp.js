import React from "react";
import useSWR from "swr";

import "./reset.css";
import "./styles.css";

const ENDPOINT = "https://jor-test-api.vercel.app/api/get-temperature"; // ?simulatedError=true

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  console.log(json);
  return json;
}

function TempratureApp() {
  const { data, error } = useSWR(ENDPOINT, fetcher);
  console.log(data, error);

  return (
    <p>
      Current temperature:
      {typeof data?.temperature === "number" && (
        <span className="temperature">{data.temperature}°C</span>
      )}
    </p>
  );
}

export default TempratureApp;
