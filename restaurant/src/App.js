import logo from './logo.svg';
import './App.css';
import MainBar from './components/Navbar/Navbar';
import FoodList from './components/productList/ProductList.jsx';
import { BrowserRouter, Router } from 'react-router-dom';

function App(){
  return(
    <h1>
      <MainBar></MainBar>
      <FoodList></FoodList>
    </h1>

  )
}


export default App