import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="form-inline d-flex justify-content-right md-form form-sm">
        <input
          className="form-control form-control-sm mr-3 w-45"
          type="text"
          placeholder="Search for a city…"
          aria-label="Search"
          id="search-input"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-default">
          <i className="fas fa-search" aria-hidden="true"></i>
        </button>
        <button className="btn btn-default">
          <i className="fas fa-location-arrow"></i>
        </button>
      </form>
    </div>
  );
}