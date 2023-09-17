import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../Components/ProductForm';
import ProductList from '../Components//ProductList';

const Main = (props) => {
    
    const [products, setProducts] = useState([]);
    
    return (
        <div>
           <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <ProductList products={products} setProducts={setProducts}  ></ProductList>
        </div>
    )
}
export default Main;