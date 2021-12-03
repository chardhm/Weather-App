import React, { useState } from "react";
import './SearchBar.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form action="" className="search-bar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input className="input" type="text" placeholder="Search City..." value={city} onChange={e => setCity(e.target.value)}/>
    </form>
  );
}