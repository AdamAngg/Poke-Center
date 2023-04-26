import React from "react";
import "../styles/styles.scss";
export const Navbar = ({ onChange }) => {
  return (
    <div className="navbar-container">
      <h1 className="title">Pokemon search</h1>
      <input className="pokemon-filter" onChange={onChange} />
    </div>
  );
};
