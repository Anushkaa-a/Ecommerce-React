import React, { useEffect, useState } from 'react'
import { getProductsByCategory } from '../api/api'
import ProductCard from '../components/ProductCard'
import { ClipLoader } from "react-spinners";
import heroImg from "../assets/hero-banner.jpg"
import '../css/Home.css'
import { searchProducts } from '../api/api';

const Home = ({searchQuery}) => {

   const [searchResults, setSearchResults] = useState([]);
   const [loadingSearch, setLoadingSearch] = useState(false);
  

    const [women, setWomen] = useState([]);
    const [men, setMen] = useState([]);
    const [furniture, setFurniture] = useState([]);
    const [womenShoe, setWomenShoe] = useState([])
    const [menShoe, setMenShoe] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchData = async ()=>{
        setLoading(true)
       try{
        const womenData = await getProductsByCategory("womens-dresses");
        const menData = await getProductsByCategory("mens-shirts");
        const furnitureData = await getProductsByCategory("furniture");
        const mensShoesData = await getProductsByCategory("mens-shoes");
       const womensShoesData = await getProductsByCategory("womens-shoes");

        setWomen(womenData.slice(0, 5));  
        setMen(menData.slice(0, 5));
        setMenShoe(mensShoesData.slice(0, 5));
        setWomenShoe(womensShoesData.slice(0, 5));
        setFurniture(furnitureData.slice(0, 5));
       }catch(err){
        console.log(err)
        setError("Failed to load products :(")
       }finally{
        setLoading(false)
       }
    }

    fetchData()
  }, [])

  useEffect(() => {
  if (!searchQuery) {
    setSearchResults([]);
    return;
  }

  const fetchSearchResults = async () => {
    setLoadingSearch(true);
    try {
      const results = await searchProducts(searchQuery);
      setSearchResults(results);
    } catch (err) {
      console.log(err);
      setError('Failed to load search results :(');
    } finally {
      setLoadingSearch(false);
    }
  };

  fetchSearchResults();
}, [searchQuery]);


const isLoading = loading || loadingSearch;




 return (
  <div className="home">
    <div className="img-slider"> 
      <img src={heroImg} alt="" />
    </div>
    {error && <h4>{error}</h4>}

    {isLoading ? (
      <div className="flex justify-center items-center h-64">
        <ClipLoader color="#010101" loading={true} size={50} />
      </div>
    ) : searchQuery ? (
      <div className="product-cards">
        <h2>Search Results for "{searchQuery}"</h2>
        <div className="products">
          {searchResults.length ? (
            searchResults.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    ) : (
      <div className="product-cards">
        <div className="heading">
          <h1>SHOP BY CATEGORY</h1>
        </div>

        <section>
          <h2 className="category">WOMEN</h2>
          <div className="products">
            {women.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="category">MEN</h2>
          <div className="products">
            {men.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="category">WOMEN'S FOOTWEAR</h2>
          <div className="products">
            {womenShoe.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="category">MEN'S FOOTWEAR</h2>
          <div className="products">
            {menShoe.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="category">FURNITURE</h2>
          <div className="products">
            {furniture.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
      </div>
    )}
  </div>
);

}

export default Home