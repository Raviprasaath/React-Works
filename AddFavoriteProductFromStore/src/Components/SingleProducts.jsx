import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [loading, SetLoading] = useState(true);

  console.clear();

  const { id } = useParams();

  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetchingSingleProduct(url);
  }, [id]);

  const fetchingSingleProduct = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProduct(data);
      SetLoading(false);
    } catch (error) {
      console.log(error);
      SetLoading(false);
    }
  };

  if (loading) {
    return <p className="loader">Loading...</p>;
  }

  return (
    <div className="single-product-component">
      <h1>Single Product ID: {product.id}</h1>
      {/* Use the below HTML to show a single product */}
      <div className="single-product">
        <img
          src={product.image}
          alt={product.image}
          className="single-product-image"
        />
        <div className="single-product-details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: &#8377; {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
