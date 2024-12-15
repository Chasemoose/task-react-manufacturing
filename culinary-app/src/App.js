import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchRecipesPage from "./pages/SearchRecipesPage";
import RecipeItemPage from "./pages/RecipeItemPage";
import ErrorBoundary from "./ErrorBoundary";
import FavoriteRecipesPage from "./pages/FavoriteRecipesPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="app-container">
          <nav className="nav-bar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Recipe search</Link>
              </li>
              <li>
                <Link to="/favorites">Favorite recipes</Link>
              </li>
              <li>
                <Link to="/shopping-list">Shopping list</Link>
              </li>
            </ul>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchRecipesPage />} />
              <Route path="/recipe/:id" element={<RecipeItemPage />} />
              <Route path="/favorites" element={<FavoriteRecipesPage />} />
              <Route path="/shopping-list" element={<ShoppingListPage />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <p>
              Powered by{" "}
              <a
                href="https://spoonacular.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spoonacular API
              </a>
            </p>
          </footer>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
