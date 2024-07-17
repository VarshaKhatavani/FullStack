import React from 'react';

function Header({ actions }) {
  return (
    <header>
      <h1>
        Pintor Famoso
        <span className="artist-title">
          Abstract Expressionist
        </span>
      </h1>
      {actions}
    </header>
  );
}
export default Header;