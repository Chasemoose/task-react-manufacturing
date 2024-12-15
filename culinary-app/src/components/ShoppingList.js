import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromShoppingList,
  clearShoppingList,
} from "../redux/actions/recipeActions";
import "../styles/ShoppingList.css";

const ShoppingList = () => {
  const dispatch = useDispatch();

  const shoppingList = useSelector((state) => state.recipes.shoppingList);

    const handleRemoveItem = (index) => {
    dispatch(removeItemFromShoppingList(index));
  };

  const handleClearList = () => {
    if (window.confirm("Are you sure you want to clear your shopping list??")) {
      dispatch(clearShoppingList());
    }
  };

  return (
    <div className="shopping-list-container">
      <h2 className="shopping-list-title">Shopping list</h2>
      {shoppingList.length === 0 ? (
        <p className="shopping-list-empty">Your shopping list is empty!</p>
      ) : (
        <ul className="shopping-list">
          {shoppingList.map((item, index) => (
            <li key={index} className="shopping-list-item">
              <span>{item}</span>
              <button
                className="shopping-list-remove"
                onClick={() => handleRemoveItem(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {shoppingList.length > 0 && (
        <button className="shopping-list-clear" onClick={handleClearList}>
          Clear the list
        </button>
      )}
    </div>
  );
};

export default ShoppingList;
