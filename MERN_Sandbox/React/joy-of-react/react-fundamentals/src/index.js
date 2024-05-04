import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ShoppingList from "./01-render-shoppingList";
// import FriendlyGreeting from "./02-props-friendlyGreeting";
// import MessageElement from "./03-render-message";
import ContactCard from "./2. props/04-component-contactCard";
import Button from "./2. props/05-children-prop-button";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = React.createElement("h1", { id: "hello" }, "Welcome to React!");

root.render(
  <>
    {/* <ShoppingList />
    <FriendlyGreeting name="Varsha" />
    <FriendlyGreeting name="Julie" />
    <MessageElement /> */}
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
  </>
);
