
import data from "./db/data.json"
import ProductList from "./components/ProductList/ProductList";
import imagesData from "./db/images.json";



function App() {
  const { products} = data
  const images = imagesData.images

  return (
   <ProductList products={products} images={images} />)
}

export default App
