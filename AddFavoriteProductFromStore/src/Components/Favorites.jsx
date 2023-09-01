import React, { useEffect, useState } from "react";

function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  console.clear();

  useEffect(() => {
    const storedFav =
      JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    setFavoriteProducts(storedFav);
  }, []);

  const removeFav = (productId) => {
    const updatedFav = favoriteProducts.filter(item => item.id !== productId);
    setFavoriteProducts(updatedFav);
    localStorage.setItem('favoriteProducts', JSON.stringify(updatedFav))
  }

  return (
    <div className="favorite-component">
      <h2>Favorites</h2>
      {favoriteProducts.length === 0 ? (
        <p className="favorite-para">No favorite product found.</p>
        ) : (
            <div>                
                {favoriteProducts.map((product) => (
                    <div key={product.id} className="favorite-product">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="favorite-product-image"
                    />
                    <div className="favorite-product-details">
                        <h4>{product.title}</h4>
                        <p>Price: &#8377; {product.price}</p>
                        <button onClick={()=>removeFav(product.id)}>
                            Remove from Favorites
                        </button>
                    </div>
                    </div>
                ))}
            </div>      
      )}
    </div>
  );
}

export default Favorites;
