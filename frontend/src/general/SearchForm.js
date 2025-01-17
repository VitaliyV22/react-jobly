import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ searchFor }) {
    const [searchTerm, setSearchTerm] = useState("");

   
    function handleSubmit(e) {
        e.preventDefault();
   
        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="SearchForm mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control form-control-lg"
                    name="searchTerm"
                    placeholder="Enter search term..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SearchForm;