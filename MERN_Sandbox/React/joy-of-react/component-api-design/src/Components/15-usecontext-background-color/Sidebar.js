import React from "react";

import { FavouriteColorContext } from "./ColorContextApp";

function Sidebar() {
  const favouriteColor = React.useContext(FavouriteColorContext);

  return (
    <aside style={{ backgroundColor: favouriteColor }}>
      <a href="/">Logo Here</a>
      <nav>
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">Other Stuff</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ol>
      </nav>
    </aside>
  );
}

export default Sidebar;
