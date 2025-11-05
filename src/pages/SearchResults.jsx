import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { searchProducts } from '../api/api'
import ProductCard from '../components/ProductCard'
import { ClipLoader } from "react-spinners";
import '../css/SearchResults.css'

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchResults = async () => {
      setLoading(true);
      try {
        const data = await searchProducts(query);
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  if (loading) return <div className="loader"><ClipLoader color="#010101" size={50} /></div>;

  return (
    <div className="search-results">
      <h3>Search Results for "{query}"</h3>
      <div className="products">
        {results.length ? (
          results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
