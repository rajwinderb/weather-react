import React from "react";
import Search from "./Search";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h2 className="today" id="now-date">
        Today
      </h2>
      <nav>
        <Search />
      </nav>
    </div>
  );
}