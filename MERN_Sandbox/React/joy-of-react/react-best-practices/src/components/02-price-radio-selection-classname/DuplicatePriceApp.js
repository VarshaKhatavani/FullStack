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
    label: "Beginner",
    id: "beginner",
    price: 99,
  },
  {
    label: "Expert (Individual)",
    id: "expert-individual",
    price: 499,
  },
  {
    label: "Expert (Teams)",
    id: "expert-teams",
    price: 499,
  },
];

function DuplicatePriceApp() {
  return <PlanSelection plans={PLANS} />;
}

export default DuplicatePriceApp;
