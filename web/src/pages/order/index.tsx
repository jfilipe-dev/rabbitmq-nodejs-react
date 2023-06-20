import React, { useEffect, useState } from "react";
import { StatusContainer, StatusMessage, getStatusColor } from "./styles";

export type OrderProps = {
  status: string;
};

const Order = ({ status }: OrderProps) => {
  const [order, setOrder] = useState<any>(null);
  const color = getStatusColor(status);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch("URL_DA_API");
        if (response.ok) {
          const data = await response.json();
          setOrder(data);
        } else {
          console.log("Erro ao obter o pedido");
        }
      } catch (error) {
        console.log("Erro ao obter o pedido:", error);
      }
    };

    fetchOrder();
  }, []);

  if (!order) {
    return <div>Carregando...</div>;
  }

  return (
    <StatusContainer>
      <StatusMessage color={color}>Status do Pedido: {status}</StatusMessage>
      <div>ID do Pedido: {order.id}</div>
      {/* Restante das informações do pedido */}
    </StatusContainer>
  );
};

export default Order;
