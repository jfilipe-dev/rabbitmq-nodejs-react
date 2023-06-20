import React, { useEffect, useState } from "react";
import {
  StatusContainer,
  StatusMessage,
  StyledOrders,
  ProductName,
  ProductId,
  Price,
  Quantity,
  Button,
  TitleMessage,
} from "./styles";
import { useParams } from "react-router-dom";

type OrdersProps = {
  id: string;
  items: {
    product: {
      id: string;
      name: string;
      price: number;
    };
    quantity: number;
    subtotal: number;
  }[];
  total: number;
  status: string;
  user: {
    id: string;
    email: string;
  };
};

const Order = () => {
  const { id, buyId } = useParams<any>();

  const [orders, setOrders] = useState<OrdersProps>();

  const [userData, setUserData] = useState<OrdersProps>();

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      setUserData(JSON.parse(userDataString));
    }
  }, []);

  if (!userData) {
    return <div>Carregando...</div>;
  }

  const fetchOrder = async () => {
    try {
      const response = await fetch(
        `http://192.168.3.68:3333/orders/${id}/${buyId}`
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        localStorage.clear();
      } else {
        console.log("Erro ao obter o pedido");
      }
    } catch (error) {
      console.log("Erro ao obter o pedido:", error);
    }
  };

  return (
    <StatusContainer>
      <TitleMessage color={userData.status}>Resumo do Pedido:</TitleMessage>
      <div>ID do Pedido: {userData.id}</div>
      <StatusMessage color={userData.status}>
        Status do Pedido: {userData.status}
      </StatusMessage>
      <div>
        {userData.items.map((order: any, index: number) => (
          <StyledOrders key={index}>
            <ProductName>Produto: {order.product.name}</ProductName>
            <ProductId>ID do Produto: {order.product.id}</ProductId>
            <Price>Preço: R$ {order.product.price}</Price>
            <Quantity>Quantidade: {order.quantity}</Quantity>
            <Quantity>SubTotal: R${order.subtotal}</Quantity>
          </StyledOrders>
        ))}
      </div>
      <div>Tota: R${userData?.total}</div>
      <Button onClick={fetchOrder}>Atualizar Status</Button>
    </StatusContainer>
  );
};

export default Order;
