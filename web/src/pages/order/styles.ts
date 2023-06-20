import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StatusMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "#f39c12"; // Amarelo
    case "shipped":
      return "#3498db"; // Azul
    case "delivered":
      return "#2ecc71"; // Verde
    case "canceled":
      return "#e74c3c"; // Vermelho
    default:
      return "#333"; // Preto
  }
};
