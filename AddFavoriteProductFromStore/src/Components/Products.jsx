import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const url = "https://fakestoreapi. com/products";
function Products() {
    const [products, setProducts] = useState([]);

    console.clear();
    useEffect(()=> {
        
    }, [])

    return (
        <div className='product-component'>
            <h2>Products</h2>
                {/* Use the below HTML for mapping the products */}
                <div className='product'>
                        <img
                            src="product-image"
                            alt="product-title"
                            className="product-image"
                        />
                    <div className='product-details'>
                        <h4>product-title</h4>
                        <p>Price: &#8377; product-price</p>
                        <button>Add to Favorites</button>
                    </div>
                </div>
        </div>
    )
}

export default Products;