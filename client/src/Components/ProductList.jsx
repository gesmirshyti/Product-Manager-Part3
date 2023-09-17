import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'; 
const ProductList = (props) => {

    const {product,setProduct} = props;
    
    useEffect(()=>{
    	axios.get(`http://localhost:8000/api/products/${id}`)
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div>
            {
                product.map((product, index)=>{
                return <p key={index}> 
                Title : {product.title}, 
                Price : {product.price},
                Description : {product.description},

                </p>
                })
            };
        </div>
    );
}
export default ProductList;

