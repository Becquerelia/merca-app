//!IMPORTS:
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Home from "./pages/Home";
import CategoriesList from './pages/CategoriesList';
import ProductList from './pages/ProductList';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//!MAIN FUNCTION:
function App() {

  //RENDER VIEW:
  return (
    <div className="App">

      <Navbar />

      <Routes >  

       <Route path="/" element={ <Home /> } />
       <Route path="/categories-list" element={ <CategoriesList /> } />
       <Route path="/categories-list/:id/product-list" element={ <ProductList /> } />
        

       <Route path="/error" element={ <Error/> } />
       <Route path="*" element={ <NotFound /> } />  

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
