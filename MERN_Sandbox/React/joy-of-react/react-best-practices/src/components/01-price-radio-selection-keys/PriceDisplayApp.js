import React from "react";

import PlanSelection from "./PlanSelection";

import "../../utils/reset.css";
import "./styles.css";

const PLANS = [
  {
    label: "Free",
    id: "free",
    price: 0,
  },
  {
    label: "Gold",
    id: "gold",
    price: 100,
  },
  {
    label: "Platinum",
    id: "platinum",
    price: 250,
  },
  {
    label: "Enterprise",
    id: "enterprise",
    price: 999,
  },
];

function PriceDisplayApp() {
  return <PlanSelection plans={PLANS} />;
}

export default PriceDisplayApp;
