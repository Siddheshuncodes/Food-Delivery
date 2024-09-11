import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>My Restaurant</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
};

export default Header;
