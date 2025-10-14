import ProductCard from "/src/components/ProductCard/ProductCard";
import {Space} from "antd"

const ProductList = ({ products, images }) => {
  return (
    <Space size={40} wrap>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} images={images} />
      ))}
    </Space>
  );
};

export default ProductList;
