import React from "react";
import ShoppingList from "../components/ShoppingList";
import "../styles/ShoppingListPage.css";

const ShoppingListPage = () => {
  return (
    <div className="shopping-list-page-container">
      <div className="overlay"></div>
      <ShoppingList />
    </div>
  );
};

export default ShoppingListPage;
