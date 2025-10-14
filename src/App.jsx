
// import ProductCard from "./components/ProductCard/ProductCard"
import data from "./db/data.json"
import ProductList from "./components/ProductList/ProductList";
import images from "./db/images.json";


function App() {
  const { products} = data

  return (
   <ProductList products={products} images={images} />)
}

export default App
