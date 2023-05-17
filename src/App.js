import './App.css';
import React, {useEffect} from 'react';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Navbar from './Components/Navbar/Navbar';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import supabase from './supabase';
import { useDispatch } from 'react-redux';
import { setUser } from './slices/userSlice';

const App =()=> {
 const dispatch = useDispatch();
const getUser =async()=>{
  const {data} = await supabase.auth.getSession();
  if(data.session){
    dispatch(setUser(data.session.user));
  }
};

useEffect(() => {
  getUser();
}, []);

  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/Products' element={<Products/>}/>
<Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
</Routes>
  </BrowserRouter>
   );
}

export default App;
