import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSearchHistory } from "../redux/actions/recipeActions";
import "../styles/SearchHistory.css";

const SearchHistory = () => {
    const searchHistory = useSelector((state) => state.recipes.searchHistory);
    const dispatch = useDispatch();

    const handleClearHistory = () => {
        dispatch(clearSearchHistory());
    };

    return (
        <div className="search-history-container">
            <h3 className="search-history-title">Search history</h3>
            {searchHistory.length > 0 ? (
                <ul className="search-history-list">
                    {searchHistory.map((query, index) => (
                        <li key={index} className="search-history-item">
                            {query}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="search-history-empty">No search history.</p>
            )}
            <button className="search-history-clear" onClick={handleClearHistory}>
            Clear history
            </button>
        </div>
    );
};

export default SearchHistory;
