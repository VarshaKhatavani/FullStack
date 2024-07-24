import React from "react";
import useSWR from "swr";

const ENDPOINT =
  "https://jor-test-api.vercel.app/api/get-stock-quotes?simulatedError=true";

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  if (!json.data) {
    throw new Error(json.error);
  }

  return json.data;
}

function Ticker() {
  const { data = [], isLoading, error } = useSWR(ENDPOINT, fetcher);

  if (isLoading) {
    return null;
  }
  if (error) {
    console.error("Error in Ticker:", error);
    throw error; // This will be caught by the ErrorBoundary
  }

  return (
    <section className="ticker">
      <dl>
        {data.map(({ id, title, value, change }) => (
          <React.Fragment key={id}>
            <dt>{title}</dt>
            <dd>
              {value}{" "}
              <span className={change >= 0 ? "increasing" : "decreasing"}>
                {change}
              </span>
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}

export default Ticker;
