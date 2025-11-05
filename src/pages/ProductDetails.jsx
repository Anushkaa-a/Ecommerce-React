import React, { useEffect, useState } from 'react';;
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/api';
import { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { ClipLoader } from 'react-spinners';
import '../css/ProductDetails.css'

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    const {addToCart, addToWishlist, removeFromWishlist, isInWishlist} = useContext(CartContext);

     const favorite = product? isInWishlist(product.id): false;

    function onFavoriteClick() {
        if (!product) return;
       if (favorite) removeFromWishlist(product.id);
      else addToWishlist(product);
    };


    useEffect(()=>{
        const fetchProduct= async ()=>{
            try{
                const data = await getProductById(id);
                setProduct(data)
            }catch(err){
                setError('failed to load details.')
            }finally{
                setLoading(false)
            }
        }

        fetchProduct()
    },[id])

     if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader color="#010101" loading={true} size={50} />
      </div>
    );
  }

  if (error) return <h4>{error}</h4>;
  if (!product) return <h4>No product found.</h4>;

    const {
    rating,
    brand,
    reviews
  } = product || {};



  return (
    <div className='productDetails'>
        <div className="img">
            <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="info">
             <h5>{brand}</h5>
             <h2>{product.title}</h2>
             <p>⭐/{rating}  {reviews.length} reviews</p>
             <h1>${product.price} </h1>
            <div className="btns">
              <button className='addToCrt' 
                onClick={()=>{
                addToCart(product)
            }}> <i className="fa-solid fa-cart-shopping"></i> Add to cart</button>

           <button className={`fav-btn ${isInWishlist(product?.id) ? 'active' : ''}`}
           onClick={()=>{
            onFavoriteClick();
           }}><i className="fa-solid fa-heart"></i>
           </button>
            </div>
            <p>Free delivery on orders above $30.0</p>

            <hr />
        </div>
    </div>
  )
}

export default ProductDetails