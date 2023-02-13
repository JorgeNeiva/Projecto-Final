import './App.css';
import MainBar from './components/Navbar/Navbar';
import FoodList from './components/productList/ProductList.jsx';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import FoodDetails from './pages/Details';
import Footer from './components/Footer';


function App(){
  return(
    
    <div>
      <MainBar></MainBar>
      <Routes>
         <Route exact path = "/" element = {<Home/>} />
         <Route path = "/product-list" element = {<FoodList/>}/>
         <Route path = "/food_details" element= {<FoodDetails/>}/>
      </Routes>
      <Footer></Footer>
    
    </div>
   
    

  )
}

export default App