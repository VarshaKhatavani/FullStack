import React from "react";
import "./04-contactCard.css";
import ContactCard from "../props/04-component-contactCard";

// const data = [
//   {
//     id: "sunita-abc123",
//     name: "Sunita Kumar",
//     job: "Electrical Engineer",
//     email: "sunita.kumar@acme.co",
//   },
//   {
//     id: "henderson-def456",
//     name: "Henderson G. Sterling II",
//     job: "Receptionist",
//     email: "henderson-the-second@acme.co",
//   },
//   {
//     id: "aio-ghi789",
//     name: "Aoi Kobayashi",
//     job: "President",
//     email: "kobayashi.aoi@acme.co",
//   },
// ];

const MapContactCard = () => {
  return (
    <ul>
      <ContactCard
        name="Henderson G. Sterling II"
        job="Receptionist"
        email="henderson-the-second@acme.co"
      />
    </ul>
  );
};

export default MapContactCard;
