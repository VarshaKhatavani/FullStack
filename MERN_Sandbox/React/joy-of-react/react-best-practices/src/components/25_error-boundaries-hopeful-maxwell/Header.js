import React from 'react';
import { Search, Menu, User } from 'react-feather';

function Header() {
  return (
    <header>
      <button>
        <Search />
      </button>
      <button className="menu-btn">
        <Menu />
      </button>
      <button>
        <User />
      </button>
    </header>
  );
}

export default Header;