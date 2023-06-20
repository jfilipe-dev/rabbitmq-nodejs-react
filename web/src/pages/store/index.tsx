import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import {
  ProductListContainer,
  ProductCard,
  ProductName,
  ProductPrice,
  QuantityInput,
  Button,
} from "./styles";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ProductList: React.FC = () => {
  const { id } = useParams<any>();
  const [products, setProducts] = useState<Product[]>([]);
  const [buyId, setBuyId] = useState(null);

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: number
  ) => {
    const quantity = parseInt(event.target.value);

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const handleAddToCart = () => {
    const filteredProducts = products.filter(
      (product) => product.quantity > 0
    )

    const body = {
      products: filteredProducts,
      userId: id,
    }

    fetch("http://192.168.3.68:3333/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch("http://192.168.3.68:3333/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
      });
  }, []);

  if (buyId) {
    return <Redirect to={`/order/${id}/${buyId}`} />;
  }

  return (
    <div>
      <ProductListContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <QuantityInput
              type="number"
              min="0"
              value={product.quantity}
              onChange={(event) => handleQuantityChange(event, product.id)}
            />
          </ProductCard>
        ))}
      </ProductListContainer>

      <Button onClick={handleAddToCart}>
        Listar Produtos com Quantidade Maior que 0
      </Button>
    </div>
  );
};

export default ProductList;
