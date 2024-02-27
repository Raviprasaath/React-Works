import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [visible, setVisible] = useState(10);
  const [products, setProducts] = useState("");

  useEffect(()=> {
    async function fetching() {
      const fetchData = await fetch("https://dummyjson.com/products?limit=100");
      const response = await fetchData.json();
      setProducts(response.products);
    }
    fetching();
  }, [])

  const handlerScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setVisible(prev=>prev+10);
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", handlerScroll);
    return () => window.removeEventListener("scroll", handlerScroll);
  }, [])

  return (
    <div className='flex-head'>
      {products.length === 0 ? ("Loading...") : (
        products.slice(0, visible).map((item)=>(
          <div key={item.id} className='flex'>
            <img src={item.images} className='' width={'200px'} alt="img" />
            <p>{item.brand}</p>
            <p>{item.category}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App
