import React from "react";
// import { useDispatch } from "react-redux";
// import { fetchRecipes } from "./redux/actions/recipeActions";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import AddRecipePage from "./pages/AddRecipePage";
import HomePage from "./pages/HomePage";
import SearchRecipesPage from "./pages/SearchRecipesPage";
import RecipeItemPage from "./pages/RecipeItemPage"; 
import ErrorBoundary from "./ErrorBoundary";
import FavoriteRecipesPage from "./pages/FavoriteRecipesPage";
import ShoppingListPage from "./pages/ShoppingListPage"; 
import "./styles/App.css";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRecipes()); 
  // }, [dispatch]);

  return (
    <Router>
      <ErrorBoundary>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/add">Dodaj przepis</Link>
            </li> */}
            <li>
              <Link to="/search">Wyszukaj przepis</Link>
            </li>
            <li>
              <Link to="/favorites">Ulubione Przepisy</Link>
            </li>
            <li>
              <Link to="/shopping-list">Lista Zakupów</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/add" element={<AddRecipePage />} /> */}
          <Route path="/search" element={<SearchRecipesPage />} />
          <Route path="/recipe/:id" element={<RecipeItemPage />} />
          <Route path="/favorites" element={<FavoriteRecipesPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
