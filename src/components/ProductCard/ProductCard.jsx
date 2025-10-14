import { Card, Button } from "antd"

const ProductCard  = ( { product, images }) => {
    const randomImg = images[Math.floor(Math.random() * images.length)];

    const handleClick = () => {
    console.log(`Product ID: ${product.id}, Name: ${product.name}`);
  };
    return <Card style={{ width: 240 }}
      cover={<img alt={product.name} src={randomImg} />}>
        <div>
            <h3 >{product.name}</h3>
            <Button onClick={handleClick}>Buy now</Button>
            
        </div>
    </Card>
}

export default ProductCard