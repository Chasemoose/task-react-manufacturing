import React from "react";
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="overlay"></div>
            <h2 className="homepage-header">Witaj w Przepisbook!</h2>
            <p className="homepage-para">"...gdzie przepisy rządzą, a kuchnia nigdy nie zasypia!"</p>
        </div>
    );
};

export default HomePage;
