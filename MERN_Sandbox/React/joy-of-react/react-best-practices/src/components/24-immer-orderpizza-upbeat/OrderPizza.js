import React from "react";
import { current, produce } from "immer";

const INITIAL_STATE = {
  size: null,
  toppings: {},
};

function reducer(state, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "select-size": {
        draftState.size = action.slug;
        console.log(current(draftState)); // added for debug purpose
        break;
      }
      case "add-toppings": {
        draftState.toppings[action.slug] = true;
        console.log(current(draftState));
        break;
      }
      case "remove-toppings": {
        delete draftState.toppings[action.slug];
        break;
      }
      case "add-all-toppings": {
        console.log(action.selectedToppings);
        action.selectedToppings.forEach((slug) => {
          draftState.toppings[slug] = true;
        });
        break;
      }
      case "remove-all-toppings": {
        draftState.toppings = {};
        break;
      }
      default:
        console.error("Error!");
    }
  });
}

function OrderPizza() {
  const id = React.useId();

  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const isAllToppingsSelected = TOPPINGS.every(({ slug }) => {
    return state.toppings[slug] === true;
  });

  function handleToggleAllToppings(event) {
    event.preventDefault();
    isAllToppingsSelected
      ? dispatch({ type: "remove-all-toppings" })
      : dispatch({
          type: "add-all-toppings",
          selectedToppings: TOPPINGS.map((topping) => topping.slug),
        });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: call window.alert() with the selected toppings.
    window.alert(JSON.stringify(state, null, 2));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Your order</h2>
      <fieldset>
        <legend>Select size:</legend>
        <div className="size">
          {SIZES.map(({ slug, label }) => {
            const inputId = `size-${slug}`;
            // console.log(inputId);
            return (
              <label key={inputId} htmlFor={inputId}>
                <input
                  id={inputId}
                  type="radio"
                  name={`${id}-size-group`}
                  checked={state.size === slug}
                  onChange={() => {
                    dispatch({
                      type: "select-size",
                      slug,
                    });
                  }}
                />
                {label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend>Select your pizza toppings:</legend>
        <div className="toppings">
          {TOPPINGS.map(({ slug, label }) => {
            const inputId = `topping-${id}-${slug}`;
            // console.log(inputId);
            const hasTopping = state.toppings[slug];
            console.log(hasTopping);
            return (
              <label key={inputId} htmlFor={inputId}>
                <input
                  id={inputId}
                  type="checkbox"
                  checked={state.toppings[slug]}
                  onChange={() => {
                    dispatch({
                      type: hasTopping ? "remove-toppings" : "add-toppings",
                      slug,
                    });
                  }}
                />
                {label}
              </label>
            );
          })}
        </div>
        <div className="topping-actions">
          <button onClick={handleToggleAllToppings}>
            {isAllToppingsSelected ? "Remove All" : "Select All"}
          </button>
        </div>
      </fieldset>

      <div className="actions">
        <button>Order pizza</button>
      </div>
    </form>
  );
}

const SIZES = [
  { slug: "sm", label: 'Small (10")' },
  { slug: "md", label: 'Medium (12")' },
  { slug: "lg", label: 'Large (14")' },
  { slug: "xl", label: 'Pizza For Days (16")' },
];
const TOPPINGS = [
  { slug: "anchovies", label: "Anchovies" },
  { slug: "mushrooms", label: "Mushrooms" },
  { slug: "green-pepper", label: "Green Pepper" },
  { slug: "onions", label: "Onions" },
  { slug: "pineapple", label: "Pineapple" },
  { slug: "pepperoni", label: "Pepperoni" },
  { slug: "sausage", label: "Sausage" },
  { slug: "chicken", label: "Chicken" },
  { slug: "bacon", label: "Bacon" },
  { slug: "feta", label: "Feta" },
  { slug: "provolone", label: "Provolone" },
  { slug: "gummy-bears", label: "Gummy Bears" },
  { slug: "popcorn", label: "Popcorn" },
  { slug: "lucky-charms", label: "Lucky Charms" },
  { slug: "ice-cream", label: "Vanilla Ice Cream" },
  { slug: "cotton-candy", label: "Cotton Candy" },
];

export default OrderPizza;
