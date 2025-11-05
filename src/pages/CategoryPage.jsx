import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/api";
import { ClipLoader } from "react-spinners";
import ProductCard from "../components/ProductCard";
import { categoryMap } from "../components/CategoryMap";
import '../css/CategoryPage.css'


const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    

  const { category } = useParams(); 

 useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const subCategories = categoryMap[category];
      if (!subCategories) {
        setProducts([]);
        return;
      }

      let allProducts = [];
      for (const sub of subCategories) {
        const res = await fetch(`https://dummyjson.com/products/category/${sub}`);
        const data = await res.json();
        allProducts = [...allProducts, ...data.products];
      }

      setProducts(allProducts);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  if (category) {
    fetchProducts();
  }
}, [category]);



  return (
  <div className="cat">
    {error && <h4>{error}</h4>}

    {loading ? (
      <ClipLoader color="#010101" loading={loading} size={50} />
    ) : (
      <>
        <h1>{category ? category.toUpperCase() : "CATEGORY"}</h1>
        <div className="products">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </>
    )}
  </div>
);

}

export default CategoryPage