import React from "react";
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="overlay"></div>
            <h2 className="homepage-header">Welcome to Przepisbook!</h2>
            <p className="homepage-para">"...where recipes rule and the kitchen never sleeps!"</p>
        </div>
    );
};

export default HomePage;
