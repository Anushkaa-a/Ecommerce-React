const BASE_URL = "https://dummyjson.com";


export const getProductsByCategory = async (category) => {
  const url = `${BASE_URL}/products?limit=0`; 
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  return data.products.filter(p =>
    p.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const searchProducts = async (query) => {
  const url = `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.products;
};

// export async function getProductById(id){
//   const res = await fetch(`${BASE_URL}/products/${id}`);
//   if (!res.ok) throw new console.error(("failed to fetch product"));
//   return res.json;
// }

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  const data = await response.json();
  console.log(data);
  return data;
};

  

