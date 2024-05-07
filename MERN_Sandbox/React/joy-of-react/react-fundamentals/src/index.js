import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProfileCardApp from "./4. styling/09-profileCard-app";
// import ShoppingCart from "./3. map/08-shoppingCart";
// import ShoppingList from "./1. render/01-render-shoppingList";
// import FriendlyGreeting from "./2. props/02-props-friendlyGreeting";
// import MessageElement from "./1. render/03-render-message";
// import ContactCard from "./2. props/04-component-contactCard";
// import Button from "./2. props/05-children-prop-button";
// import MapContactCard from "./3. map/06-map-contactCard";
// import AvatarApp from "./3. map/07-map-avatar";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = React.createElement("h1", { id: "hello" }, "Welcome to React!");

root.render(
  <>
    {/* <ShoppingList />
    <FriendlyGreeting name="Varsha" />
    <FriendlyGreeting name="Julie" />
    <MessageElement />
    <ContactCard
      name="Sunita Kumar"
      job="Electrical Engineer"
      email="sunita.kumar@acme.co"
    />
    <ContactCard
      name="Henderson G. Sterling II"
      job="Receptionist"
      email="henderson-the-second@acme.co"
    />
    <Button status="Cancel">Cancel</Button>
    <Button status="Confirm">Confirm</Button>
    <MapContactCard />
    <AvatarApp />
    <ShoppingCart /> */}
    <ProfileCardApp />
  </>
);
