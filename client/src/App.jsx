import "./App.css";
import ProductForm from "./Components/ProductForm";
import axios from 'axios';
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Main from "./views/Main";
import Details from "./Components/Details";

function App() {
  return (
    <div>
         	<BrowserRouter>
            <Routes>
	    <Route element={<Main/>} path="/products" default />
      <Route element={<Details/>} path="/products/:id"/>
            </Routes>
    	</BrowserRouter>
    </div>
  );
}

export default App;
