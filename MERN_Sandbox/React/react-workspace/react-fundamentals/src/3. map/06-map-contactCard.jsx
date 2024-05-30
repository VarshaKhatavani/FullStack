import React from "react";
import "../2. props/04-contactCard.css";
import ContactCard from "../2. props/04-component-contactCard";

const data = [
  {
    id: "sunita-abc123",
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "henderson-def456",
    name: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aio-ghi789",
    name: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
];

const MapContactCard = () => {
  return (
    <ul>
      {data.map((contact, index) => {
        return (
          <ContactCard
            name={contact.name}
            job={contact.job}
            email={contact.email}
          />
        );
      })}
    </ul>
  );
};

export default MapContactCard;
