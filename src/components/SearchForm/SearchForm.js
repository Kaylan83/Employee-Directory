import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className = "form-inline search">
      <div className="form-group mb-2">
        <label htmlFor="search" className = "sr-only">Search:</label>
        <div className="form-group mx-sm-3 mb-2">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
          
        />
        </div>

        <button onClick={props.handleFormSubmit} className="btn btn-primary mb-2 ">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;