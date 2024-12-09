import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <div className="Header">
      <form className="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          id="search-form-input"
          className="search-form-input"
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
    </div>
  );
}