import React from 'react';
import { produce } from 'immer';

function OrderPizza() {
  const id = React.useId();
  
  function handleSubmit(event) {
    event.preventDefault();
    
    // TODO: call window.alert() with the selected toppings.
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Your order</h2>
      <fieldset>
        <legend>Select size:</legend>
        <div className="size">
          {SIZES.map(({ slug, label }) => {
            const inputId = `size-${slug}`;

            return (
              <label key={inputId} htmlFor={inputId}>
                <input
                  id={inputId}
                  type="radio"
                  name={`${id}-size-group`}
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
            
            return (
              <label key={inputId} htmlFor={inputId}>
                <input
                  id={inputId}
                  type="checkbox"
                />
                {label}
              </label>
            );
          })}
        </div>
        <div className="topping-actions">
          <button>Select All</button>
        </div>
      </fieldset>
      
      <div className="actions">
        <button>Order pizza</button>
      </div>
    </form>
  );
}

const SIZES = [
  { slug: 'sm', label: 'Small (10")' },
  { slug: 'md', label: 'Medium (12")' },
  { slug: 'lg', label: 'Large (14")' },
  { slug: 'xl', label: 'Pizza For Days (16")' },
]
const TOPPINGS = [
  { slug: 'anchovies', label: 'Anchovies' },
  { slug: 'mushrooms', label: 'Mushrooms' },
  { slug: 'green-pepper', label: 'Green Pepper' },
  { slug: 'onions', label: 'Onions' },
  { slug: 'pineapple', label: 'Pineapple' },
  { slug: 'pepperoni', label: 'Pepperoni' },
  { slug: 'sausage', label: 'Sausage' },
  { slug: 'chicken', label: 'Chicken' },
  { slug: 'bacon', label: 'Bacon' },
  { slug: 'feta', label: 'Feta' },
  { slug: 'provolone', label: 'Provolone' },
  { slug: 'gummy-bears', label: 'Gummy Bears' },
  { slug: 'popcorn', label: 'Popcorn' },
  { slug: 'lucky-charms', label: 'Lucky Charms' },
  { slug: 'ice-cream', label: 'Vanilla Ice Cream' },
  { slug: 'cotton-candy', label: 'Cotton Candy' },
];

export default OrderPizza;