import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Navbar/Navbar';
import FoodList from './components/productList/ProductList.jsx';
import { BrowserRouter, Router } from 'react-router-dom';

function App(){
  return(
    <h1>
      <SearchBar></SearchBar>
      <FoodList></FoodList>
    </h1>

  )
}


export default App