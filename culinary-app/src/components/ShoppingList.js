import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromShoppingList,
  clearShoppingList,
} from "../redux/actions/recipeActions";
import "../styles/ShoppingList.css";

const ShoppingList = () => {
  const dispatch = useDispatch();

  // Pobierz shoppingList bezpośrednio ze stanu Redux
  const shoppingList = useSelector((state) => state.recipes.shoppingList);

  // Funkcja do usuwania elementu z listy zakupów
  const handleRemoveItem = (index) => {
    dispatch(removeItemFromShoppingList(index));
  };

  // Funkcja do czyszczenia listy zakupów
  const handleClearList = () => {
    if (window.confirm("Czy na pewno chcesz wyczyścić listę zakupów?")) {
      dispatch(clearShoppingList());
    }
  };

  return (
    <div className="shopping-list-container">
      <h2 className="shopping-list-title">Lista zakupów</h2>
      {shoppingList.length === 0 ? (
        <p className="shopping-list-empty">Twoja lista zakupów jest pusta!</p>
      ) : (
        <ul className="shopping-list">
          {shoppingList.map((item, index) => (
            <li key={index} className="shopping-list-item">
              <span>{item}</span>
              <button
                className="shopping-list-remove"
                onClick={() => handleRemoveItem(index)}
              >
                Usuń
              </button>
            </li>
          ))}
        </ul>
      )}
      {shoppingList.length > 0 && (
        <button className="shopping-list-clear" onClick={handleClearList}>
          Wyczyść listę
        </button>
      )}
    </div>
  );
};

export default ShoppingList;
