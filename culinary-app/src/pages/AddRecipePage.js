import React from "react";
import AddRecipe from "../components/AddRecipe";
import "../styles/AddRecipePage.css"; 

const AddRecipePage = () => {
    return (
        <div className="add-recipe-page">
            <div className="add-recipe-overlay"></div>
            <h2 className="add-recipe-page-title">Dodaj przepis</h2>
            <AddRecipe />
        </div>
    );
};

export default AddRecipePage;
