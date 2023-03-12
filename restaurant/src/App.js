import "./App.css";
import MainBar from "./components/Navbar/Navbar";
import FoodList from "./pages/ProductList/ProductList.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FoodDetails from "./pages/Details/Details";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Contacts from "./components/Contacts/Contacts";
import Order from "./pages/Checkout/Checkout";
import { useMeals } from "./context/MealsContext";
import { useEffect } from "react";

function App() {
  const { fetchMeals } = useMeals();

  useEffect(()=>{
    fetchMeals()
  }, []);

  return (
    <div className="restaurant-app">
      <MainBar></MainBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-list" element={<FoodList />} />
        <Route path="/food_details/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />kojij
        <Route path="/checkout" element={<Order />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;