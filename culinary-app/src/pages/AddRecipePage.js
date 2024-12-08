import React from "react";
import AddRecipe from "../components/AddRecipe";
import "../styles/AddRecipePage.css"; // Import stylu

const AddRecipePage = () => {
    return (
        <div className="add-recipe-page">
            <h2 className="add-recipe-page-title">Dodaj przepis</h2>
            <AddRecipe />
        </div>
    );
};

export default AddRecipePage;
