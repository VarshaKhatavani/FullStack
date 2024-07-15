import React from 'react';
import { Search } from 'react-feather';

function Header() {
  return (
    <header>
      <div className="header-side"></div>
      The News
      <div className="header-side search-wrapper">
        <Search size={20} />
      </div>
    </header>
  );
}

export default Header;