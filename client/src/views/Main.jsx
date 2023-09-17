import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../Components/ProductForm';
import ProductList from '../Components//ProductList';

const Main = (props) => {
    
    const [product, setProduct] = useState([]);
    
    return (
        <div>
           <ProductForm product={product} setProduct={setProduct} />
            <hr/>
            <ProductList product={product} setProduct={setProduct}  ></ProductList>
        </div>
    )
}
export default Main;