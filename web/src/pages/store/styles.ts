import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const QuantityInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
