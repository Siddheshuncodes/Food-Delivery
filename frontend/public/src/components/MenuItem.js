// MenuPage.js
import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import SearchBar from '../components/SearchBar';

const MenuPage = ({ menuItems }) => {
  const [search, setSearch] = useState('');

  const filteredMenu = menuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <div className="menu-list">
        {filteredMenu.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
