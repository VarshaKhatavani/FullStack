import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import ShoppingList from "./1. render/01-render-shoppingList";
// import MessageElement from "./1. render/03-render-message";

// import FriendlyGreeting from "./2. props/02-props-friendlyGreeting";
// import ContactCard from "./2. props/04-component-contactCard";
// import Button from "./2. props/05-children-prop-button";

// import MapContactCard from "./3. map/06-map-contactCard";
// import AvatarApp from "./3. map/07-map-avatar";
// import ShoppingCart from "./3. map/08-shoppingCart";

// import ProfileCardApp from "./4. styling/09-profileCard-app";
// import GraphApp from "./interview/10-graph-app";
// import GridApp from "./interview/11-grid-app";

// import ModuleApp from "./4. styling/css-module/ModuleApp";
// import ModuleAppParam from "./4. styling/css-module-param/ModuleAppParam";
import MovieApp from "./4. styling/movie-rating/MovieApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = React.createElement("h1", { id: "hello" }, "Welcome to React!");

root.render(
  <>
    {/* render components */}
    {/* <ShoppingList />
    <MessageElement /> */}

    {/* use of props */}
    {/* <FriendlyGreeting name="Varsha" />
    <FriendlyGreeting name="Julie" />
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
    <Button status="Confirm">Confirm</Button> */}

    {/*  use of map */}
    {/* <MapContactCard /> */}
    {/* <AvatarApp /> */}
    {/* <ShoppingCart /> */}

    {/* <ProfileCardApp /> */}
    {/* <GraphApp /> */}
    {/* <GridApp /> */}

    {/* <ModuleApp /> 
    <ModuleAppParam /> */}
    <MovieApp />
  </>
);
