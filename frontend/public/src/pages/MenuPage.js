import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import SearchBar from '../components/SearchBar';
import menuData from '../api/data';

const MenuPage = () => {
  const [search, setSearch] = useState('');
  const filteredMenu = menuData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <div>
        {filteredMenu.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
