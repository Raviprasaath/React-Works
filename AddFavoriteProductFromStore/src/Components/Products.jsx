import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://fakestoreapi.com/products";

function Products() {
  const [products, setProducts] = useState([]);

  console.clear();
  useEffect(() => {
    fetchingUrl(url);
  }, []);

  const fetchingUrl = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorites = (product) => {
    const favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    const isProductInFavorites = favoriteProducts.some(
      (favProduct) => favProduct.id === product.id
    );

    if (!isProductInFavorites) {
      favoriteProducts.push(product);
      localStorage.setItem("favoriteProducts",JSON.stringify(favoriteProducts)
      );
    }
  };

  return (
    <div className="product-component">
      <h2>Products</h2>

      {products.map((item) => (
          <div className="product" key={item.id}>
            <Link to={`/products/${item.id}`}>
                <img src={item.image} alt={item.title} className="product-image" />
            </Link>
            <div className="product-details">
              <h4>{item.title}</h4>
              <p>Price: &#8377; {item.price}</p>
              <button onClick={() => addToFavorites(item)}>
                Add to Favorites
              </button>
            </div>
          </div>
      ))}
    </div>
  );
}
export default Products;


